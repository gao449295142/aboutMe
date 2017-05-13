$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#000', '#56bed0', '#5e9fe0', '#f0a95d', '#f86b4f','#444755'],
		'navigation': true,
		afterLoad: function(anchorLink, index){
			if(index == 3){
				$('.mySkill li span .skill-1').animate({width:'98%'},1000);
				$('.mySkill li span .skill-2').animate({width:'80%'},1000);
				$('.mySkill li span .skill-3').animate({width:'60%'},1000);
				$('.mySkill li span .skill-4').animate({width:'50%'},1000);
				$('.mySkill li span .skill-5').animate({width:'98%'},1000);
				$('.mySkill li span .skill-6').animate({width:'90%'},1000);
				$('.mySkill li span .skill-7').animate({width:'80%'},1000);
			}
			if (index == 5) {
				
			}	
		}
	});

	
});