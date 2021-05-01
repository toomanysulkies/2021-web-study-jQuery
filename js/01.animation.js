//show(속도(ms,'slow', 'fast'), 애니메이션이 완료된 후 실행할 기능(=함수))


//display
function showCb() {
	alert('등장!')
}
$('.bt-show').click(function () {
	$('.hero').stop().show('slow', showCb)
})

$('.bt-hide').on('click', function () {
	$('.hero').stop().hide('fast')
})

$('.bt-toggle').on('click', function () {
	$('.hero').stop().
		toggle(1000)
})

//fade
$('.bt-fade-in').click(function () {
	$('.hero').fadeIn()
})
$('.bt-fade-out').click(function () {
	$('.hero').fadeOut()
})
$('.bt-fade-toggle').click(function () {
	$('.hero').fadeToggle()
})

//slide
$('.bt-slide-down').click(function () {
	$('.hero').slideDown()
})
$('.bt-slide-up').click(function () {
	$('.hero').slideUp()
})
$('.bt-slide-toggle').click(function () {
	$('.hero').slideToggle()
})


// $('대상').stop().animate({애니메이션}, 속도, 타입, 콜백)
// 속도: Number 	- ms
// 타입: String 	- 'swing', 'linear'
// 콜백: Function - 애니메이션이 끝난 후 작동할 동작

/*
backgroundPositionX
backgroundPositionY
borderWidth
borderBottomWidth
borderLeftWidth
borderRightWidth
borderTopWidth
borderSpacing
margin
marginBottom
marginLeft
marginRight
marginTop
opacity
outlineWidth
padding
paddingBottom
paddingLeft
paddingRight
paddingTop
height
width
maxHeight
maxWidth
minHeight
minWidth
fontSize
bottom
left
right
top
letterSpacing
wordSpacing
lineHeight
textIndent
*/
var interval
$('.bt-animate').on('click', ani)
$('.bt-timeout').on('click', function () {
	setTimeout(ani, 3000)//한번만 실행
})
$('.bt-interval').on('click', function () {
	interval = setInterval(ani, 3600)//clearIntarval 하기 전까지 계속 실행
})
$('.bt-clear').on('click', function () {
	clearInterval(interval)
})



function ani() {

	$('.hero').stop().animate({ 'margin-left': '860px', 'margin-top': 0 }, 400, function () {
		$(this).animate({ 'margin-left': '860px', 'margin-top': '200px' }, 400, function () {
			$(this).animate({ 'margin-left': 0, 'margin-top': '200px' }, 400, function () {
				$(this).animate({ 'margin-left': 0, 'margin-top': 0 }, 400, function () { console.log('Animation 종료'); }
				)
			}
			)
		}
		)
	}
	)
}


