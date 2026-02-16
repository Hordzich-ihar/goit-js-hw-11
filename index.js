import{a as d,S as m,i as a}from"./assets/vendor-Dr9nwXt6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="54645624-93bc72701cdff138f1edf2876";function h(o){const r=o.trim();return d.get(g,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:p,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${t}</span></p>
            <p class="info-item"><b>Views</b><span>${i}</span></p>
            <p class="info-item"><b>Comments</b><span>${p}</span></p>
            <p class="info-item"><b>Downloads</b><span>${u}</span></p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function q(){f.classList.remove("is-hidden")}function P(){f.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query!",position:"topRight"});return}S(),q(),h(r).then(s=>{if(!s.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{P(),l.reset()})});
//# sourceMappingURL=index.js.map
