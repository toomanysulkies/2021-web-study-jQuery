/*************** 글로벌 설정 *****************/
var prds = [
	{ id: 1, src: '../img/cherries.jpeg', title: '맛있는 체리', desc: '체리체리' },
	{ id: 2, src: '../img/croissant.jpeg', title: '맛있는 크로와상', desc: '크로와상' },
	{ id: 3, src: '../img/popsicle.jpeg', title: '맛있는 사탕', desc: '달콤' },
	{ id: 4, src: '../img/salmon.jpeg', title: '맛있는 연어', desc: '연어' },
	{ id: 5, src: '../img/steak.jpeg', title: '맛있는 스테이크', desc: '뻑뻑' }
]

/*************** 사용자 함수 *****************/

/*************** 이벤트 등록 *****************/
$('.bt-create').click(onCreate)
$('.bt-remove').click(onRemove)


/*************** 이벤트 콜백 *****************/
function onCreate() {
}

function onRemove() {

}
