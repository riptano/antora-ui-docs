import { Component, h } from "@stencil/core";

@Component({
  tag: "gcx-schema",
  styleUrl: "gcx-schema.css",
  shadow: true,
})
export class MyComponent {
  componentWillLoad() {
    const theme = window.localStorage.getItem("theme");
    let checkbox: any = document.getElementById("switch");
    let root = document.getElementsByTagName("html")[0];
    if (theme === 'dark') {
      root.classList.add("dark-mode");
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
  render() {
    return <div>Hello, World!</div>;
  }
}
