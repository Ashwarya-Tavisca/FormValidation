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
	button.type="submit";
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

document.getElementById("register").addEventListener("mousedown",function(event){    
	if(validate()){
		localStorage.setItem("FirstName", firstname.value);
		localStorage.setItem("LastName", lastname.value);
		localStorage.setItem("Number", phone.value);
		localStorage.setItem("Email", email.value);
		localStorage.setItem("Address", document.getElementById("address").value);
		window.open("file:///C:/Users/My_Pc/Desktop/TaviscaRegistrationForm/registered.html") ;
	}
		
});

function validate(){
	if(document.getElementById("firstname").value== "") {

		var paragraph=document.createElement("p");
		paragraph.innerHTML="Please fill your first name!";
		var first_name=document.getElementById("firstname");
		first_name.parentNode.insertBefore(paragraph,first_name.nextSibling);
		return false ;
		}	
	else if(!validateName(document.getElementById("firstname").value))
		return false;
	 else if(document.getElementById("lastname").value== "") {
		var paragraph=document.createElement("p");
		paragraph.innerHTML="Please fill your last name!";
		var first_name=document.getElementById("lastname");
		first_name.parentNode.insertBefore(paragraph,first_name.nextSibling);	
		return false ;
		}	
	 else if(document.getElementById("phone").value== "") {
		var paragraph=document.createElement("p");
		paragraph.innerHTML="Please fill a valid phone number!";
		var first_name=document.getElementById("phone");
		first_name.parentNode.insertBefore(paragraph,first_name.nextSibling); 
		return false ;}
	
	 else if(document.getElementById("phone").value.length != 10){
		var paragraph=document.createElement("p");
		paragraph.innerHTML="Please fill a valid 10 digit phone number!";
		var first_name=document.getElementById("phone");
		first_name.parentNode.insertBefore(paragraph,first_name.nextSibling); 
		return false ;
		}
	 else if(!ValidateEmail(document.getElementById("email").value))
		return false ;
	 else if(document.getElementById("address").value== ""){
		var paragraph=document.createElement("p");
		paragraph.innerHTML="Please enter a valid addresss!";
		var first_name=document.getElementById("address");
		first_name.parentNode.insertBefore(paragraph,first_name.nextSibling); 
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
		var paragraph=document.createElement("p");
		paragraph.innerHTML="Please fill your first name!";
		var first_name=document.getElementById("firstname");
		first_name.parentNode.insertBefore(paragraph,first_name.nextSibling);
    return false;  
    } 
}
function ValidateEmail(inputText){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(inputText.match(mailformat))    
    return true;  
    else  
    {  
		var paragraph=document.createElement("p");
		paragraph.innerHTML="You have entered an invalid email address!";
		var first_name=document.getElementById("email");
		first_name.parentNode.insertBefore(paragraph,first_name.nextSibling); 
    return false;  
    }  
 }  
function br(target){
var br = document.createElement("br") ;
target.appendChild(br) ;	
}