let container1=document.getElementById("movie-list2");
let tp="";
const rating=[];
var tpdata;
function getproduct2() {
    fetch("https://toprated-f714b-default-rtdb.firebaseio.com/toprated.json")
    .then(response=>response.json())
    .then(actualdata=>{
        console.log(actualdata);
        tpdata=actualdata;
        // let container=document.getElementById("movie-list-wrapper");
        for( let { logo,name,rate,link } of tpdata) {
            tp+=`
            <div class="movie-list-item">
            <img class="movie-list-item-img" src="${logo}" alt="">
            <span class="movie-list-item-title">${name}</span>
            <a href="${link}"><button class="movie-list-item-button">Watch</button></a>
            </div>
                `;
        }
        container1.innerHTML = tp;
    })
}
