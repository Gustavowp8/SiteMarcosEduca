/* const ctx = document.getElementById('myChart') */

const labels = [
   /* 'ACERTOS',
    'ERROS',*/
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor:[ '#23BE87', '#F1173A'],
      //borderColor: 'rgb(255, 99, 132)',
      data: [81, 19],
    }]
  };


  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };

  