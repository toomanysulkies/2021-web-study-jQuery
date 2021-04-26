/*********************************글로벌 설정*****************************************/



$('.sub-wrap').slideUp(0)
/***********************************사용자 함수***************************************/





/************************************이벤트 등록*************************************/

// $('.hover-navi').'mouseover'(onNaviHover) 밑에거랑 동일!
$('.click-navi>span').on('click', onNaviClick)
$('.hover-navi').on('mouseover', onNaviHover)
$('.hover-navi').on('mouseleave', onNaviLeave)

/*************************************이벤트 콜백*************************************/
function onNaviClick() {
	console.log(
		$(this),//span
		$(this).parent(),//.navi click-navi
		$(this).parents('header'),//parent들 중에서
		$(this).prev(),
		$(this).next(),
		$(this).siblings(),
		$(this).children('.sub'),
		$(this).find('.sub'),
		$(this).parent().children('.sub'),
		$(this).parent().find('.sub'),
	)
	// $(this).next().stop().slideToggle(300)
	$(this).parent().find('.sub-wrap').stop().slideToggle(300)
}


function onNaviHover() {
	//console.log(this, $(this))
	$(this).find('.sub-wrap').stop().slideDown(500)
}


function onNaviLeave() {
	//console.log(this, $(this))
	$(this).find('.sub-wrap').stop().slideUp(500)
}