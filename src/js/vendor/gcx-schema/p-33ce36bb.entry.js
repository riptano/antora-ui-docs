import{r as t,h as i}from"./p-e2e44488.js";const n=class{constructor(i){t(this,i),this.language="en"}async componentWillLoad(){await this.loadSchemaData()}render(){return this.schema.bottomSidebar.active?i("div",{class:"other-resources"},i("h4",null,this.schema.bottomSidebar.title),i("ul",null,this.schema.bottomSidebar.listItem.map((t=>i("li",null,i("i",{class:"material-icons"},t.icon),i("a",{href:t.link},t.item)))))):i("slot",null)}async loadSchemaData(){return await fetch(this.uri).then((t=>t.json())).then((t=>{t.settings.map((t=>{if(this.language===t.lang){let i=[];t.bottom_sidebar.list_item.map((t=>{i.push({item:t.item,icon:t.icon,link:t.link})})),this.schema={lang:t.lang,bottomSidebar:{active:t.bottom_sidebar.active,title:t.bottom_sidebar.title,listItem:i}}}}))}))}};n.style=":host{display:block}.other-resources{padding:16px;display:flex;flex-direction:column;align-items:flex-start}h4{padding:11px 16px;margin:0;color:#3C4961}ul{list-style:none;padding:0;margin:0}li{padding-left:1.3em;display:flex;padding:8px 16px;display:flex;align-items:center;flex-direction:row;gap:10px}li i{font-size:2em;color:#3C4961}li a{color:#3C4961;text-decoration-line:underline}@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v134/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased}";const e=class{constructor(i){t(this,i),this.language="en"}async componentWillLoad(){await this.loadSchemaData()}render(){return this.schema.sampleAppGallery.active?i("div",{class:"card",onClick:()=>{this.redirectPage(this.schema.sampleAppGallery.link)}},i("div",{class:"icon"},this.schema.sampleAppGallery.icon),i("div",{class:"name"},i("h4",null,this.schema.sampleAppGallery.title),i("p",null,this.schema.sampleAppGallery.content))):i("slot",null)}redirectPage(t){window.open(t)}async loadSchemaData(){return await fetch(this.uri).then((t=>t.json())).then((t=>{t.settings.map((t=>{this.language===t.lang&&(this.schema={lang:t.lang,sampleAppGallery:{active:t.sample_app_gallery.active,title:t.sample_app_gallery.title,icon:t.sample_app_gallery.icon,content:t.sample_app_gallery.content,link:t.sample_app_gallery.link}})}))}))}};e.style=":host{display:block}.card{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;padding:16px 24px;background:#F6F8FA;border:2px solid #A6B1C2;border-radius:6px;margin:16px;cursor:pointer}.card h4{color:#20293A;font-weight:500;font-size:20px;line-height:150%}h4,p{margin-block-start:0;margin-block-end:0}.card p{color:#5C6A85}.icon{margin-right:24px;font-weight:700;font-size:24px;line-height:24px}";const a=class{constructor(i){t(this,i),this.language="en"}async componentWillLoad(){await this.loadSchemaData()}render(){return this.schema.topTitle.active?i("div",{class:"announcement-banner"},i("p",null,this.schema.topTitle.title)):i("slot",null)}async loadSchemaData(){return await fetch(this.uri).then((t=>t.json())).then((t=>{t.settings.map((t=>{this.language===t.lang&&(this.schema={lang:t.lang,topTitle:{active:t.top_title.active,title:t.top_title.title}})}))}))}};a.style=":host{display:inline;--announcement-height:48px}.announcement-banner{background-color:#1e71d4;color:#FFF;text-align:center;text-align:center;color:#fff;width:100%;max-width:100vw;position:fixed;height:var(--announcement-height);z-index:1024;top:0}";export{n as gcx_schema_bottom_sidebar,e as gcx_schema_sample_app_gallery,a as gcx_schema_topbar}