/*************** 글로벌 설정 *****************/
var idx = 0, len, lastIdx
init()
/*************** 사용자 함수 *****************/
function init() {  //함수 init은
	$('.slide-wrap').append($('.slide-wrap > .slide').eq(0).clone()) //'.slide-wrap'의 '.slide'의 다음에 0번째 인덱스에 해당하는 것을 복제해 넣는다.
	len = $('.slide-wrap .slide').length //len은 .slide의 총 인덱스 수
	lastIdx = len - 1 //lastIdx는 .slide의 총 인덱수 수에서 1을 뺀다(왜냐하면 처음의 .slide 인덱스가 1이 아니라 0에서 시작하기 때문에 공제 필수)

}

/*************** 이벤트 등록 *****************/
$('.bt-prev').on('click', onPrev)
$('.bt-next').on('click', onNext)

/*************** 이벤트 콜백 *****************/
function onPrev() {
	if (idx === 0) {
		idx = 3
		$('.slide-wrap').css('top', '-400%')
	}
	else {
		idx--
	}
	$('.slide-wrap').stop().animate({

		'top': (idx * -100) + '%'
	}, 300)

}

function onNext() {

	if (idx === 4) {
		idx = 1
		$('.slide-wrap').css('top', 0)
	}
	else {
		idx++
	}
	$('.slide-wrap').stop().animate({

		'top': (idx * -100) + '%'
	}, 300)

}
