import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as m,S as f,i}from"./assets/vendor-d93b82f1.js";const v="45488193-7ca777789e7fbcf45aeeb8195";m.defaults.baseURL="https://pixabay.com/api/";const u=async(e,s)=>{const a={params:{page:s,key:v,q:e,image_type:"photo",safesearch:!0,orientation:"horizontal",per_page:15}};return await m.get("",a)},y=e=>`<li class="gallery-card">
            <a href="${e.largeImageURL}" class="gallery-link">
              <img class="image-normal" src="${e.webformatURL}" alt="${e.tags}"/>
              <ul class="image-text">
                <li class="image-text-item">
                  <p class="key key-likes">Likes</p>
                  <p class="value value-likes">${e.likes}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-views">Viwes</p>
                  <p class="value value-views">${e.views}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-comments">Comments</p>
                  <p class="value value-comments">${e.comments}</p>
                </li>
                <li class="image-text-item">
                  <p class="key key-downloads">Downloads</p>
                  <p class="value value-downloads">${e.downloads}</p>
                </li>
              </ul>
            </a>
          </li>`,r=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),o=document.querySelector(".preloader-wrap"),b=document.querySelector(".js-scroll-infinity"),c=document.querySelector(".js-go-top");let p="",t=1,d=1;const h=new f(".js-gallery a",{captionsData:"alt",captionDelay:150}),w=async e=>{try{o.classList.remove("is-visible"),e.preventDefault(),t=1,p=r.elements.user_query.value;const s=await u(p,t);if(d=s.data.totalHits/15,n.innerHTML="",r.reset(),s.data.hits.length===0){o.classList.add("is-visible"),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",maxWidth:"432px",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%"});return}const a=s.data.hits.map(l=>y(l)).join("");n.innerHTML=a,x.observe(b)}catch(s){i.error({title:`${s}`,position:"center",backgroundColor:"#ef4040"}),r.reset(),o.classList.add("is-visible");return}o.classList.add("is-visible"),h.refresh(),t+=1},k={root:null,rootMargin:"0px 0px 400px 0px",threshold:1},L=async e=>{if(console.log(e),e[0].isIntersecting)try{const s=await u(p,t);if(Math.ceil(d)>=t){const a=s.data.hits.map(l=>y(l)).join("");n.insertAdjacentHTML("beforeend",a)}h.refresh(),t+=1,Math.ceil(d)<t&&i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(s){i.error({title:`${s}`,position:"center",backgroundColor:"#ef4040"})}},x=new IntersectionObserver(L,k);r.addEventListener("submit",w);const g=()=>{window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(g,0))},q=()=>{const e=window.pageYOffset,s=document.documentElement.clientHeight;e>s?c.classList.remove("is-hidden"):c.classList.add("is-hidden")};c.addEventListener("click",g);addEventListener("scroll",q);
//# sourceMappingURL=commonHelpers.js.map
