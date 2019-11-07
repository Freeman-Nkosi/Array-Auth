

function Get(){
	var pass=document.getElementById("password").value;
	var cpass=document.getElementById("cpassword").value;
	if(pass==cpass){
		
		
		var name=document.getElementById("name").value;
		var surname=document.getElementById("surname").value;
		var email=document.getElementById("email").value;
		var age=document.getElementById("age").value;
		
		var Arry=[name,surname,age,email,pass,cpass];
		alert('Success');
	}
	else{
		alert("Passwords don't match");
		
		
	}
	
}