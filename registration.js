var form = document.getElementById("form");
create();
function create(){
	var txt = document.createTextNode("First-Name \xa0\xa0");
	form.appendChild(txt);
	var ip = document.createElement("input");
    ip.setAttribute("placeholder", "Enter your First-Name");
    form.appendChild(ip);
	ip.id="firstname";
	br(form);br(form);
	
	var txt=document.createTextNode("Last-Name \xa0\xa0")
	form.appendChild(txt);
	var ip=document.createElement("input");
	ip.setAttribute("placeholder", "Enter your Last-Name");
	form.appendChild(ip);
	ip.id="lastname";
	br(form);br(form);
	
	txt = document.createTextNode("Phone-No \xa0\xa0\xa0");
	form.appendChild(txt);                         
	var ip = document.createElement("input");
	ip.setAttribute("placeholder", "Enter your phone number");
	form.appendChild(ip);
	ip.setAttribute("type","number");
	ip.id="phone";
	br(form);br(form);
	
	txt = document.createTextNode("Email-id \xa0\xa0\xa0\xa0\xa0");
	form.appendChild(txt);                               
	var ip = document.createElement("input");
	ip.setAttribute("placeholder", "abc@gmail.com");
	form.appendChild(ip);
	ip.setAttribute("type","email");
	ip.id="email";
	br(form);br(form);
	
	txt=document.createTextNode("Address \xa0\xa0\xa0\xa0\xa0\xa0");
	form.appendChild(txt);
	var ip=document.createElement("Textarea");
	ip.setAttribute("placeholder","Enter your Address ");
	form.appendChild(ip);
	ip.id="address";
	br(form);br(form);
	
	txt=document.createTextNode("City \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0");
	form.appendChild(txt);
	var array = ["Mumbai","Pune","Bangalore","Hyderabad"];
	var ip=document.createElement("select");
	ip.setAttribute("id","mySelect");
	form.appendChild(ip);
	for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    ip.appendChild(option);
	}
	br(form);br(form);
	
	txt=document.createTextNode("Gender \xa0\xa0\xa0\xa0\xa0");
	form.appendChild(txt);
	var label=document.createElement("label");
	label.innerHTML="Male";
	var input = document.createElement("input");
	input.type="radio";
	input.name="gender";
	input.value="male";
	input.checked="true";
	label.appendChild(input);
	form.appendChild(label);
	label=document.createElement("label");
	label.innerHTML="Female";
	var input = document.createElement("input");
	input.type="radio";
	input.name="gender";
	input.value="female";
	label.appendChild(input);
	form.appendChild(label);
	label=document.createElement("label");
	label.innerHTML="Trans";
	var input = document.createElement("input");
	input.type="radio";
	input.name="gender";
	input.value="trans";
	label.appendChild(input);
	
	form.appendChild(label);
	br(form);br(form);br(form);br(form);
	
	var button = document.createElement("button") ;
	txt = document.createTextNode("Register");
	button.appendChild(txt) ;
	button.id = "register" ;
	form.appendChild(button) ;
	
	var button = document.createElement("button") ;
	txt = document.createTextNode("Cancel");
	button.appendChild(txt) ;
	button.id = "cancel" ;
	form.appendChild(button) ;	
}
document.getElementById("cancel").addEventListener("click",function(event){
	document.getElementById("name")="" ;
	window.location = "register.html";
});

document.getElementById("register").addEventListener("click",function(event){    
	if(validate()){
		window.open("file:///C:/Users/My_Pc/Desktop/TaviscaRegistrationForm/registered.html") ;
	}
		
});

function validate(){
debugger;
	
	if(document.getElementById("firstname").value== "") {
		 alert("Please fill a valid Name !")
		return false ;
		}	
	else if(!validateName(document.getElementById("firstname").value))
		return false;
	 else if(document.getElementById("lastname").value== "") {
		alert("Please fill your last name!"); 	
		return false ;
		}	
	 else if(document.getElementById("phone").value== "") {
		alert("Please fill your phone number!"); 
		return false ;}
	
	 else if(document.getElementById("phone").value.length != 10){
		alert("Please fill a valid 10 digit phone number!"); 
		return false ;
		}
	 else if(!ValidateEmail(document.getElementById("email").value))
		return false ;
	 else if(document.getElementById("address").value== ""){
		 alert("Please enter a valid address!")
		return false;
	}
	else
		return true ;
}
function validateName(inputText){
	var nameformat=/^[A-Za-z]+$/;
	if(inputText.match(nameformat))
		return true;  
    else  
    {  
    alert("You have entered an invalid name! Please enter alphabets .");   
    return false;  
    } 
}
function ValidateEmail(inputText){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText.match(mailformat))    
    return true;  
    else  
    {  
    alert("You have entered an invalid email address!");   
    return false;  
    }  
 }  
function br(target){
var br = document.createElement("br") ;
target.appendChild(br) ;	
}