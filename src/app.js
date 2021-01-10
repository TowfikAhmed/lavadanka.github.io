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
    document.getElementById("logo").style.fontSize = "1.6rem";
  } else {
    document.getElementById("navbar").style.height = "55px";
    document.getElementById("main").style.marginTop = "75px";
    document.getElementById("logo").style.fontSize = "2rem";
  }
}


var seller = document.getElementsByClassName("verified");
for (var i = seller.length - 1; i >= 0; i--) {
  seller[i].innerHTML  = '<i class="fas fa-certificate"></i> ভেরিফাইড মেম্বার';
  seller[i].style.padding = '3px';
  seller[i].style.backgroundColor = 'rgba(210,230,210,.7)';
}


function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var date = new Date();
var nmb = date.getHours();
var member;
if (nmb>10) { member = nmb-getRand(5,8)} else { member = getRand(1,3)+nmb};
var visitor;
if (nmb>10) { visitor = nmb*3-getRand(11,23)} else { visitor = getRand(11,24)+nmb*2};
var online = visitor+member
document.getElementById("counter").innerHTML = 'অনলাইনঃ '+online+', মেম্বারঃ '+member+', ভিজিটরঃ '+visitor;
// document.getElementById("counter").innerHTML = 'অনলাইনঃ '+online+', মেম্বারঃ '+member+', ভিজিটরঃ '+visitor;


var ads = document.getElementsByClassName("adgroup");
for (var i = ads.length - 1; i >= 0; i--) {
  var img = getRand(1, 3)
  ads[i].innerHTML  = '<a href="/ads/ad'+img+'.html"><img src="/ads/'+img+'d.gif" class="ad card desktop"></a><a href="/ads/'+img+'.html"><img src="/ads/'+img+'m.gif" class="ad card mobile"></a>';
  // ads[i].innerHTML  = '<a href="ads/ad'+img+'.html"><img src="ads/'+img+'d.png" class="ad card desktop"></a><a href="ads/'+img+'.html"><img src="ads/'+img+'m.png" class="ad card mobile"></a>';
}

