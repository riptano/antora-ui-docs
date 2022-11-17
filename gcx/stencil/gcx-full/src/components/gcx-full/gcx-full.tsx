import {
  Component,
  h,
  Host,
  Prop,
  State,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "gcx-full",
  styleUrl: "gcx-full.css",
  shadow: false,
})
export class GcxFull {
  @Prop() templateScript: string;
  divElement!: HTMLElement;

  @Event({
    eventName: "linesSelected",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  linesSelected: EventEmitter<any>;

  @State() articleList: { name: any; lines: any; html: any }[] = [];
  @State() codeElement: { html: any } = {
    html: "",
  };

  componentDidLoad() {
    this.divElement.innerHTML = document.querySelector(
      "script#" + this.templateScript
    ).innerHTML;
    this.loadArticles(this.divElement);
    this.loadCode(this.divElement);
    //this.findFeedbackForms(this.divElement);
    //this.intersectionArticles();
  }
  findFeedbackForms(main: HTMLElement) {
    let divs = main.querySelector("[class*=gcx-feedback-form]");
    const titulo = divs.querySelector("h2").innerText;

    divs.innerHTML = `
    <feedback-form article="${titulo}"></feedback-form>
    `;
  }

  loadArticles(main: HTMLElement) {
    const divs = Array.from(main.querySelectorAll("[class*=gcx-hook]"));
    divs.map((e) => {
      const arr_name = e.className.split("=");
      e.addEventListener("click", () => {
        this.handleClickEvent(e, arr_name, divs);
      });
    });
    this.articleList = [...this.articleList];
  }

  handleClickEvent(element: any, arr_name, divs) {
    this.removeActiveClass(divs);
    element.classList.toggle("active");
    this.linesSelected.emit({
      name: arr_name[0],
      lines: arr_name[1],
    });
    this.articleList.push({
      name: arr_name[0],
      lines: arr_name[1],
      html: element,
    });
  }
  removeActiveClass(elements) {
    elements.map((e) => {
      e.classList.remove("active");
    });
  }
  loadCode(main: HTMLElement) {
    const codeBlock = main.querySelector("[class*='gcx-code-']");
    const code = codeBlock.querySelector(":scope > div > pre > code");

    this.codeElement = {
      html: code.innerHTML,
    };
    codeBlock.innerHTML = "";
  }

  intersectionArticles() {
    const elementos = document.querySelectorAll("article.doc > div > h2");
    const parent = document.querySelector("acticle.doc");
    let options = {
      root: parent,
      rootMargin: "-5% 0px -90% 0px",
      threshood: 1,
    };
    let observer = new IntersectionObserver(this.handleIntersection, options);
    elementos.forEach((elemento) => {
      observer.observe(elemento);
    });
  }

  handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(observer);

      if (entry.isIntersecting) {
        const parent = entry.target.parentElement;
        /*const data = `${entry.target.innerHTML} => ${parent.innerHTML}`;
        console.log(data);*/
        const arr_name = parent.className.split("=");
        const divs = Array.from(document.querySelectorAll("article.doc > div"));
        this.handleClickEvent(parent, arr_name, divs);
      }
    });
  };

  render() {
    return (
      <Host>
        <div
          class="full-articles"
          ref={(el) => (this.divElement = el as HTMLElement)}
        />
        <gcx-full-code html={this.codeElement.html}></gcx-full-code>
      </Host>
    );
  }
}
