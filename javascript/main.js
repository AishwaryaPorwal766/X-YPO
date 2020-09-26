var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-25rem";
menuBtn.onmouseover = function(){
   if(sideNav.style.right = "-25rem")
   {
   	 sideNav.style.right = "0";
   }
   
}
   
window.onclick =function(){
	if(sideNav.style.right = "0")
	{
		 sideNav.style.right = "-25rem";
	}
} 

