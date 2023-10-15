let drop=document.querySelectorAll(".fordropdown");
drop.forEach(function(val){
    // console.log( val.childNodes[3])
   val.addEventListener("mouseover",function(){
    val.childNodes[3].style.display="block";
    console.log("block")
   });
   val.addEventListener("mouseout",function(){
    val.childNodes[3].style.display="none";
    console.log("block")
 });
    
});
