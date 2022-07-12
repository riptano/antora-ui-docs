import { r as registerInstance, h } from './index-8f52db79.js';

const gcxSchemaTopbarCss = ":host{display:inline;--announcement-height:48px;--announcement-position:unset}.announcement-banner{background-color:#1e71d4;color:#FFF;text-align:center;text-align:center;color:#fff;width:100%;max-width:100vw;position:var(--announcement-position);height:var(--announcement-height);z-index:1024;top:0}p.row{margin-top:0;padding:10px 0;margin-bottom:0}";

const GcxSchemaTopbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.language = "en";
  }
  async componentWillLoad() {
    await this.loadSchemaData();
  }
  render() {
    if (!this.schema.topTitle.active) {
      return h("slot", null);
    }
    return (h("div", { class: "announcement-banner" }, h("p", { class: "row" }, this.schema.topTitle.title)));
  }
  async loadSchemaData() {
    return await fetch(this.uri)
      .then((response) => response.json())
      .then((data) => {
      data.settings.map((setting) => {
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
    });
  }
};
GcxSchemaTopbar.style = gcxSchemaTopbarCss;

export { GcxSchemaTopbar as gcx_schema_topbar };