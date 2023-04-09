/////////////////////Question1:////////////////////////////////////
// function changer_style(){
//   var elem = document.getElementById("para1");
//   elem.style.backgroundColor = "green";
//   elem.style.color = "white";
//   elem.style.border = "1px solid #d6e9c6";
//   elem.style.padding ="5px";
//
//
//   // para1.style.cssText= 'color: white;
//   //                       background-color: green;
//   //                       border: 5px solid black;
//   //                       padding: 5px;';
// }




////////////Question2://///////////////////////////////////////////
function changer_style(){
  var elem = document.getElementById("para1");
  elem.classList.toggle("active");
}
