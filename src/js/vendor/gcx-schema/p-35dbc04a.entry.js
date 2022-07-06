import{r as t,h as n}from"./p-0f1b18e6.js";const i=class{constructor(n){t(this,n),this.language="en"}async componentWillLoad(){await this.loadSchemaData()}render(){return this.schema.bottomSidebar.active?n("div",{class:"other-resources"},n("h4",null,this.schema.bottomSidebar.title),n("ul",null,this.schema.bottomSidebar.listItem.map((t=>n("li",null,n("i",{class:"material-icons"},t.icon),n("a",{href:t.link},t.item)))))):n("slot",null)}async loadSchemaData(){return await fetch(this.uri).then((t=>t.json())).then((t=>{t.settings.map((t=>{if(this.language===t.lang){let n=[];t.bottom_sidebar.list_item.map((t=>{n.push({item:t.item,icon:t.icon,link:t.link})})),this.schema={lang:t.lang,bottomSidebar:{active:t.bottom_sidebar.active,title:t.bottom_sidebar.title,listItem:n}}}}))}))}};i.style=":host{display:block}.other-resources{padding:16px;display:flex;flex-direction:column;align-items:flex-start;border:1px solid #000}h4{padding:11px 16px;margin:0;color:#3C4961}ul{list-style:none;padding:0;margin:0}li{padding-left:1.3em;display:flex;padding:8px 16px;display:flex;align-items:center;flex-direction:row;gap:10px}li i{font-size:2em;color:#3C4961}li a{color:#3C4961;text-decoration-line:underline}@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v134/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased}";const a=class{constructor(n){t(this,n),this.language="en"}async componentWillLoad(){await this.loadSchemaData()}render(){return this.schema.sampleAppGallery.active?n("div",{class:"card"},n("div",{class:"icon"},this.schema.sampleAppGallery.icon),n("div",{class:"name"},n("h4",null,this.schema.sampleAppGallery.title),n("p",null,this.schema.sampleAppGallery.content))):n("slot",null)}async loadSchemaData(){return await fetch(this.uri).then((t=>t.json())).then((t=>{t.settings.map((t=>{this.language===t.lang&&(this.schema={lang:t.lang,sampleAppGallery:{active:t.sample_app_gallery.active,title:t.sample_app_gallery.title,icon:t.sample_app_gallery.icon,content:t.sample_app_gallery.content,link:t.sample_app_gallery.link}})}))}))}};a.style=":host{display:block}.card{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;padding:16px 24px;background:#F6F8FA;border:2px solid #A6B1C2;border-radius:6px;margin:16px}.card h4{color:#20293A;font-weight:500;font-size:20px;line-height:150%}h4,p{margin-block-start:0;margin-block-end:0}.card p{color:#5C6A85}.icon{margin-right:24px;font-weight:700;font-size:24px;line-height:24px}";const e=class{constructor(n){t(this,n),this.language="en"}async componentWillLoad(){await this.loadSchemaData()}render(){return this.schema.topTitle.active?n("div",{class:"announcement-banner"},n("p",null,this.schema.topTitle.title)):n("slot",null)}async loadSchemaData(){return await fetch(this.uri).then((t=>t.json())).then((t=>{t.settings.map((t=>{this.language===t.lang&&(this.schema={lang:t.lang,topTitle:{active:t.top_title.active,title:t.top_title.title}})}))}))}};e.style=":host{display:inline;--announcement-height:48px}.announcement-banner{background-color:#055992;color:#FFF;text-align:center;text-align:center;color:#fff;width:100%;max-width:100vw;position:fixed;height:var(--announcement-height);z-index:1024;top:0}.announcement-banner p{padding:10px 0;margin-bottom:0}";export{i as gcx_schema_bottom_sidebar,a as gcx_schema_sample_app_gallery,e as gcx_schema_topbar}