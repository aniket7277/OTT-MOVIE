let container=document.getElementById("movie-list");
let html="";
const rating=[];
var productdata;
function getproduct() {
    fetch("https://ottproject-502f3-default-rtdb.firebaseio.com/upcoming.json")
    .then(response=>response.json())
    .then(actualdata=>{
        console.log(actualdata);
        productdata=actualdata;
        // let container=document.getElementById("movie-list-wrapper");
        for( let { logo,name,rate,link } of productdata) {
            html+=`
            <div class="movie-list-item">
            <img class="movie-list-item-img" src="${logo}" alt="">
            <span class="movie-list-item-title">${name}</span>
            <a href="${link}"><button class="movie-list-item-button">Watch</button></a>
            </div>
                `;
        }
        container.innerHTML = html;
    })
}
