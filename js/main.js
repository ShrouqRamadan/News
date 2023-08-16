let menu=document.querySelector(".menu")
let sportData=[]
let techData=[]
let healthData=[]
let businessData=[]
let generalData=[]
let entertainmentData=[]
let weatherData=[]
let scienceData=[]
menu.addEventListener('click',function(){
    document.querySelector(".menu i").classList.toggle('fa-xmark')
    document.querySelector("nav").classList.toggle('active')
})
let myHttp=new XMLHttpRequest();

function getDataSport(){
let myHttp=new XMLHttpRequest();
myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=87e5e947bd7544658611f4843db89790`)
myHttp.send();
myHttp.addEventListener('readystatechange',function(){
    if(myHttp.readyState===4){
        sportData=JSON.parse(myHttp.response).articles.splice(0,14);

        displaySport()
    }
})
}


function displaySport(){
    let box=``
    for (let i = 0; i < sportData.length; i++) {
        box+=`<div class="col-lg-6 content">
        <img src="${sportData[i].urlToImage}" onerror="this.src='image/download.png'" class="w-100" alt="">
        <p class="mb-0 date"><i class="fa-regular fa-clock"></i> ${sportData[i].publishedAt.split("").splice(0,10).join(" ")}</p>
        <a class="my-1" href="${sportData[i].url}" class="text-dark" target="_blank">${sportData[i].title.split(" ").splice(0,5).join(" ")}</a>
        <p class="mt-0 details" >${sportData[i].description}</p>
    </div>`;
    }
    document.querySelector('.sports-data').innerHTML=box;
}


function getDataTech(){
let myHttp=new XMLHttpRequest();
    myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=87e5e947bd7544658611f4843db89790`)
myHttp.send();
myHttp.addEventListener('readystatechange',function(){
    if(myHttp.readyState===4){
        techData=JSON.parse(myHttp.response).articles;
        console.log(techData);
    displaytech()
    }
})
}

function displaytech(){
    let box=``
    for (let i = 0; i < techData.length; i++) {
        box+=`<div class="col-md-8  bg-light p-2 tech">
        <a href="${techData[i].url}" target="_blank"><b>${techData[i].title.split(" ").splice(0,10).join(" ")}</b></a>
        <p class="mb-0"><i class="fa-regular fa-clock"></i> ${techData[i].publishedAt.split("").splice(0,10).join(" ")}</p>
    </div>
    <div class="col-md-4 bg-light p-2">
            <img src="${techData[i].urlToImage}"  class="w-100"  onerror="this.src='image/download.png'" alt="">
        </div>`;
    }
    document.querySelector('.tech-box').innerHTML=box;
}



function getDataHealth(){
    let myHttp=new XMLHttpRequest();
        myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=87e5e947bd7544658611f4843db89790`)
    myHttp.send();
    myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState===4){
            healthData=JSON.parse(myHttp.response).articles.splice(1,11);
        displayHealth()
        }
    })
    }
    
    function displayHealth(){
        let box=``
        for (let i = 0; i < healthData.length; i++) {
            box+=`<div class="col-lg-5">
            <img src="${healthData[i].urlToImage}" class="w-100" onerror="this.src='image/download.png'" alt="">
        </div>
        <div class="col-lg-7">
        <a href="${healthData[i].url}" target="_blank"><b>${healthData[i].title.split(" ").splice(0,10).join(" ")}</b></a>
            <p>${healthData[i].description}</p>
            <p class="my-3"><i class="fa-regular fa-clock"></i> ${healthData[i].publishedAt.split("").splice(0,10).join(" ")}</p>
        </div>`;
        }
        document.querySelector('.health-data').innerHTML=box;
    }


function getDatabusiness(){
    let myHttp=new XMLHttpRequest();
        myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87e5e947bd7544658611f4843db89790`)
    myHttp.send();
    myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState===4){
            businessData=JSON.parse(myHttp.response).articles.splice(0,10);
        displayBusiness()
        }
    })
    }
    


    function displayBusiness(){
        let box=``
        for (let i = 0; i < businessData.length; i++) {
            box+=`<div class="col-md-4 ">
            <img src="${businessData[i].urlToImage}" class="w-100 rounded-1" onerror="this.src='image/download.png'" alt="">
        </div>
        <div class="col-md-7 ">
            <a href="${businessData[i].url}" target="_blank">
                <b>${businessData[i].title.split(" ").splice(0,10).join(" ")}</b>
            </a>
            <p><i class="fa-regular fa-clock"></i> ${businessData[i].publishedAt.split("").splice(0,10).join(" ")}</p>
        </div>
        `;
        }
        document.querySelector('.business-data').innerHTML=box;
    }





