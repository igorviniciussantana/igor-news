let url = 'https://newsapi.org/v2/everything?q=apple&from=2022-09-13&to=2022-09-13&sortBy=popularity&apiKey=6efd89faed8f4c3dba4bf6f12ac9ebe3'
const main = document.querySelector('main');

window.addEventListener('load', e => {

postNews();
'use strict'
if("serviceWorker" in navigator){

navigator.serviceWorker.register('./sw.js')

}


})

async function postNews(){

const res = await fetch(url);
const data = await res.json();

main.innerHTML = data.articles.map(createArticle).join('\n');


}

function createArticle(article){

return `

<div class="article">
<a href="${article.url}" target="_blank">
<img src="${article.urlToImage}" class="image" alt="${article.content}"/>
<h2>${article.title}</h2>
<p>${article.description}</p>
</a>
</div>

`



}