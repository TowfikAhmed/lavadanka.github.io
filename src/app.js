function openNav() {
	var nav = document.getElementById('nav-links');
	nav.style.right='0px';
}
function closeNav() {
	var nav = document.getElementById('nav-links');
	nav.style.right='-500px';
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.height = "40px";
    document.getElementById("main").style.marginTop = "55px";
  } else {
    document.getElementById("navbar").style.height = "55px";
    document.getElementById("main").style.marginTop = "75px";
  }
}


var seller = document.getElementsByClassName("seller");
for (var i = seller.length - 1; i >= 0; i--) {
	seller[i].innerHTML  = 'Verfied Seller';
	seller[i].style.padding = '3px';
	seller[i].style.backgroundColor = 'rgba(210,230,210,.7)';
}
