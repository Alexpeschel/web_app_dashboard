// Chart.defaults.global.legend.display = false;
Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        min: 0,
        // stepSize: 50,
    }
});
Chart.defaults.global.animation.duration = 1000;
Chart.defaults.global.animation.easing = 'linear';
Chart.defaults.global.defaultFontColor = '#a8a8a8';
var ctx = document.getElementById("trafficChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'Traffic',
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(115,119,191,0.4)",
            borderColor: "rgb(115,119,191)",
            borderCapStyle: 'square',
            pointBorderColor: "rgb(115,119,191)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 6,
            data: [0, 500, 1000, 750, 1250, 2250, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
            borderWidth: 1,
            spanGaps: false,
        }]
    },
    options: {
        legend: {
           display: false
        },
        ticks: {
            stepSize: 500
        }
    }
});

var ctx2 = document.getElementById("dailyTrafficChart");
var myBarChart = new Chart(ctx2, {
    type: 'bar',
    scaleStartValue: 0,
    scaleStepWidth: 50,
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'Daily Traffic',
                backgroundColor: 'rgba(115,119,191, 1)',
                data: [50, 75, 150, 100, 200, 185, 75],
            }
        ]
    },
    options: {
        // maintainAspectRatio: false,
        scales: {
            xAxes: [{
                barThickness: 20
            }],
            yAxes: [{
                ticks: {
                    stepSize: 50,
                    max: 250
                }
            }]
        },
        legend: {
           display: false
        },
    }
});


var ctx3 = document.getElementById("mobileUsersChart").getContext('2d');
var myPieChart = new Chart(ctx3,{
    type: 'pie',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [
            {
                label: 'Mobile Users',
                backgroundColor: [
                    'rgba(116, 177, 191, 1)',
                    'rgba(129, 201, 143, 1)',
                    'rgba(115,119,191, 1)'
                ],
                borderWidth: 0,
                data: [15, 15, 70],
            }
        ]
    },
    options: {
        // maintainAspectRatio: false,
        cutoutPercentage: 50,
        rotation: 0 * Math.PI,
        legend: {
           position: 'right',
           fullWidth: false,
           labels: {
            boxWidth: 13,
            padding: 20,
           },
        },
    }
});

//MOBILE MENU
var bodyEl = document.body;
document.getElementById('toggleNav').onclick = function() {

    var className = ' ' + bodyEl.className + ' ';

    if ( ~className.indexOf(' nav-open ') ) {
        bodyEl.className = className.replace(' nav-open ', '');
    } else {
        bodyEl.className += ' nav-open';
    }              
}

//Close notification

var matches;

(function(doc) {
   matches = 
      doc.matchesSelector ||
      doc.webkitMatchesSelector ||
      doc.mozMatchesSelector ||
      doc.oMatchesSelector ||
      doc.msMatchesSelector;
})(document.documentElement);

document.addEventListener('click', function(e) {
   if ( matches.call( e.target, '.notification button') ) {
      // proceed
      var x = e.target.parentElement;
      x.parentNode.removeChild(x);
   } 
}, false);