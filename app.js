/*================
     NAVbar animation
=================*/

function activateNav() {
	window.scrollTo(0, 0);
	burger = document.querySelector('.burger');
	burger.classList.toggle('active-burger');

	navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active-nav');

	navBar = document.querySelector('.nav-bar');
	navBar.classList.toggle('active-nav-bar');
};

gsap.to('.nav-bar',{
	scrollTrigger:{
		trigger:'.presentation',
		start:'18% 16%', 
		end:'18% 16%',  
		startTrigger:"center center",
		toggleActions: 'play none reverse none',
	},
	height:'10vh',
	backgroundColor:'#6600ff',
	boxShadow: '3px 0px 5px rgba(0,0,0,.2)',
	ease:'back',
	duration:.5,
});

gsap.to('.logo-cont',{
	scrollTrigger:{
		trigger:'.presentation',
		start:'18% 16%', 
		end:'18% 16%',  
		startTrigger:"center center",
		toggleActions: 'play none reverse none',
	},
	fontSize:'2rem',
	ease:'back',
	duration:.5,
});
gsap.to('.navs',{
	scrollTrigger:{
		trigger:'.presentation',
		start:'18% 16%', 
		end:'18% 16%',  
		startTrigger:"center center",
		toggleActions: 'play none reverse none',
	},
	borderBottom:'none'
});

/*================
     NAVbar toogle links section
=================*/
gsap.to('.home-link',{
	scrollTrigger:{
		trigger:'#home',
		start:'top center', 
		end:'bottom center',  
		startTrigger:"center center",
		toggleActions: 'restart reverse restart reverse', 
	},
	backgroundColor: 'rgba(239, 63, 61, 1)',
	color: 'white',
});
gsap.to('.about-link',{
	scrollTrigger:{
		trigger:'#about', 
		start:'top center', 
		end:'bottom center',  
		toggleActions: 'restart reverse restart reverse',
		markers:true,
	},
	backgroundColor: 'rgba(239, 63, 61, 1)',
	color: 'white',
});





const tl = gsap.timeline({repeat:-1, repeatDelay:0});
tl.to("#quote", {
	duration: 2, 
	delay:1,
	text:"একদম সহজেই",  
})
.to("#quote", {
	duration: 2, 
	delay:1,
	text:"বানিয়ে ফেলুন", 
})
.to("#quote", {
	duration: 2, 
	delay:1,
	text:"একদম সহজেই", 
})
.to("#quote", {
	duration: 2, 
	delay:1,
	text:"বানিয়ে ফেলুন", 
});


 
