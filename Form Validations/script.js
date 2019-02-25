// Code for showing delete button and highlighting the selected row
// var checkboxes = document.querySelectorAll('input[type="checkbox"]');
// for (i = 0; i < checkboxes.length; i++) {
//   checkboxes[i].addEventListener("change", function () {
//     var checkcnt = document.querySelectorAll('input[type="checkbox"]:checked');
    
//     if (this.checked) {

//       var x =this.value;
//      document.getElementById("sdemo").innerHTML="Preference x;
//         // d.style.display = "block";
//       }
    
    
//   });

// }

 function showstring(name){
  // var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkboxes = document.getElementsByName(name);
  var str = "";
  var flag=false;
   for(var i=0;i<checkboxes.length;i++)
   {
   
      if(checkboxes[i].checked===true){
          str += checkboxes[i].value + " ";
          flag=true;
      }
   }
  
   if(flag==true){
     if(name=="shoe")
   document.getElementById("sdemo").innerHTML = "Preference(s) selected : "+str;
    else if(name=="summer")
    document.getElementById("sudemo").innerHTML = "Preference(s) selected : "+str;
    else if(name=="winter")
    document.getElementById("wdemo").innerHTML = "Preference(s) selected : "+str;
    else if(name=="head")
    document.getElementById("hdemo").innerHTML = "Preference(s) selected : "+str;
    else if(name=="HB")
    document.getElementById("HBdemo").innerHTML = "Preference(s) selected : "+str;
   }
   else{
    //  var x=  document.getElementById("sdemo");
    //  x.style.display='none';
    document.getElementById("sdemo").innerHTML="";
    document.getElementById("sudemo").innerHTML=""
    document.getElementById("wdemo").innerHTML=""
    document.getElementById("hdemo").innerHTML=""
    document.getElementById("HBdemo").innerHTML=""
   }
  }
   
  
  // validateForm('title','firstName','lastName','emailId','phoneNumber','zipcode','source','text','shoe','summer','winter','head','HB')
// function validateForm(title,firstName,lastName,emailId,phoneNumber,zipcode,source,text,shoe,summer,winter,head,HB) {
function validateForm(){
// Validating all fields
// document.write("Result");
// document.getElementById("demo").innerHTML= "Result : ";
var fields = ["title", "firstName", "lastName", "emailId", "phoneNumber", "zipcode","text"]
var cbox = document.forms["myform"]["source"];
var i, l = fields.length;
var fieldname;




for (i = 0; i < l; i++) {
  fieldname = fields[i];
  if (document.forms["myform"][fieldname].value === "") {
    alert(fieldname + " can not be empty");
    return false;
  }
}
if (
  cbox[0].checked === false &&
  cbox[1].checked === false &&
  cbox[2].checked === false
) {
  alert("Please Select a checkbox");
  return false;
}

for(var i=0;i<document.getElementsByName("title").length;i++){
  if(document.getElementsByName("title")[i].checked){
    var titleValue=document.getElementsByName("title")[i].value;
  }
}



var ShoeValue=" ";
var SummerValue=" ";
var WinterValue=" ";
var HeadValue=" ";
var HBValue=" ";
var content=" ";
var vari=" ";
var SourceValue=" ";
// var flag=false;
for(var i=0;i<document.getElementsByName("shoe").length;i++){
  if(document.getElementsByName("shoe")[i].checked){
    ShoeValue+=document.getElementsByName("shoe")[i].value+" ";
    // flag=true;
    content=ShoeValue;
  }
}

for(var i=0;i<document.getElementsByName("summer").length;i++){
  if(document.getElementsByName("summer")[i].checked){
    SummerValue+=document.getElementsByName("summer")[i].value+" ";
    // flag=true;
    content=SummerValue;
  }
}

for(var i=0;i<document.getElementsByName("winter").length;i++){
  if(document.getElementsByName("winter")[i].checked){
    WinterValue+=document.getElementsByName("winter")[i].value+" ";
    // flag=true;
    content=WinterValue;
  }
}

for(var i=0;i<document.getElementsByName("head").length;i++){
  if(document.getElementsByName("head")[i].checked){
    HeadValue+=document.getElementsByName("head")[i].value + " ";
    // flag=true;
    content=HeadValue;
  }
}
for(var i=0;i<document.getElementsByName("HB").length;i++){
  if(document.getElementsByName("HB")[i].checked){
    HBValue+=document.getElementsByName("HB")[i].value+" ";
    content=HBValue;
  }
}

for(var i=0;i<document.getElementsByName("source").length;i++){
  if(document.getElementsByName("source")[i].checked){
    SourceValue+=document.getElementsByName("source")[i].value+" ";
    // flag=true;
    vari=SourceValue;
  }
}

document.write("<table border='1'><tr><th>Title</th><th>First Name</th><th>Last Name</th><th>Email Id</th><th>Phone Number</th><th>Zipcode</th><th>Can't Live without?</th><th>Heard from?</th><th>Comments</th></tr> <tr><td>"+titleValue+"</td>"+
  "<td>"+document.getElementById("firstName").value +"</td>"+
  "<td>"+document.getElementById("lastName").value +"</td>"+ 
  "<td>"+document.getElementById("emailId").value +"</td>"+
  "<td>"+document.getElementById("phoneNumber").value +"</td>"+
  "<td>"+document.getElementById("zipcode").value +"</td>"+
  "<td>"+content+"</td>"+
  "<td>"+vari+"</td>"+
  "<td>"+document.getElementById("comments").value +"</td>"+
 
  "</tr></table>");
// document.getElementById("mytable").tBodies[0].innerHTML = content;


// document.write(content);

}

