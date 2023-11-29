var storeBlock = document.querySelector("#block");
var storeMsg = document.querySelector("#msg");
var storeColor = document.querySelector("#color");

var blockFunction = () => {
  $("#divMain").addClass("container");
  $("#divMain").text("");
};

var msgfunction = () => {
  var msg = "Hellow Every one , Welcome to Jquery API";
  $("#divMain").text(msg);
};

var colorFunction = () => {
  var classList = document.querySelector("#divMain").classList;
  classList.add("background");
};

storeBlock.addEventListener("click", blockFunction);
storeMsg.addEventListener("click", msgfunction);
storeColor.addEventListener("click", colorFunction);
