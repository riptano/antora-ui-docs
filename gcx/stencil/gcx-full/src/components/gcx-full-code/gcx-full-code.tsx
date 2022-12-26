import { Component, Host, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "gcx-full-code",
  styleUrl: "gcx-full-code.css",
  shadow: false,
})
export class GcxFullCode {
  @Prop() html: string;
  codeElement!: HTMLElement;

  @Listen("linesSelected", { target: "body" })
  todoCompletedHandler(event: CustomEvent<any>) {
    const article = event.detail;
    article.lines = article.lines.replaceAll(" active", "");
    EnlighterJS.enlight(this.codeElement, false);
    EnlighterJS.enlight(this.codeElement, {
      language: "java",
      theme: "bootstrap4",
      textOverflow: "scroll",
      highlight: article.lines,
    });

    let newTopPosition =
      document.querySelector(".enlighter-special").getBoundingClientRect().y -
      document.querySelector(".active").getBoundingClientRect().y;

    document.querySelector(".enlighter-default").scrollTop = newTopPosition;
  }

  componentDidRender() {
    EnlighterJS.init("#codigo", "code", {
      language: "java",
      theme: "bootstrap4",
    });
  }

  render() {
    if (this.html) {
      return (
        <pre
          id="codigo"
          ref={(el) => (this.codeElement = el as HTMLElement)}
          innerHTML={this.html}
        />
      );
    } else {
      return <Host></Host>;
    }
  }
}
