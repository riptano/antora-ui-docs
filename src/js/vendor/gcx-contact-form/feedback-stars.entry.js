import { r as registerInstance, e as createEvent, h } from './index-dcc6886f.js';

const feedbackStarsCss = ".stars{margin-top:15px;cursor:pointer;display:flex;justify-content:center;margin-bottom:15px}.star polygon{fill:#d8d8d8}.stars:hover .star polygon{fill:#ffd055 !important}.star:hover~.star polygon{fill:#d8d8d8 !important}.stars[data-stars] .star polygon{fill:#ffd055}.stars[data-stars=\"1\"] .star:nth-child(1)~.star polygon{fill:#d8d8d8}.stars[data-stars=\"2\"] .star:nth-child(2)~.star polygon{fill:#d8d8d8}.stars[data-stars=\"3\"] .star:nth-child(3)~.star polygon{fill:#d8d8d8}.stars[data-stars=\"4\"] .star:nth-child(4)~.star polygon{fill:#d8d8d8}.stars[data-stars=\"5\"] .star:nth-child(5)~.star polygon{fill:#d8d8d8}";

const FeedbackStars = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.rateArticle = createEvent(this, "rateArticle", 7);
    this.rating = 0;
  }
  render() {
    return (h("div", { id: "feedback-stars", class: "stars", "data-stars": this.rating }, h("svg", { height: "25", width: "23", class: "star rating", onClick: () => { this.rateFeedback(1); } }, h("polygon", { points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" })), h("svg", { height: "25", width: "23", class: "star rating", onClick: () => { this.rateFeedback(2); } }, h("polygon", { points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" })), h("svg", { height: "25", width: "23", class: "star rating", onClick: () => { this.rateFeedback(3); } }, h("polygon", { points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" })), h("svg", { height: "25", width: "23", class: "star rating", onClick: () => { this.rateFeedback(4); } }, h("polygon", { points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" })), h("svg", { height: "25", width: "23", class: "star rating", onClick: () => { this.rateFeedback(5); } }, h("polygon", { points: "9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" }))));
  }
  rateFeedback(rate) {
    console.log(rate);
    this.rateArticle.emit(rate);
  }
};
FeedbackStars.style = feedbackStarsCss;

export { FeedbackStars as feedback_stars };