function validatefirstname(){

  var x = document.forms["myform"]["firstName"];
  // var x = document.getElementById("firstName");
  // document.getElementById("fval").innerHTML=x;
  // document.write(x);
  var ptrn = /^[A-Za-z]+$/;
  if(x.value.match(ptrn))
  {
    // alert("Good");
    document.getElementById("fval").innerHTML = "Good";
    // return true;
  }
  else{
    // alert("Please input alphabet characters only");
    document.getElementById("fval").innerHTML= "Please input alphabet characters only";
    // return false;


  }
}

function validatelastname(){

  var l = document.forms["myform"]["lastName"];
  var ptrn = /^[A-Za-z]+$/;
  if(l.value.match(ptrn))
  {
    // alert("Good");
    document.getElementById("lval").innerHTML = "Good";
    // return true;
  }
  else{
    // alert("Please input alphabet characters only");
    document.getElementById("lval").innerHTML= "Please input alphabet characters only";
    // return false;

} 
}

function validateemail(){
  var ptrn = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var e = document.forms["myform"]["emailId"];
  if(ptrn.test(e.value))
  {
    // alert("Good");
    document.getElementById("emailval").innerHTML = "Good";
    // return true;
  }
  else{
    // alert("Please input alphabet characters only");
    document.getElementById("emailval").innerHTML= e.value + " is not valid email id";
    // return false;

}
}

		
function validatephoneno(){
  var e = document.forms["myform"]["phoneNumber"];
  var d = e.value.length;
  // var ptrn = '^[0-9]$';
  var ptrn = '/^\d+$/';
  if(ptrn.match(e.value))
  {
    if(d==10){
    // alert("Good");
    document.getElementById("pval").innerHTML = "Good";
    // return true;
  }
  else{
    // alert("Please input alphabet characters only");
    document.getElementById("pval").innerHTML= e.value + " is not valid Phone Number";
    // return false;  

}
}
  else{
    // alert("Please input alphabet characters only");
    document.getElementById("pval").innerHTML= e.value + " is not valid Phone Number";
    // return false;  

}
}

function validateselect(){
 
  
  var a = document.getElementById("Shoe");
  a.style.display='none';
  var b = document.getElementById("Summer");
  b.style.display='none';
  var c = document.getElementById("Winter");
  c.style.display='none';
  var d = document.getElementById("Headphone");
  d.style.display='none';
  var e = document.getElementById("Handbags");
  e.style.display='none';

  var e = document.getElementById("Pref");
  var strUser = e.options[e.selectedIndex].text;
    if(strUser=="Shoe Dazzle"){
    var x = document.getElementById("Shoe");
    x.style.display="block";
    } 
    else if(strUser=="Summer Clothes"){
      var x = document.getElementById("Summer");
      x.style.display="block"; 
    }
    else if(strUser=="Winter Clothes"){
      var x = document.getElementById("Winter");
      x.style.display="block"; 
    }
    else if(strUser=="Headphones"){
      var x = document.getElementById("Headphone");
      x.style.display="block"; 
    }
    else  if(strUser=="Handbags") {
      var x = document.getElementById("Handbags");
      x.style.display="block"; 
    }
    else{
      var x = document.getElementById("select");
      x.style.display="none"; 
    }


}


function validateemail(){
  var ptrn = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var e = document.forms["myform"]["emailId"];
  if(ptrn.test(e.value))
  {
    // alert("Good");
    document.getElementById("emailval").innerHTML = "Good";
    // return true;
  }
  else{
    // alert("Please input alphabet characters only");
    document.getElementById("emailval").innerHTML= e.value + " is not valid email id";
    // return false;

}
}

		
function validatephoneno(){
  var e = document.forms["myform"]["phoneNumber"];
  var d = e.value.length;
  // var ptrn = '^[0-9]$';
  // var ptrn = '/^\d+$/';
  var ptrn = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if(e.value.match(ptrn)) {
    document.getElementById("pval").innerHTML = "Good";
    return true;
  }
  else {
    document.getElementById("pval").innerHTML = "Not a valid phone number";
    return false;
  }
}

function validatezip() {
  var e = document.forms["myform"]["zipcode"];
  var ptrn = /^\d{6}$/;
  if(e.value.match(ptrn)){
    document.getElementById("zval").innerHTML = "Good";
    return true;
  } else{
    document.getElementById("zval").innerHTML = "Not a valid zip code";
    return false;
  }
}
