import { r as registerInstance, h } from './index-d6ee9aa6.js';

const gcxSchemaSampleAppGalleryCss = ":host{display:block;--gcx-app-gallery-p-color:#5C6A85;--gcx-app-appgallery-h4-color:#20293A;--gcx-sample-appgallery-card-padding:16px 24px;--gcx-sample-appgallery-card-background:#F6F8FA;--gcx-sample-appgallery-card-border:2px solid #A6B1C2}.card{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;padding:var(--gcx-sample-appgallery-card-padding);background:var(--gcx-sample-appgallery-card-background);border:var(--gcx-sample-appgallery-card-border);border-radius:6px;margin:16px;cursor:pointer}.card h4{color:var(--gcx-app-appgallery-h4-color);font-weight:500;font-size:20px;line-height:150%}h4,p{margin-block-start:0;margin-block-end:0}.card p{color:var(--gcx-app-gallery-p-color)}.icon{margin-right:24px;font-weight:700;font-size:24px;line-height:24px}";

const GcxSchemaSampleAppGallery = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.language = "en";
  }
  componentWillLoad() {
    this.loadSchemaData();
  }
  render() {
    if (!this.schema.sampleAppGallery.active) {
      return h("slot", null);
    }
    return (h("div", { class: "card", onClick: () => {
        this.redirectPage(this.schema.sampleAppGallery.link);
      } }, h("div", { class: "icon" }, this.schema.sampleAppGallery.icon), h("div", { class: "name" }, h("h4", null, this.schema.sampleAppGallery.title), h("p", null, this.schema.sampleAppGallery.content))));
  }
  redirectPage(url) {
    window.open(url);
  }
  loadSchemaData() {
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
};
GcxSchemaSampleAppGallery.style = gcxSchemaSampleAppGalleryCss;

export { GcxSchemaSampleAppGallery as gcx_schema_sample_app_gallery };
