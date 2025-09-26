 function sendemail() {
  emailjs.init({
  publicKey: "6hWftE8RaEsW5vFo_",
});

const name =document.getElementById('name').Value.trim();
const email=document.getElementById('email').Value.trim();
const message =document.getElementById('message').Value.trim();

const params={
  from_name:name,
  from_email:email,
  message:message,
};
emailjs.send("service_gengv1n", "template_0f3gt0g", params)
.then(function(){
  alert("Email sent!");
})
.catch(function () {
  alert("failed to sent");
})
