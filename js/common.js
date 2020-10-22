$(document).ready( function(){
  var options =
  {
    responsive: false,
    maintainAspectRatio: false,
    scales:
    {
      yAxes:
      [{
        ticks:
        {
          beginAtZero: true,
          userCallback: function(label, index, labels)
          {
            if (Math.floor(label) === label)
            {
              return label;
            }
          }
        }
      }]
    }
  };
  //Chart1
  var ctx1 = document.getElementById('myChart1').getContext('2d');
  var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'Front-End',
        data: [1, 2 , 3, 0, 5],
        backgroundColor: "rgba(255,0,0,0.4)",
        beginAtZero: true
      }]
    },
    options: options
  });
  //Chart2
  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'Back-End',
        data: [1, 2 , 3, 0, 5],
        backgroundColor: "rgba(255,0,0,0.4)",
        beginAtZero: true
      }]
    },
    options: options
  });
  //Chart3
  var ctx3 = document.getElementById('myChart3').getContext('2d');
  var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        label: 'Tools',
        data: [1, 2 , 3, 0, 5],
        backgroundColor: "rgba(255,0,0,0.4)",
        beginAtZero: true,
        pointBorderWidth:'2px'
      }]
    },
    options: options
  });
});
