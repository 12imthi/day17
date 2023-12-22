function getWeather(location) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9b3abd72af5e8ee4c215adb53b59b0e5`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Weather data:', data);
    const weatherInfoDiv = document.createElement('span');
    weatherInfoDiv.setAttribute('class','showWeather')
    weatherInfoDiv.textContent = `Weather in ${location}: ${data.weather[0].description}`;
    document.getElementById(location).appendChild(weatherInfoDiv);
  })
  .catch(error => {
    console.error('There was a problem fetching weather data:', error);
  });
}




fetch("https://restcountries.com/v3.1/all")
// .then(async (response) => {
//     console.log('data fetched' );
//     const data = await response.json();
//     console.log(data.length-1);
// })

  .then((response) => {
    console.log(`response`, response);
    console.log("data fetched");
    // console.log( response.json());
    return response.json();
  })
  .catch(() => {
    console.log("api call failed");
  })
  .then((data) => {
    // const demo = document.getElementById('demo');
    // const demo1 = document.getElementById('demo1');
    // const demo2 = document.getElementById('demo2');
    const demo3 = document.getElementById('demo3');

    console.log(data[0].flags.svg); 

    // data.forEach(element => {
    //     var div = document.createElement('div');
    //     div.textContent = element.flag; 
    //     demo.appendChild(div);
    // });
    // data.forEach(element => {
    //     var div = document.createElement('div');
    //     div.textContent = element.area; 
    //     demo1.appendChild(div);
    // });
    // // data.forEach(element => {
    // //     var div = document.createElement('div');
    // //     div.textContent = element.flag; 
    // //     demo.appendChild(div);
    // // });

    // const nameing = data.map(e => e);

    // console.log(`nameing`, nameing);

    // nameing.forEach(e => {
    //   // console.log(e.name.common);
    //   let div = document.createElement('div');
    //   div.textContent = e.name.common;
    //   demo2.appendChild(div)
    // })

    const capital = data.filter(e => e.capital);

    capital.forEach(e => {
      // console.log(e.name.common);
      let div = document.createElement('div');
      div.id = e.name.common
      div.setAttribute('class','container');

      let row1 = document.createElement('div');
      row1.setAttribute('class','row1')
      row1.textContent = ` ${e.name.common}`;

      let row2 = document.createElement('div');
      let img = document.createElement('img')
      row2.setAttribute('class','row2')
      img.src = ` ${e.flags.svg}`;

      let row3 = document.createElement('div');
      row3.setAttribute('class','row3')
      row3.textContent = ` capital: ${e.capital}`;

      let row4 = document.createElement('div');
      row4.setAttribute('class','row4')
      row4.textContent = ` Region: ${e.region}`;

      let row5 = document.createElement('div');
      row5.setAttribute('class','row4')
      row5.textContent = ` population: ${e.population}`;

      let btnDiv = document.createElement('div');
      let btn = document.createElement('button');
      btn.setAttribute('class','btnDiv');
      btn.addEventListener('click', () => getWeather(e.name.common));
      btn.setAttribute('onclick','weather()');

      btn.textContent = 'click fo weather'
      // btn.textContent = 'click for Weather';/

      // div.appendChild(div2)
      row2.appendChild(img)
      btnDiv.appendChild(btn)
      div.append(row1,row2,row3,row4,row5,btnDiv)
      // div.appendChild(row2)
      // div.appendChild(row3)
      demo3.appendChild(div)
    })
});