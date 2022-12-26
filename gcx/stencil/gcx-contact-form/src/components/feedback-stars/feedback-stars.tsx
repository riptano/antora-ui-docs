import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'feedback-stars',
  styleUrl: 'feedback-stars.css',
  shadow: true,
})
export class FeedbackStars {
  @Prop() rating: number = 0;
  @Event({
    eventName: 'rateArticle',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  rateArticle: EventEmitter<number>;

  render() {
    return (
      <div id="feedback-stars" class="stars" data-stars={this.rating}>
        <svg
          height="25"
          width="23"
          class="star rating"
          onClick={() => {
            this.rateFeedback(1);
          }}
        >
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg
          height="25"
          width="23"
          class="star rating"
          onClick={() => {
            this.rateFeedback(2);
          }}
        >
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg
          height="25"
          width="23"
          class="star rating"
          onClick={() => {
            this.rateFeedback(3);
          }}
        >
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg
          height="25"
          width="23"
          class="star rating"
          onClick={() => {
            this.rateFeedback(4);
          }}
        >
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
        <svg
          height="25"
          width="23"
          class="star rating"
          onClick={() => {
            this.rateFeedback(5);
          }}
        >
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
      </div>
    );
  }
  rateFeedback(rate) {
    this.rateArticle.emit(rate);
  }
}
