async function getWeather(){
 const apiKey = 'e0e62bfcbb1b130bf22305efe04bc347' ;
 const city = document.getElementById('city').value;

 const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
 const data = await res.json();
 console.log(data)

 const resultDiv = document.querySelector('#result');
 resultDiv.innerHTML = 
 `
 <h2>${city}</>
 <p>Temprature: ${data.main.temp}</p>
 `
}