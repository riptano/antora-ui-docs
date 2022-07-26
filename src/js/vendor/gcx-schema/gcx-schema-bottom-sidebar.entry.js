import { r as registerInstance, h } from './index-d6ee9aa6.js';

const gcxSchemaBottomSidebarCss = ":host{display:block;--gcx-sidebar-h4-color:#3C4961;--gcx-sidebar-li-color:#3C4961;--gcx-sidebar-li-padding:8px 16px;--gcx-sidebar-li-font-size:2em}.other-resources{padding:16px;display:flex;flex-direction:column;align-items:flex-start}.other-resources h4{padding:11px 16px;margin:0;color:var(--gcx-sidebar-h4-color)}.other-resources ul{list-style:none;padding:0;margin:0}.other-resources li{padding-left:1.3em;display:flex;padding:var(--gcx-sidebar-li-padding);display:flex;align-items:center;flex-direction:row;gap:10px}.other-resources li i{font-size:var(--gcx-sidebar-li-font-size);color:var(--gcx-sidebar-li-color)}.other-resources li a{color:var(--gcx-sidebar-li-color);text-decoration-line:underline}@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v134/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased}";

const GcxSchemaBottomSidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.language = "en";
  }
  componentWillLoad() {
    this.loadSchemaData();
  }
  render() {
    if (!this.schema.bottomSidebar.active) {
      return h("slot", null);
    }
    return (h("div", { class: "other-resources" }, h("h4", null, this.schema.bottomSidebar.title), h("ul", null, this.schema.bottomSidebar.listItem.map((i) => (h("li", { class: "nav-item" }, h("a", { class: "nav-link", href: i.link }, h("i", { class: "material-icons" }, i.icon), i.item)))))));
  }
  loadSchemaData() {
    this.uri.settings.map((setting) => {
      if (this.language === setting.lang) {
        let items = [];
        setting.bottom_sidebar.list_item.map((i) => {
          items.push({
            item: i.item,
            icon: i.icon,
            link: i.link,
          });
        });
        this.schema = {
          lang: setting.lang,
          bottomSidebar: {
            active: setting.bottom_sidebar.active,
            title: setting.bottom_sidebar.title,
            listItem: items,
          },
        };
      }
    });
  }
};
GcxSchemaBottomSidebar.style = gcxSchemaBottomSidebarCss;

export { GcxSchemaBottomSidebar as gcx_schema_bottom_sidebar };
