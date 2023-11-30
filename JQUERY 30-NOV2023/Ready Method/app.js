



$(document).ready(()=>{  //   $(document).ready()  --> this method will check  DOM element created on not 
    var firstdiv = document.querySelector(".container1");   
firstdiv.addEventListener("click", () => {
  console.log("div 1 clicked");
});
})




var showmsg = () => {
  console.log("div 2 clicked");
};
