function validateNM(){
	var n= document.getElementById("FName").value;
	if(n==""){
		document.getElementById("namev").style.color= "red";
		document.getElementById("namev").innerHTML="Please Enter a Name";
	}
	else{
		document.getElementById("namev").style.color= "green";
		document.getElementById("namev").innerHTML="Valid";
	}
}
function validateNML(){
	var n= document.getElementById("LName").value;
	if(n==""){
		document.getElementById("namevl").style.color= "red";
		document.getElementById("namevl").innerHTML="Please Enter a Name";
	}
	else{
		document.getElementById("namevl").style.color= "green";
		document.getElementById("namevl").innerHTML="Valid";
	}
}
function validateNo(){
	var n= document.getElementById("Mob").value;
	var r= /^\d{3}-\d{3}-\d{4}$/;
	if(r.test(n)){
		document.getElementById("mobv").style.color= "green";
		document.getElementById("mobv").innerHTML="Valid";
	}
	else{
		document.getElementById("mobv").style.color= "red";
		document.getElementById("mobv").innerHTML="Please enter a valid number";
	}
}
function pmsg(){
	document.getElementById("pp").innerHTML="Make sure you type a strong passowrd.";
}
function validp(){
	var a= document.getElementById("p1").value;
	var b= document.getElementById("p2").value;
	if(a==b){
		document.getElementById("match").style.color= "green";
		document.getElementById("match").innerHTML="Passwords Match";
	}
	else{
		document.getElementById("match").style.color= "red";
		document.getElementById("match").innerHTML="Passwords do not match";
	}
}
		