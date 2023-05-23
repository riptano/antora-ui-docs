import { Component, h, Prop, Listen, State } from '@stencil/core';
import { buildFeedbackInfo, buildFeedbackRating, CONTACT_US } from '../../utils/utils';

@Component({
  tag: 'feedback-form',
  styleUrl: 'feedback-form.scss',
  shadow: false,
})
export class FeedbackForm {
  @Prop() article: string;
  @State() rate: number = 0;
  @State() id: string = '';
  @State() name: string = '';
  @State() email: string = '';
  @State() suggestions: string = '';
  @State() formState: 'initial' | 'submitting' | 'error' | 'complete' = 'initial';
  @State() showErrorEmail = false;
  @State() ready = false;

  @Listen('rateArticle')
  async todoCompletedHandler(event: CustomEvent<number>) {
    const rate = event.detail;
    this.id = this.randomString()
    if (rate) {
      this.formState = 'submitting';
      this.rate = rate;        
      event.preventDefault();
      await this.fetchSubmitRating();
    }
  }
  async submitForm(e) {
    e.preventDefault();
    await this.fetchSubmit();
  }
  handleName(event) {
    this.name = event.target.value;
  }

  validInput() {
    if (this.email.trim().length > 0) {
      const regexp = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
      this.showErrorEmail = !regexp.test(this.email);
    } else {
      this.showErrorEmail = false;
    }
    return this.showErrorEmail;
  }

  checkButton() {
    if((!this.validInput()&&this.email) || this.suggestions.length > 1) {
      this.ready = true;
    } else {
      this.ready = false
    }
  }

  handleEmail(event) {
    this.email = event.target.value;
    this.checkButton()
    this.validInput()
  }
  handleSugges(event) {
    this.suggestions = event.target.value;
    this.checkButton()
  }
  randomString() {
    return String(
      Date.now().toString(32) +
        Math.random().toString(16)
    ).replace(/\./g, '')
  }

  async fetchSubmit() {
    if (!this.validInput()) {
      let submitBtn = document.querySelector('.helios-button .mdc-button__label');
      submitBtn.innerHTML = 'Sending...'
      this.ready = false
      let articleTitle = document.querySelector('h1.page').innerHTML;
      const data = buildFeedbackInfo(articleTitle, this.id, this.rate, this.name, this.email, this.suggestions);
      try {
        await fetch(CONTACT_US, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=UTF-8' },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);
      }

      this.formState = 'complete';
    }
  }
  async fetchSubmitRating() {
    if (!this.validInput()) {
      let articleTitle = document.querySelector('h1.page').innerHTML;
      const data = buildFeedbackRating(articleTitle, this.id, this.rate);
      try {
        await fetch(CONTACT_US, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=UTF-8' },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    if (this.formState == 'initial') {
      return this.renderStarts();
    } else if (this.formState == 'submitting') {
      return this.renderForm();
    } else if (this.formState == 'complete') {
      return this.renderThanks();
    }
  }

  renderStarts() {
    return (
      <div id="feedback" class="feedback-wrapper helios-card mdc-card mdc-card--outlined">
        <h2>{this.article}</h2>
        <feedback-stars rating={this.rate}></feedback-stars>
      </div>
    );
  }

  renderForm() {
    //  initTextField(!this.showErrorMessage);

    return (
      <div id="feedback" class="feedback-wrapper helios-card mdc-card mdc-card--outlined">
        <h2>{this.article}</h2>
        <feedback-stars rating={this.rate}></feedback-stars>
        <p class="rated"><strong>Thank you for rating this page!</strong></p>
        <div>
          <form
            class="feedback-form"
            action="#"
            onSubmit={e => {
              this.submitForm(e);
            }}
          >
            <div class="row">
              <label class="helios-text-field mdc-text-field">
                <span class="helios-text-field-label" id="label-name">
                  Name
                </span>
                <span class="helios-text-field-outline">
                  <input class="mdc-text-field__input" type="text" aria-labelledby="label-name" value={this.name} onInput={event => this.handleName(event)} />
                </span>
              </label>
            </div>

            <div class="row">
              <label class={this.showErrorEmail ? 'helios-text-field mdc-text-field--invalid' : 'helios-text-field mdc-text-field'}>
                <span class="helios-text-field-label" id="label-email">
                  Email
                </span>
                <span class="helios-text-field-outline">
                  <input type="text" class="mdc-text-field__input" aria-labelledby="label-mail" value={this.email} onInput={event => this.handleEmail(event)} />
                </span>
                {this.showErrorEmail ? (
                  <span class="helios-text-field-label" id="label-email">
                    Valid Email is required.
                  </span>
                ) : (
                  <slot></slot>
                )}
              </label>
            </div>

            <div class="row">
              <label class={'helios-text-field mdc-text-field--textarea mdc-text-field'}>
                <span class="helios-text-field-label" id="label-suggestions">
                  Suggestions
                </span>
                <span class="helios-text-field-outline">
                  <textarea
                    class="mdc-text-field__input resizable"
                    value={this.suggestions}
                    onInput={event => this.handleSugges(event)}
                    rows={4}
                    cols={40}
                    aria-labeledby="label-suggestions"
                  ></textarea>
                </span>
              </label>
            </div>
            <div class="row">
              <p class="terms">By clicking ‘Submit’, you confirm you agree to DataStax’s <a href="https://www.datastax.com/legal/datastax-website-privacy-policy" target="_blank">Privacy Policy</a> and <a href="https://www.datastax.com/legal/datastax-website-terms-use" target="_blank">Terms of Use</a>. 
              If you provided an email address, we may contact you in the future regarding your feedback.</p>
            </div>
            <div class="row">
              <button type="submit" disabled={!this.ready} class="helios-button mdc-button">
                <span class="mdc-button__label">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  renderThanks() {
    return (
      <div class="feedback-wrapper helios-card mdc-card mdc-card--outlined">
        <span class="mdc-card__content final">Thank you for your Feedback!</span>
      </div>
    );
  }

  switchTheme() {
    let current = document.documentElement.getAttribute('data-theme');
    let target = 'light';
    if ('light' === current) {
      target = 'dark';
    }
    document.documentElement.setAttribute('data-theme', target);
  }
}
