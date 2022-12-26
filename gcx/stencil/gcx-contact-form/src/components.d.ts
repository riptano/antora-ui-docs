/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FeedbackForm {
        "article": string;
    }
    interface FeedbackStars {
        "rating": number;
    }
}
export interface FeedbackStarsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFeedbackStarsElement;
}
declare global {
    interface HTMLFeedbackFormElement extends Components.FeedbackForm, HTMLStencilElement {
    }
    var HTMLFeedbackFormElement: {
        prototype: HTMLFeedbackFormElement;
        new (): HTMLFeedbackFormElement;
    };
    interface HTMLFeedbackStarsElement extends Components.FeedbackStars, HTMLStencilElement {
    }
    var HTMLFeedbackStarsElement: {
        prototype: HTMLFeedbackStarsElement;
        new (): HTMLFeedbackStarsElement;
    };
    interface HTMLElementTagNameMap {
        "feedback-form": HTMLFeedbackFormElement;
        "feedback-stars": HTMLFeedbackStarsElement;
    }
}
declare namespace LocalJSX {
    interface FeedbackForm {
        "article"?: string;
    }
    interface FeedbackStars {
        "onRateArticle"?: (event: FeedbackStarsCustomEvent<number>) => void;
        "rating"?: number;
    }
    interface IntrinsicElements {
        "feedback-form": FeedbackForm;
        "feedback-stars": FeedbackStars;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "feedback-form": LocalJSX.FeedbackForm & JSXBase.HTMLAttributes<HTMLFeedbackFormElement>;
            "feedback-stars": LocalJSX.FeedbackStars & JSXBase.HTMLAttributes<HTMLFeedbackStarsElement>;
        }
    }
}
