import { r as registerInstance, h } from './index-d6ee9aa6.js';

const gcxSchemaTopbarCss = ":host{display:inline;--gcx-topbar-height:48px;--gcx-topbar-position:unset;--gcx-topbar-bgcolor:#1e71d4;--gcx-topbar-color:#FFF;--gcx-topbar-padding:10px 0}.announcement-banner{background-color:var(--gcx-topbar-bgcolor);color:var(--gcx-topbar-color);text-align:center;text-align:center;width:100%;max-width:100vw;position:var(--gcx-topbar-position);height:var(--gcx-topbar-height);z-index:1024;top:0}p.row{margin-top:0;padding:var(--gcx-topbar-padding);margin-bottom:0}";

const GcxSchemaTopbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.language = "en";
  }
  componentWillLoad() {
    this.loadSchemaData();
  }
  render() {
    if (!this.schema.topTitle.active) {
      return h("slot", null);
    }
    return (h("div", { class: "announcement-banner" }, h("p", { class: "row" }, this.schema.topTitle.title)));
  }
  loadSchemaData() {
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
};
GcxSchemaTopbar.style = gcxSchemaTopbarCss;

export { GcxSchemaTopbar as gcx_schema_topbar };
