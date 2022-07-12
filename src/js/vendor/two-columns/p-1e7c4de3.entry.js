import{r as t,c as e,h as i,H as o}from"./p-dc59bc7e.js";const s=class{constructor(i){t(this,i),this.linesSelected=e(this,"linesSelected",7),this.articleList=[],this.codeElement={html:""}}componentDidLoad(){this.divElement.innerHTML=document.querySelector("script#"+this.templateScript).innerHTML,this.loadArticles(this.divElement),this.loadCode(this.divElement),this.findFeedbackForms()}findFeedbackForms(){let t=document.querySelector("[class*=gcx-feedback-form]");const e=t.querySelector("h2").innerText;console.log(e),t.innerHTML=`\n    <feedback-form article="${e}"></feedback-form>\n    `}loadArticles(t){Array.from(t.querySelectorAll("[class*=gcx-hook]")).map((t=>{const e=t.className.split("=");t.addEventListener("click",(()=>{this.linesSelected.emit({name:e[0],lines:e[1]})})),this.articleList.push({name:e[0],lines:e[1],html:t})})),this.articleList=[...this.articleList]}loadCode(t){const e=t.querySelector("[class*='gcx-code-']"),i=e.querySelector(":scope > div > pre > code");this.codeElement={html:i.innerHTML},e.innerHTML=""}render(){return i(o,null,i("div",{class:"full-articles",ref:t=>this.divElement=t}),i("gcx-full-code",{html:this.codeElement.html}))}};s.style="#pre{color:rgb(223, 223, 223);display:none;color:aqua}.full-articles{min-width:500px;width:50%}main.article{position:sticky;top:0}gcx-full-code{min-width:500px;width:50%}gcx-full{display:flex}";const l=class{constructor(e){t(this,e)}todoCompletedHandler(t){const e=t.detail;EnlighterJS.enlight(this.codeElement,!1),EnlighterJS.enlight(this.codeElement,{language:"java",theme:"bootstrap4",textOverflow:"scroll",highlight:e.lines}),document.querySelector(".enlighter-special").scrollIntoView({block:"center",behavior:"smooth"}),document.querySelector(".enlighter-special").scrollTo({top:-300,left:0,behavior:"smooth"})}componentDidRender(){EnlighterJS.init("pre","code",{language:"java",theme:"bootstrap4"})}render(){return this.html?i("pre",{id:"codigo",ref:t=>this.codeElement=t,innerHTML:this.html}):i(o,null)}};l.style="#codigo{display:flex;cursor:pointer;border:2px solid white;border-radius:25px;margin-top:8px;flex:1 1;border:1px solid #000fff}.enlighter-default{position:sticky !important;top:0 !important}.enlighter-special{transition:0.5s}";export{s as gcx_full,l as gcx_full_code}