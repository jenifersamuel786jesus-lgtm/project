function myfunc(){
    alert("Product added to cart!!")
}


document.getElementById("form").addEventListener("submit",function(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var message = "Hey!"+name+" Welcome to Flowery Touch.. You're signed it with email "+ email ;
  document.getElementById("output").innerText=message;
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
});