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



