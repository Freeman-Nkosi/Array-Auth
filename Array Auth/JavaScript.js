

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
function a (e){
	console.log(e)
}

function passwordS(){

		var pass =document.getElementById("password").value;
		
	var bc=document.getElementById("password");
	if(pass==""){
		bc.style.backgroundColor=""
	}
	
		//var reg= new RegExp("(([a-z]{1,}).{0,}([A-Z]{1,})(([0-9].{1,}[0-9])|[0-9]{2,})")
		var reg= new RegExp("^(?=.{7,})(?=.*?[a-z])(?=.*?[A-Z])(?=.*?(([0-9]{2,})|([0-9].{0,}[0-9])))")
		a(pass)
		if(pass!=""){
			if(reg.test(pass)){
				bc.style.backgroundColor="green"
			}else{
				bc.style.backgroundColor="red"
			}
	}
	
	
	
}