/****************************글로벌설정***********************************/







/**************************사용자함수*************************************/






/**************************이벤트등록*************************************/
$('.bt-link').on('click', onLinkClick)
$('.bt-win').on('click', onWinClick)
$('.bt-popup').on('click', onPopupClick)
$('.bt-modal').on('click', onModalClick)





/******************************이벤트콜백*********************************/
function onLinkClick() {
	location.href = '../html/07.window-popup.html'
}

function onWinClick() {
	window.open('../html/07.window-popup.html')
}

function onPopupClick() {
	var options = 'width=200, height=200, top=300, left=300, scrollbars=0'
	window.open('../html/07.window-popup.html', 'popup', options)
}

function onModalClick() {
	window.open('../html/07.window-popup.html')
}






