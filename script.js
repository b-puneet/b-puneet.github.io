
var ctx = document.getElementById("sectorBreakdown");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
	labels: ["COLLEGES", "MUNICIPALITIES", "ONTARIO PUBLIC SERVICE" , "CROWN AGENCIES", "OTHER PUBLIC SECTOR EMPLOYERS", "HOSPITALS", "SCHOOL BOARDS", "UNIVERSITIES"],
    datasets: [
      { 
		data:[39, 272, 986, 598, 193, 841, 382, 1190],
		borderColor:["#b80707","#4ECDC4","#3E95CD","#FF6B6B","#E79FF4","#758E4F","#FDE47F","#31572C"],
		backgroundColor: ["#b80707","#4ECDC4","#3E95CD","#FF6B6B","#E79FF4","#758E4F","#FDE47F","#31572C"],
	  }
    ]
  },
  options:{
	title: {
		display: true,
		text: 'Number of $100,000+ Salaries by Sector'
	  },
	  legend:{
		  display:false
	  },
	  responsive: true,
	  maintainAspectRatio: false
  }
});


var ctx = document.getElementById("sectorBreakdown1");
var myChart1 = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["COLLEGES", "MUNICIPALITIES", "OPS" , "CROWN AGENCIES", "OTHER", "HOSPITALS", "SCHOOL BOARDS", "UNIVERSITIES"],
    datasets: [
      { 
		data:[117502.01, 112386.67, 120231.35, 118913.21, 121704.32, 139890.52, 110595.34, 116517.27],
		borderColor:["#b80707","#4ECDC4","#3E95CD","#FF6B6B","#E79FF4","#758E4F","#31572C","#31572C"],
		backgroundColor: ["#b80707","#4ECDC4","#3E95CD","#FF6B6B","#E79FF4","#758E4F","#FDE47F","#31572C"],
      }
    ]
  },
  options:{
	  scales:{
		  yAxes:[{
			  ticks:{
				  fontSize:10
			  }
		  }],
		xAxes:[{
			ticks:{
				min: 0,
			}
		}]
	  },
	  legend:{
		  display:false
	  },
	  title: {
		display: true,
		text: 'Average $100,000+ Salary by Sector'
	  },
	  responsive: true,
	  maintainAspectRatio: false
  }
});

new Chart(document.getElementById("line-chart"), {
	type: 'line',
	data: {
	  labels: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
	  datasets: [{ 
		  data: [4501,5378,6296,8125,10352,13144,16691,20368,23253,27461,34197,42766,53817,64218,71684,79714,88542,97915,111655,115920,124445,131741],
		  label: false,
		  borderColor: "#1b6ebd",
		  fill: true
		},
	  ]
	},
	options: {
	legend:{
		display: false
	},
	  title: {
		display: true,
		text: 'Number of $100,000+ Public Sector Salaries'
	  },
	maintainAspectRatio: false
	}
  });







	
