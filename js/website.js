
$('#flashMessage').hide();

// test that the message is hidden before clicking submit
var flashTest1= $("#flashMessage").is(':hidden');
console.log(flashTest1)

$('#submitbtn').click(function(){
  $('#flashMessage')
    .slideDown(1000)
    .delay(3000)
    .slideUp();
    // document.getElementById("labelhappy").innerHTML = information
    var selValue = $('input[name=optradio]:checked').val();
});

// test that the message is shown after clicking submit
var flashTest2= $("#flashMessage").is(':hidden');
console.log(flashTest2);

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

function popup(url) {
  newwindow=window.open(url,'name','height=600,width=600');
  if (window.focus) {newwindow.focus()}
  return false;
}

var popUp = onclick="return popup('img/Alt1_5.jpg')";
if (popUp == null || typeof(popUp)=='undefined') {
	alert('Please disable your pop-up blocker and click the "Open" link again.');
}
