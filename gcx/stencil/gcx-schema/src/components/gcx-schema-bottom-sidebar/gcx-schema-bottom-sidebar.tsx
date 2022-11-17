import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "gcx-schema-bottom-sidebar",
  styleUrl: "gcx-schema-bottom-sidebar.css",
  shadow: true,
})
export class GcxSchemaBottomSidebar {
  @Prop() uri;
  @State() schema: Settings;
  @Prop() language = "en";
  componentWillLoad() {
    this.loadSchemaData();
  }

  render() {
    if (!this.schema || !this.schema.bottomSidebar.active) {
      return <slot></slot>;
    }
    return (
      <div class="other-resources">
        <h4>{this.schema.bottomSidebar.title}</h4>
        <ul class="nav-list">
          {this.schema.bottomSidebar.listItem.map((i) => (
            <li class="nav-item">
              <a class="nav-link" href={i.link}>
                <i class="material-icons">{i.icon}</i>
                <span>{i.item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  loadSchemaData() {
    if (this.uri) {
      this.uri.settings.map((setting) => {
        if (this.language === setting.lang) {
          let items: ListItem[] = [];
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
  }
}
