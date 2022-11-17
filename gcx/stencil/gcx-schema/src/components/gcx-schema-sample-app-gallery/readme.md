# gcx-schema-sample-app-gallery

Web component `gcx-schema-sample-app-gallery`
represent sample app gallery, it uses this `shema JSON` tags:

```json
"sample_app_gallery": {
    "active": true,
    "title": "Sample App Gallery",
    "icon": "ðŸš€",
    "content": "Looking to get up and running? Get Started with a sample app!",
    "link": "https://www.google.com"
}
```

When event click occured tag `link` will be triggered.

## CSS properties

    --gcx-app-gallery-p-color: #5C6A85;
    --gcx-app-appgallery-h4-color: #20293A;
    --gcx-sample-appgallery-card-padding: 16px 24px;
    --gcx-sample-appgallery-card-background: #F6F8FA;
    --gcx-sample-appgallery-card-border: 2px solid #A6B1C2;

You can rewrite them like that:

```css
gcx-schema-sample-app-gallery {
  --gcx-sample-appgallery-card-padding: 48px;
}
```

## Passing JSON schema props from a non-JSX element

```javascript

  <script async>
    let schema = document.querySelector("#gcx-schema");
    if(schema!==null){

    schema=JSON.parse(schema.innerText);
    const sampleApp = document.querySelector("gcx-schema-sample-app-gallery");
    sampleApp.uri = schema;
    }
  </script>
```

```html
<gcx-schema-sample-app-gallery></gcx-schema-sample-app-gallery>
```

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `language` | `language` |             | `string` | `"en"`      |
| `uri`      | `uri`      |             | `any`    | `undefined` |

---

_Built with [StencilJS](https://stenciljs.com/)_
