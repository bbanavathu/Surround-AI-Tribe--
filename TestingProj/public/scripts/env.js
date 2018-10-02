var uploadDb = function(data)
{
	console.log(data);
	$.post('/project', data, function(result){
		console.log(result)
	})
}



var addItem = function()
{
	
	var projectData ={
		username:'',
		email:'',
		contact:'',
		psw:'',
		repeatPsw:''
	}
	var username=$('#username').val();
	var email=$('#email').val()
	var contact=$('#contact').val();
	var psw=$('#psw').val()
	var repeatPsw=$('#repeatPsw').val()
	
	projectData.username = username;
	projectData.email = email;
	projectData.contact = contact;
	projectData.psw = psw;
	projectData.repeatPsw = repeatPsw;
	
	uploadDb(projectData)
}

var showContent1 = function()
{
	$('#dropdown').hide();
	$('#eventDes01').show();
	$('#eventbtn').bind('click',clickfxn);
	
	var img = document.getElementById("imgDiv");
	img.setAttribute("src", "../images/rainfall.jpg");
	
	$('#chartContainer1').show();
	$('#chartContainer2').show();
	$('#chartContainer3').hide();

	new Chart(document.getElementById("pie-chart"), {
		type: 'pie',
		data: {
		  labels: ["300-400 mm rainfall", "400-500 mm rainfall ", "500-600 mm rainfall", "drier areas", "600-800 mm rainfall"],
		  datasets: [{
			label: "wheat production distributed as per raining areas",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			data: [46,24,17,4,9]
		  }]
		},
		options: {
		  title: {
			display: true,
			text: 'wheat production distributed as per raining areas'
		  }
		}
	});


	new Chart(document.getElementById("bar-chart"), {
		type: 'bar',
		data: {
		  labels: ["NSW", "VIC", "QLD", "SA ", "WA","TAS"],
		  datasets: [
			{
			  label: "Yield( tonnes/hac)",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			  data: [1.8,2.2,1.4,1.8,2.3,3.4]
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: 'Rainfall(mm) impact on crop yield'
		  }
		}
	});
	

}

var showContent2 = function()
{
	$('#dropdown').hide();
	$('#eventDes01').show();
	$('#eventbtn').bind('click',clickfxn);
	
	var img = document.getElementById("imgDiv");
	img.setAttribute("src", "../images/temperature.jpg");

	$('#chartContainer1').hide();
	$('#chartContainer2').hide();
	$('#chartContainer3').show();

	new Chart(document.getElementById("bar-chart-grouped"), {
		type: 'bar',
		data: {
		  labels: ["NSW", "QLD", "Aus"],
		  datasets: [
			{
			  label: "Summer",
			  backgroundColor: "#3e95cd",
			  data: [2286,1280,3667]
			}, {
			  label: "Winter",
			  backgroundColor: "#8e5ea2",
			  data: [7228,1463,37963]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'Yield(kt) in different temperature conditions'
		  }
		}
	});

}

var showContent3 = function()
{
	$('#dropdown').hide();
	$('#eventDes01').show();
	$('#eventbtn').bind('click',clickfxn);
	
	var img = document.getElementById("imgDiv");
	img.setAttribute("src", "../images/waterscarcity.jpg");

	$('#chartContainer1').show();
	$('#chartContainer2').show();
	$('#chartContainer3').hide();

	new Chart(document.getElementById("pie-chart"), {
		type: 'pie',
		data: {
		  labels: ["Storm", "floods"],
		  datasets: [{
			label: "Average Annual Natural Hazard Occurrence",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			data: [20.63,79.37]
		  }]
		},
		options: {
		  title: {
			display: true,
			text: 'Average Annual Natural Hazard Occurrence '
		  }
		}
	});



	new Chart(document.getElementById("bar-chart"), {
		type: 'bar',
		data: {
		  labels: ["NSW", "VIC", "QLD", "SA ", "WA","TAS"],
		  datasets: [
			{
			  label: "$m",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			  data: [60,75,75,45,39,23]
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: 'Vegetable growing farms(2016-2107)in $m'
		  }
		}
	});

}
var showContent4 = function()
{
	$('#dropdown').hide();
	$('#eventDes01').show();
	$('#eventbtn').bind('click',clickfxn);
	
	var img = document.getElementById("imgDiv");
	img.setAttribute("src", "../images/population.jpg");

	$('#chartContainer2').show();
	$('#chartContainer1').hide();
	$('#chartContainer3').hide();

	new Chart(document.getElementById("bar-chart"), {
		type: 'bar',
		data: {
		  labels: ["NSW", "VIC", "QLD", "SA ", "TAS"],
		  datasets: [
			{
			  label: "$m",
			  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
			  data: [7317500,5640900,4599400,1659800,511000]
			}
		  ]
		},
		options: {
		  legend: { display: false },
		  title: {
			display: true,
			text: 'population (in million)'
		  }
		}
	});

	
	

}

var clickfxn = function(){
	$('#dropdown').show();
	$('#eventDes01').hide();
}

var loginPage = function(){
	alert('Button clicked');
}


$(document).ready(function(){
	console.log("DOM is ready")
	showSlides(slideIndex);
	
	$('#submitButton').bind('click', addItem);
	$('#loginButton').bind('click', loginPage);
	$('#eventid01').bind('click',showContent1);
	$('#eventid02').bind('click',showContent2);
	$('#eventid03').bind('click',showContent3);
	$('#eventid04').bind('click',showContent4);
})
	
	
	
	
	