/*************** 글로벌 설정 *****************/
var prds
var $listWrap
var $list
init()
/*************** 사용자 함수 *****************/
function init() {
	prds = [
		{ id: 1, src: '../img/p1.jpg', title: '맛있는 체리', desc: '체리체리' },
		{ id: 2, src: '../img/p2.jpg', title: '맛있는 크로와상', desc: '크로와상' },
		{ id: 3, src: '../img/p3.jpg', title: '맛있는 사탕', desc: '달콤' },
		{ id: 4, src: '../img/p4.jpg', title: '맛있는 연어', desc: '연어' },
		{ id: 5, src: '../img/p5.jpg', title: '맛있는 스테이크', desc: '뻑뻑' },
		{ id: 6, src: '../img/p6.jpg', title: '맛있는 스테이크', desc: '뻑뻑' },
		{ id: 7, src: '../img/p7.jpg', title: '맛있는 스테이크', desc: '뻑뻑' },
		{ id: 8, src: '../img/p8.jpg', title: '맛있는 스테이크', desc: '뻑뻑' },
	]
	$listWrap = $('.list-wrap')
}

/*************** 이벤트 등록 *****************/
$('.bt-create').click(onCreate)
$('.bt-remove').click(onRemove)


/*************** 이벤트 콜백 *****************/
function onCreate() { // 생성 (bt-create)버튼을 누르면 기능 onCreate를 실행
	var html
	$listWrap.empty() //listWrap을 지우지 않으면 이미 만들어진 리스트가 계속 쌓인다.
	for (var i = 0; i < prds.length; i++) {  //인덱스는 0부터 시작, 인덱스는 마지막 배열의 value까지 할당된다 그리고 하나씩 증가
		/*i < prds.length;  -> 0부터 시작하기 때문에 length보다 작은 값 /이 말은 곧 배열 끝까지만 인덱스가 할당된다는 뜻 / 
		예를 들면, 5개의 이미지의 length는 5이고 i에 할당될 수 있는 마지막 value는 인덱스 순서로 4이니까 .0,1,2,3,4)*/
		html = '<li class="list card">' //html에 추가한다
		html += '<img src=" ' + prds[i].src + ' ">'
		html += '<div class="card-body">'
		html += '<h4 class="card-title">' + prds[i].title + '</h4>'
		html += '<p class="card-text">' + prds[i].desc + '</p>'
		html += '</div>'
		html += '</li> '
		$listWrap.append(html)//html 안에서  listWrap 다음에 추가
	}

}

function onRemove() {
	$listWrap.empty()

}
