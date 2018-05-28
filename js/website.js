
$('#flashMessage').hide();

$('#submitbtn').click(function(){
  $('#flashMessage')
    .slideDown(1000)
    .delay(3000)
    .slideUp();
    document.getElementById("labelhappy").innerHTML = information
    var selValue = $('input[name=optradio]:checked').val();
});

var form = document.getElementById("myForm");

var name = getName();
var email =getEmail();
var interest= getInterest();
var comment= getComment();
var information = "Name: " + name + " " + "Email: " + email + " " + "Interests: " + interest + " " + "Question Comment: " + comment;


function getName() {
  return document.forms[0].elements[0].value;
  // return document.getElementById("inputName").value;
}
function getEmail() {
  return  document.getElementById("inputEmail");
}
function getInterest() {
  return document.getElementsByClassName("interests");
}
function getComment() {
  return  document.getElementById("questionComment");
}

console.log(document.getElementById("labelhappy"))
