import { r as registerInstance, h } from './index-8f52db79.js';

const gcxSchemaSampleAppGalleryCss = ":host{display:block}.card{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;padding:16px 24px;background:#F6F8FA;border:2px solid #A6B1C2;border-radius:6px;margin:16px;cursor:pointer}.card h4{color:#20293A;font-weight:500;font-size:20px;line-height:150%}h4,p{margin-block-start:0;margin-block-end:0}.card p{color:#5C6A85}.icon{margin-right:24px;font-weight:700;font-size:24px;line-height:24px}";

const GcxSchemaSampleAppGallery = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.language = 'en';
  }
  async componentWillLoad() {
    await this.loadSchemaData();
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
  async loadSchemaData() {
    return await fetch(this.uri)
      .then(response => response.json())
      .then(data => {
      data.settings.map(setting => {
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
    });
  }
};
GcxSchemaSampleAppGallery.style = gcxSchemaSampleAppGalleryCss;

export { GcxSchemaSampleAppGallery as gcx_schema_sample_app_gallery };
