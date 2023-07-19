const  form = document.querySelector('form');  
const searcbar=document.querySelector('#searchbar');
const  btn = document.querySelector('button'); 

const date = document.querySelector('.date');
const  temperature = document.querySelector('#temperature');
const   descrption = document.querySelector('.descrption');
const weatherreport = document.querySelector('.weatherreport');

 

const loadData = async (city) => { 
   
    const data = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&APPID=${apikey}`)
    const weatherdata = await data.json(); 


    const weatherarr = weatherdata.list[0];
    console.log(weatherarr);

    const cityname =  weatherarr.name; 
    const country =  weatherarr.sys.country; 
    date.innerHTML = `${cityname}, ${country}`;

    const temp = weatherarr.main.temp; 
    const caltemp = Math.floor(( temp - 32 ) * 5/9) ; 
    temperature.innerHTML = `${caltemp}&#8451;`;

    const desc = weatherarr.weather[0].description; 
    descrption.innerHTML = desc;

    document.querySelector('.lastname').innerHTML = `${cityname} WEATHER REPORT`;
    document.querySelector('.main').innerHTML = weatherarr.weather[0].main;

    document.querySelector('.cen').innerHTML = `${caltemp}&#8451;`;
    document.querySelector('.farh').innerHTML = `${temp}&#8457;`;

    document.querySelector('.perc').innerHTML = `${weatherarr.clouds.all}% Clouds `;

    const imgicon = weatherarr.weather[0].icon;
    document.querySelector('.toggleimg').src = `https://openweathermap.org/img/w/${imgicon}.png`;
    document.querySelector('.toggleimg2').src = `https://openweathermap.org/img/w/${imgicon}.png`;

    document.querySelector('.secdate span').innerHTML = `${cityname} ${country}`;
     
    document.querySelector('.line1 > span').innerHTML = `${weatherarr.main.temp_min}&#8457;`;
    document.querySelector('.line2 > span').innerHTML = `${weatherarr.main.temp_max}&#8457;`;
    document.querySelector('.line3 > span').innerHTML = `${weatherarr.main.pressure} hPa`;
    document.querySelector('.line4 > span').innerHTML = `${weatherarr.main.humidity}%`;
    document.querySelector('.line5 > span').innerHTML = `${weatherarr.wind.speed}miles/hour`;
    document.querySelector('.line6 > span').innerHTML = `${weatherarr.wind.deg}deg`;

    document.querySelector('.latlong').innerHTML = `${cityname} ${weatherarr.coord.lat}&deg; ${weatherarr.coord.lon}&deg;`;
 
    
    weatherreport.classList.add('showtemp');

}
  
form.addEventListener('submit', (event) => {
    loadData(searchbar.value);
    event.preventDefault();
})

    


 

