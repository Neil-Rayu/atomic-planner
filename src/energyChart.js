import Chart from 'chart.js/auto';
const ctx = document.getElementById('energy-chart').getContext('2d');

const dayTimeForm = document.querySelector("[class='dayTimeForm']");
const dayStart = document.querySelector("[id='startInput']");
const dayEnd = document.querySelector("[id='endInput']");

// function calculateDay(start, end) {
//   for (let i = start; i <= end; i++) {
//     label.push(i);
//   }
// }

dayTimeForm.onsubmit = (e) => {
  e.preventDefault();
  //calculateDay(dayStart.value, dayEnd.value);
  console.log(dayStart.value);
  let hourLabel = [];
  for (let i = parseInt(dayStart.value); i <= dayEnd.value; i++) {
    hourLabel.push(i);
  }
  console.log(hourLabel);
  const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: hourLabel,
      datasets: [
        {
          label: 'Alertness',
          data: [10, 9, 9, 10, 7, 4, 8, 7.5, 6, 5, 8, 8],
          borderColor: 'rgb(75, 192, 192)',
        },
        {
          label: 'Energy',
          data: [10, 10, 9, 10, 7, 4, 8, 7, 6, 5, 9, 9],
          borderColor: 'rgb(195, 144, 25)',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  localStorage.setItem('dayStartTime', JSON.stringify(dayStart.value));
  localStorage.setItem('dayEndTime', JSON.stringify(dayEnd.value));
};
