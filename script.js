const eps=[
{n:23,title:"سادننسی",en:"Sadnansi",img:"images/episodes/s6e23.jpg",season:6,sub:true},
{n:24,title:"ملکه شهر ترس",en:"Queen Of The Dreadzone",img:"images/episodes/s6e24.jpg",season:6,sub:true},
{n:25,title:"پروتکل مخفی",en:"Secret Protocol",img:"images/episodes/s6e25.jpg",season:6,sub:true},
{n:26,title:"نمسیس",en:"Nemesis",img:"images/episodes/s6e26.jpg",season:6,sub:true,new:true}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function card(e){return `<article class="episode-card" data-n="${e.n}" data-season="${e.season}" data-sub="${e.sub}" data-new="${!!e.new}"><div class="episode-img"><img src="${e.img}" alt="${e.title}"><span class="badge">فصل ${e.season} · قسمت ${e.n}</span></div><div class="episode-info"><div class="episode-meta">${e.new?'جدید · ':''}Season ${e.season} · Episode ${e.n}</div><div class="episode-title">${e.title}</div></div></article>`}
function initHome(){
 const row=$("#latestRow"); if(row){[...eps].reverse().forEach(e=>row.insertAdjacentHTML("beforeend",card(e)));}
 const hs=$("#homeSearch"); if(hs) hs.addEventListener("input",()=>{const q=hs.value.trim().toLowerCase(); $$("#latestRow .episode-card").forEach(c=>c.style.display=(!q||c.innerText.toLowerCase().includes(q))?"":"none")});
}
function initArchive(){
 const f=$("#featuredRow"); if(f){[...eps].reverse().forEach(e=>f.insertAdjacentHTML("beforeend",card(e)));}
 const grid=$("#archiveGrid"); if(grid){const all=[]; for(let s=1;s<=6;s++){for(let n=s===6?26:26;n>=1;n--) all.push({n,title:s===6?(eps.find(x=>x.n===n)?.title||"قسمت آرشیوی"):`قسمت ${n}`,en:"Episode",img:s===6?(eps.find(x=>x.n===n)?.img||"images/episodes/s6e26.jpg"):"images/episodes/s6e26.jpg",season:s,sub:true,new:false});} all.forEach(e=>grid.insertAdjacentHTML("beforeend",card(e)));}
 let season="all",filter="all",query="",desc=true;
 function render(){ $$("#archiveGrid .episode-card").forEach(c=>{const okS=season==="all"||c.dataset.season===season; const okF=filter==="all"||(filter==="sub"&&c.dataset.sub==="true")||(filter==="new"&&c.dataset.new==="true"); const okQ=!query||c.innerText.toLowerCase().includes(query); c.classList.toggle("hidden",!(okS&&okF&&okQ));});}
 $$("[data-season]").forEach(b=>b.onclick=()=>{$$("[data-season]").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");season=b.dataset.season;render()});
 $$(".filter").forEach(b=>b.onclick=()=>{$$(".filter").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");filter=b.dataset.filter;render()});
 const si=$("#searchInput"); if(si) si.oninput=()=>{query=si.value.toLowerCase();render()};
 const ob=$("#orderBtn"); if(ob) ob.onclick=()=>{desc=!desc;ob.textContent=desc?"۲۶ ← ۱":"۱ ← ۲۶";const cards=$$("#archiveGrid .episode-card");cards.sort((a,b)=>desc?+b.dataset.n-+a.dataset.n:+a.dataset.n-+b.dataset.n).forEach(c=>grid.appendChild(c));};
}
function theme(){const dark=localStorage.getItem("m77-theme")==="dark";document.body.classList.toggle("dark",dark);const b=$("#themeBtn");if(b)b.textContent=dark?"☀":"☾"}
$("#themeBtn")?.addEventListener("click",()=>{localStorage.setItem("m77-theme",document.body.classList.contains("dark")?"light":"dark");theme()});
$("#footerTheme")?.addEventListener("click",()=>{localStorage.setItem("m77-theme",document.body.classList.contains("dark")?"light":"dark");theme()});
$("#searchBtn")?.addEventListener("click",()=>$("#searchbar")?.classList.toggle("open"));
theme();initHome();initArchive();
