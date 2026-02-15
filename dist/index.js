import{a as d,S as f,i as l}from"./assets/vendor-Dr9nwXt6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="54645624-93bc72701cdff138f1edf2876",y="https://pixabay.com/api/";async function p(s){const t=s.trim();if(!t)throw new Error("Query is empty");const{data:o}=await d.get(y,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}});return o}const g=document.querySelector("#gallery");document.querySelector("#loader");const h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){if(!Array.isArray(s)||s.length===0)return;const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:c,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${o}" alt="${e}" loading="lazy" />
            <div class="info">
              <div class="info-label">
                Likes
                <span class="info-value">${r}</span>
              </div>
              <div class="info-label">
                Views
                <span class="info-value">${a}</span>
              </div>
              <div class="info-label">
                Comments
                <span class="info-value">${c}</span>
              </div>
              <div class="info-label">
                Downloads
                <span class="info-value">${u}</span>
              </div>
            </div>
          </a>
        </li>`).join("");g.insertAdjacentHTML("beforeend",t),h.refresh()}const n={form:document.querySelector("#search-form"),loader:document.querySelector("#loader"),imgList:document.querySelector("#gallery")};n.form.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}n.loader.classList.remove("is-hidden"),n.imgList.innerHTML="",p(t).then(o=>{if(!o.hits||o.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(o=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.error("Fetch error: ",o)}).finally(()=>{n.loader.classList.add("is-hidden")}),s.currentTarget.reset()});
//# sourceMappingURL=index.js.map
