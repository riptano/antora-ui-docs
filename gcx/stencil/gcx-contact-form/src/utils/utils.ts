export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") +
    (last ? ` ${last}` : "");
}

export function buildFeedbackInfo(subject, /*rate,*/ id, name, email, suggestions) {
  const feedbackInfo = {
    email: "docs@datastax.com",
    subject: `Feedback | ${subject}`,
    message: `
    Page: <a href="${window.location.href}">${subject}</a>
    ID: ${id}
    Name: ${name}
    Email: ${email}
    Suggestions: ${suggestions}
    `,
    // Rating: ${rate}
  };
  return feedbackInfo;
}

export function buildFeedbackRating(subject, id, rate) {
  const feedbackRating = {
    email: "docs@datastax.com",
    subject: `Rating | ${subject}`,
    message: `
    Page: <a href="${window.location.href}">${subject}</a>
    ID: ${id}
    Rating: ${rate}
    `,
  };
  return feedbackRating;
}

export function addRatingList(rate) {
  const addRate = {
    page: window.location.href,
    rate: rate
  }
  const ratingList = JSON.parse(sessionStorage.getItem('docs_rating')) || []
  ratingList.push(addRate)
  sessionStorage.setItem('docs_rating', JSON.stringify(ratingList));
}

export function getRatingList() {
  const url = window.location.href;
  const ratingList = JSON.parse(sessionStorage.getItem('docs_rating')) || []
  const rate = ratingList.filter(function(s){ return s.page == url })[0]
  return rate
}

import { MDCTextFieldHelperText } from "@material/textfield/helper-text";
import { MDCTextField } from "@material/textfield";
import { MDCSwitch } from "@material/switch";

export function initTextField(validInput) {
  [].map.call(
    document.querySelectorAll(".mdc-text-field"),
    (el: any) => {
      const textField = new MDCTextField(el);
      if (textField.ripple) textField.ripple.destroy();
      textField.valid = validInput;
      return textField;
    },
  );
  [].map.call(
    document.querySelectorAll(".mdc-text-field-helper-text"),
    (el: any) => {
      return new MDCTextFieldHelperText(el);
    },
  );

  [].map.call(
    document.querySelectorAll(".mdc-switch"),
    (el: any) => {
      return new MDCSwitch(el);
    },
  );
}
export const CONTACT_US = "https://contact.api.docs.datastax.com/contact-us";
