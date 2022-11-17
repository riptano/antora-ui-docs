import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "gcx-schema-sample-app-gallery",
  styleUrl: "gcx-schema-sample-app-gallery.css",
  shadow: true,
})
export class GcxSchemaSampleAppGallery {
  @Prop() uri;
  @State() schema: Settings;
  @Prop() language = "en";
  componentWillLoad() {
    this.loadSchemaData();
  }

  render() {
    if (!this.schema || !this.schema.sampleAppGallery.active) {
      return <slot></slot>;
    }
    return (
      <div
        class="card"
        onClick={() => {
          this.redirectPage(this.schema.sampleAppGallery.link);
        }}
      >
        <div class="icon">{this.schema.sampleAppGallery.icon}</div>
        <div class="name">
          <h4>{this.schema.sampleAppGallery.title}</h4>
          <p>{this.schema.sampleAppGallery.content}</p>
        </div>
      </div>
    );
  }
  redirectPage(url) {
    window.open(url);
  }
  loadSchemaData() {
    if (this.uri) {
      this.uri.settings.map((setting) => {
        if (this.language === setting.lang) {
          this.schema = {
            lang: setting.lang,
            sampleAppGallery: {
              active: setting.sample_app_gallery.active,
              title: setting.sample_app_gallery.title,
              icon: setting.sample_app_gallery.icon,
              content: setting.sample_app_gallery.content,
              link: setting.sample_app_gallery.link,
            },
          };
        }
      });
    }
  }
}
