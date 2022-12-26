# gcx-schema-bottom-sidebar

Web component `gcx-schema-bottom-sidebar`
represent sample app gallery, it uses this `shema JSON` tags:

```json
 "bottom_sidebar": {
    "active": true,
    "title": "Other Resources",
    "list_item": [{
            "item": "Documentation",
            "icon": "menu_book",
            "link": "https://www.google.com"
        },
        {
            "item": "Give Feedback",
            "icon": "chat",
            "link": "https://www.amazon.com"
        },
        {
            "item": "Get Support",
            "icon": "support",
            "link": "https://www.github.com"
        }
    ]
}
```

## CSS properties

    --gcx-sidebar-h4-color: #3C4961;
    --gcx-sidebar-li-color: #3C4961;
    --gcx-sidebar-li-padding: 8px 16px;
    --gcx-sidebar-li-font-size: 2em;

You can rewrite them like that:

```css
gcx-schema-bottom-sidebar {
  --gcx-sidebar-h4-color: #ffffff;
}
```

## Passing JSON schema props from a non-JSX element

```javascript

  <script async>
    let schema = document.querySelector("#gcx-schema");
    if(schema!==null){

    schema=JSON.parse(schema.innerText);
    const sidebar = document.querySelector("gcx-schema-bottom-sidebar");
    sidebar.uri = schema;
    }
  </script>
```

```html
<gcx-schema-bottom-sidebar></gcx-schema-bottom-sidebar>
```

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `language` | `language` |             | `string` | `"en"`      |
| `uri`      | `uri`      |             | `any`    | `undefined` |

---

_Built with [StencilJS](https://stenciljs.com/)_
