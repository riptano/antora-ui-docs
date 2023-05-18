export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") +
    (last ? ` ${last}` : "");
}

export function buildFeedbackInfo(subject, id, rate, name, email, suggestions) {
  const feedbackInfo = {
    //email: "docs@datastax.com",
    //subject: `Feedback | ${subject}`,
    //message:
    id: id,
    page: `<a href="${window.location.href}">${subject}</a>`,
    rate: rate,
    name: name,
    email: email,
    suggestions: suggestions
    
    // Rating: ${rate}
  };
  return feedbackInfo;
}

export function buildFeedbackRating(subject, id, rate) {
  const feedbackRating = {
    //email: "docs@datastax.com",
    //subject: `Rating | ${subject}`,
    //message:
    id: id,
    page: `<a href="${window.location.href}">${subject}</a>`,
    rate: rate
    //
  };
  return feedbackRating;
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