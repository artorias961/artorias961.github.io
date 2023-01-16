/*
Reference Link: https://www.studytonight.com/post/create-a-javascript-covid-19-tracker
API Link: https://disease.sh

*/
// Getting the disease API (COVID-19 History)
const api = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

// Setting up the API
const getData = async () => {
    // Fetching the API information
    const response = await fetch(`${api}`);
    // Once you get the API 
    if (response.ok) {
        return await response.json();
    } else {
        return Promise.reject(response.status);
    }
};

// Once you get the data, store it in result
const result = getData();

// Divide the data and storing into variables
result
  .then((data) => {
    // Look at the API to see how it works (JSON format)
    let date = Object.keys(data.cases);
    let total = Object.values(data.cases);
    let deaths = Object.values(data.deaths);
    let recovered = Object.values(data.recovered);

    // Calling the document HTML elements
    var ctx = document.getElementById('myChart').getContext('2d');

    // Creating the chart using the library
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            label: 'Total Cases',
            data: total,
            borderColor: 'rgba(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Recovered Cases',
            data: recovered,
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: false,
          },
          {
            label: 'Deaths',
            data: deaths,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Numbers in Thousands',
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Date(DD/MM/YYYY)',
              },
            },
          ],
        },
        title: {
          display: true,
          text: `Coronovirus Cases World Wide Start to Current time`,
        },
      },
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  });
