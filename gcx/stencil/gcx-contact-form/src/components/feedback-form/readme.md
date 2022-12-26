# feedback-form
Web Component that shows the feedback form, input forms name, email and suggestions, 
that has 4 different states [initial, submitting, error, complete] when submit form has triggerd


This is the URL where's submited the form.
CONTACT_US = 'https://contact.api.docs.datastax.com/contact-us'; 


## Way to use
Insert directly in the HTML pages.
`<feedback-form article="Has been the article useful?"></feedback-form>`

Using it in ASCIIDOC files
```html
++++
<feedback-form article="This is a title"></feedback-form>
++++
```

There's an optional way to use it in ASCIDOC files, but only works in `:page-layout: gcx-full and gcx-landing` .
```
[.gcx-feedback-form]
== Here comes form's title
```


<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type     | Default     |
| --------- | --------- | ----------- | -------- | ----------- |
| `article` | `article` | title of the form | `string` | `undefined` |


## Dependencies

### Depends on

- [feedback-stars](../feedback-stars)


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
