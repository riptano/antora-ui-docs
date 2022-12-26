# gcx-schema-topbar

Web component `gcx-schema-topbar`
represent sample app gallery, it uses this `shema JSON` tags:

```json
"top_title": {
    "active": true,
    "title": "DataStax News: Astra Streaming now GA with new built_in support for Kafka and RabbitMQ. Read the press release."
}
```

## CSS properties

    --gcx-topbar-height: 48px;
    --gcx-topbar-position: unset;
    --gcx-topbar-bgcolor: #1e71d4;
    --gcx-topbar-color: #FFF;
    --gcx-topbar-padding: 10px 0;

You can rewrite them like that:

```css
gcx-schema-topbar {
  --gcx-topbar-color: #f0f0f0;
}
```

## Passing JSON schema props from a non-JSX element

```javascript

  <script async>
    let schema = document.querySelector("#gcx-schema");
    if(schema!==null){

    schema=JSON.parse(schema.innerText);
    const topbar = document.querySelector("gcx-schema-topbar");
    topbar.uri = schema;
    }
  </script>
```

```html
<gcx-schema-topbar></gcx-schema-topbar>
```

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `language` | `language` |             | `string` | `"en"`      |
| `uri`      | `uri`      |             | `any`    | `undefined` |

_Built with [StencilJS](https://stenciljs.com/)_
