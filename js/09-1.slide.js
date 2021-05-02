/*************** 글로벌 설정 *****************/
var idx											// 현재 보이는 슬라이드의 index
var slideLen								// 전체 슬라이드의 갯수
var slideLastIdx						// 마지막 슬라이드의 index
var aniSpeed								// fade animation 속도(ms)
var intervalGap							// 자동전환 interval 속도(ms)
var interval								// 자동전환 setInterval을 담는 변수
var $slideStage							// $('.slide-stage')
var $slideWrap							// $('.slide-stage .slide-wrap')
var $slide									// $('.slide-stage .slide')
var $pagerWrap							// $('.slide-stage .pager-wrap')
var $pager									// $('.slide-stage .pager')
init()

/*************** 사용자 함수 *****************/
function init() {
	idx = 0
	aniSpeed = 500 //슬라이드 전환 속도
	intervalGap = 3000 //자동으로 돌아가는 속도
	$slideStage = $('.slide-stage.stage01')
	$slideWrap = $slideStage.find('.slide-wrap')//스테이지 안의 슬라이드 랩
	$pagerWrap = $slideStage.find('.pager-wrap')//스테이지 안의 페이저 랩

	$slideStage.find('.slide').eq(0).clone().appendTo($slideWrap)//슬라이드 랩에 슬라이드를 복사해 넣는다 순서0부터
	$slide = $slideStage.find('.slide')
	slideLen = $slide.length//슬라이드 인덱스 길이 예)5개의 슬라이드:5
	slideLastIdx = slideLen - 1//슬라이드 인덱스 길이에서 1을 공제한(0부터 세기 때문에) 것 =>마지막 인덱스의 순서를 알 수 있다 예) 슬라이드 렝스 5인 슬라이드의 라스트 인덱스는 4
	$slideWrap.css('width', slideLen * 100 + '%')//슬라이드 랩의 css에 너비값을 준다. 이때 너비값은 슬라이드 인덱스 길이곱하기 100 퍼센트 예) 인덱스가 5개면 500퍼센트
	$slide.css('width', 100 / slideLen + '%')//슬라이드에 css 너비값주기->100나누기 슬라이드 인덱스 길이(100은 위의 슬라이드랩에서 받은 상속값이다)
	var html = '<i class="pager fa fa-circle"></i>'//html은 사용자 함수로 이 안에서만 동작한다 아이콘 전역변수
	for (var i = 0; i < slideLastIdx; i++)//for문(반복문) i가 0거나 라스트인덱스보다 작을 때(=라스트 인덱스 이전에서는) i 는 1씩 올라간다
		$pagerWrap.append(html)//페이저랩에 위의 html(아이콘 전역변수) 추가
	$pager = $pagerWrap.find('.pager')
	$pager.click(onPagerClick)//페이저를 클릭할 때 온페이저 클릭 돌아간다
	$pager.eq(idx).addClass('active')//이 인덱스의 페이저를 누르면 액티브 클래스가 돌아간다(css의 액티브 클래스)

	interval = setInterval(onNextClick, intervalGap)//인터벌에 셋인터벌을 준다(시간 당 넥스트 클릭)
}


function ani() { //함수 애니
	$pager.removeClass('active')//페이저의 액티브 클래스를 삭제한다
	$pager.eq(idx).addClass('active')//지금 인덱스에만 액티브 클래스를 준다
	if (idx === slideLastIdx) $pager.eq(0).addClass('active')//인덱스가 마지막일 때는 액티브를 주고 
	$slideWrap.stop().animate({ 'left': -idx * 100 + '%' }, aniSpeed) //처음으로 되돌아간다
}
/*************** 이벤트 등록 *****************/
$slideStage.find('.bt-prev').click(onPrevClick)//슬라이드 스테이지의 버튼 뒤로가기를 누르면 온프리브클릭 실행
$slideStage.find('.bt-next').click(onNextClick)
$slideStage.hover(onStageOver, onStageLeave)//스테이지에 호버하면 다음 기능 실행

/*************** 이벤트 콜백 *****************/
function onPagerClick() {//페이저 클릭 실행하면 지금의 인덱스에 함수 애니 실행(지금의 페이저만 액티브 됨)
	idx = $(this).index()
	ani()
}

function onPrevClick() {
	if (idx === 0) {  //idx가 0이라면 => 처음 이미지라면
		$slideWrap.css('left', -(slideLastIdx * 100) + '%')
		idx = slideLastIdx - 1
	}
	else idx--  //아니면 순서 뒤로 하나
	ani()
}
function onNextClick() {
	if (idx === slideLastIdx) {//idx 순서가 슬라이드의 마지막이라면
		$slideWrap.css('left', 0)
		idx = 1
	}
	else idx++ //아니라면 순서 앞으로 하나
	ani()
}
function onStageOver() {
	clearInterval(interval)
}

function onStageLeave() {
	interval = setInterval(onNextClick, intervalGap)
}