function getDataentertainment(){
    let myHttp=new XMLHttpRequest();
        myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=87e5e947bd7544658611f4843db89790`)
    myHttp.send();
    myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState===4){
            entertainmentData=JSON.parse(myHttp.response).articles.splice(0,10);
        displayEntertainment()
        }
    })
    }
    


    function displayEntertainment(){
        let box=``
        for (let i = 0; i < entertainmentData.length; i++) {
            box+=`<div class="item">
            <img src="${entertainmentData[i].urlToImage}" class="w-100 rounded-1" onerror="this.src='image/download.png'"  alt="">
            <a href="${entertainmentData[i].url}" target="_blank">${entertainmentData[i].title.split(" ").splice(0,10).join(" ")}</a>
            <p class="mb-0">${entertainmentData[i].description}</p>
            <p class="mt-0">${entertainmentData[i].publishedAt.split("").splice(0,10).join(" ")}</p>
        </div>
        `;
        }
        document.querySelector('.ent-data').innerHTML=box;
    }







    function getDatageneral(){
        let myHttp=new XMLHttpRequest();
            myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=87e5e947bd7544658611f4843db89790`)
        myHttp.send();
        myHttp.addEventListener('readystatechange',function(){
            if(myHttp.readyState===4){
                generalData=JSON.parse(myHttp.response).articles.splice(0,10);
            displaygeneral()
            }
        })
        }
        
    
    
        function displaygeneral(){
            let box=``;
            for (let i = 0; i < generalData.length; i++) {
                box+=`<div class="col-md-4 ">
                <img src="${generalData[i].urlToImage}" class="w-100 rounded-1" onerror="this.src='image/download.png'"  alt="">
            </div>
            <div class="col-md-7 ">
                <a href="${generalData[i].url}" target="_blank">
                    <b>${generalData[i].title.split(" ").splice(0,10).join(" ")}</b>
                </a>
                <p><i class="fa-regular fa-clock"></i>${generalData[i].publishedAt.split("").splice(0,10).join(" ")}</p>
            </div>
            `;
            }
            document.querySelector('.general-data').innerHTML=box;
        }


        function getDatascience(){
            let myHttp=new XMLHttpRequest();
                myHttp.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=87e5e947bd7544658611f4843db89790`)
            myHttp.send();
            myHttp.addEventListener('readystatechange',function(){
                if(myHttp.readyState===4){
                    scienceData=JSON.parse(myHttp.response).articles.splice(0,10);
                displayscience()
                }
            })
            }
            
        
        
            function displayscience(){
                let box=``;
                for (let i = 0; i < scienceData.length; i++) {
                    box+=`<div class="col-md-4 ">
                    <img src="${scienceData[i].urlToImage}" class="w-100 rounded-1" onerror="this.src='image/download.png'"  alt="">
                </div>
                <div class="col-md-7 ">
                    <a href="${scienceData[i].url}" target="_blank">
                        <b>${scienceData[i].title.split(" ").splice(0,10).join(" ")}</b>
                    </a>
                    <p><i class="fa-regular fa-clock"></i>${scienceData[i].publishedAt.split("").splice(0,10).join(" ")}</p>
                </div>
                `;
                }
                document.querySelector('.science-data').innerHTML=box;
            }


getDataSport()
getDataTech()
getDataHealth()
getDatabusiness()
getDataentertainment()
getDatageneral()
getDatascience()

function getWeather(){
    let myHttpWeather=new XMLHttpRequest();
    myHttpWeather.open('Get','https://api.weatherapi.com/v1/current.json?key=0fe1460987ed41dd82384258231508&q=cairo');
    myHttpWeather.send();
    myHttpWeather.addEventListener('readystatechange',function(){
        if(myHttpWeather.readyState==4){
             weatherData=JSON.parse(myHttpWeather.response);
            console.log(weatherData);
            displayWeather()
        }
    })
}

function displayWeather(){
    let box=`<div class="d-flex mt-4  justify-content-around align-items-center mb-0">
     <img src="https:${weatherData.current.condition.icon}">
        <p class="deg">${weatherData.current.temp_c}°C</p>
    </div>
    <div class="d-flex mt-4  justify-content-around align-items-center  mt-0">
       <div>
        <p class="cantry mb-0">${weatherData.location.name}</p>
        <p class="my-0 ms-2">${weatherData.current.condition.text}</p>
       </div>
        <p><i class="fa-solid fa-cloud"></i> ${weatherData.current.cloud}<br><i class="fa-solid fa-droplet"></i> ${weatherData.current.precip_mm}<br><i class="fa-solid fa-wind"></i> ${weatherData.current.wind_kph}km/h</p>
    </div>`
        
    document.querySelector(".weather-item").innerHTML=box;
}

getWeather()