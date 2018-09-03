var uploadDb = function(data)
{
	console.log(data);
	$.post('/project', data, function(result){
		console.log(result)
	})
}


var addItem = function()
{
	alert('button clicked')
	var projectData ={
		email:'',
		psw:'',
		repeatPsw:''
	}
	var email=$('#email').val()
	var psw=$('#psw').val()
	var repeatPsw=$('#repeatPsw').val()
	
	projectData.email = email;
	projectData.psw = psw;
	projectData.repeatPsw = repeatPsw;
	
	uploadDb(projectData)
}

var loginPage = function(){
	alert('Button clicked');
}


$(document).ready(function(){
	console.log("DOM is ready")
	
	$('#submitButton').bind('click', addItem);
	$('#loginButton').bind('click', loginPage);
})
	
	
	
	
	