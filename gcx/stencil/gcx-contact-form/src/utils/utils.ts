export function format(first: string, middle: string, last: string): string {
  return (first || "") + (middle ? ` ${middle}` : "") +
    (last ? ` ${last}` : "");
}

export function buildFeedbackInfo(subject, rate, name, email, suggestions) {
  const feedbackInfo = {
    email: "docs@datastax.com",
    subject: `Feedback | ${subject}`,
    message: `
    Page: <a href="${window.location.href}">${subject}</a>
    Rating: ${rate}
    Name: ${name}
    Email: ${email}
    Suggestions: ${suggestions}
    `,
  };
  return feedbackInfo;
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
