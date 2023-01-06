import { Component, Prop, h, State } from "@stencil/core";

@Component({
  tag: "gcx-schema-topbar",
  styleUrl: "gcx-schema-topbar.css",
  shadow: true,
})
export class GcxSchemaTopbar {
  @Prop() uri;
  @State() schema: Settings;
  @Prop() language = "en";
  componentWillLoad() {
    this.loadSchemaData();
  }

  render() {
    if (!this.schema || !this.schema.topTitle.active) {
      return <slot></slot>;
    }
    return (
      <div class="announcement-banner">
        <p class="row">{this.schema.topTitle.title}</p>
      </div>
    );
  }

  loadSchemaData() {
    if (this.uri) {
      this.uri.settings.map((setting) => {
        if (this.language === setting.lang) {
          this.schema = {
            lang: setting.lang,
            topTitle: {
              active: setting.top_title.active,
              title: setting.top_title.title,
            },
          };
        }
      });
    }
  }
}
