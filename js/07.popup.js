/****************************글로벌설정***********************************/
$('.modal-wrapper').hide()





/**************************사용자함수*************************************/






/**************************이벤트등록*************************************/
$('.bt-link').on('click', onLinkClick)
$('.bt-win').on('click', onWinClick)
$('.bt-popup').on('click', onPopupClick)
$('.bt-modal').on('click', onModalClick)

$('.modal-wrapper').on('click', onModalWrapperClick)
$('.modal-wrapper.modal-wrap').on('click', onModalWrapClick)
$('.modal-wrapper .bt-close, .modal-wrapper .bt-close2 ').on('click', onModalCloseClick)





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
	$('.modal-wrapper').show()
}
function onModalWrapperClick() {
	$('.modal-wrapper').hide()
}

function onModalWrapClick(e) {
	e.stopPropagation() //부모에게 클릭을 전파하지 않게 막아줌//그러나 이것만 하면 모달창이 안닫힘 ! 이벤트 등록에 함수 추가
}


function onModalCloseClick() {
	$('.modal-wrapper').hide()
}