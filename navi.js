// pc용 nav .gnb 태그 복제 후 mobile용 태그 위치를 붙여넣기
const gnb = document.querySelector('nav .gnb')
const m_wrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
// 복제대상.cloneNode() : 괄호 안 true 자식, 자손 추가 복제
console.log(gnb, m_wrap, gnbClone)
// 복제 gnb 붙여넣기
m_wrap.appendChild(gnbClone)
// pc - nav
// var $sub = $('.sub')
// $('.sub').hide() -> display: none;
// $('.gnb > li').on('mouseover', function(){$(this).find('.sub).slideDown(stop)})
// $('.gnb > li').on('mouseout', function(){$(this).find('.sub).slideUp(stop)})
// 자바스크립트로 nav 제작 순서
// 1. 모든 서브 숨기기
// 2. 메뉴에 마우스를 올렸을 때
// 3. 해당 메뉴의 서브 메뉴가 출력된다 or 전체 서브 메뉴가 출력된다.
// 제이쿼리는 DOM 선택 시 DOM 요소 한 개만 적성해도 모두 처리됨
// 자바스크립트는 DOM 선택 시 DOM 요소를 개별로 따로 인식함
const pcSub = document.querySelectorAll('nav .sub')
console.log(pcSub)
// pcSub[0].style.display = 'none'
// pcSub[1].style.display = 'none'
// pcSub[2].style.display = 'none'
// pcSub[3].style.display = 'none'
for(let i of pcSub){i.style.display = 'none'}
const pcNav = document.querySelectorAll('nav .gnb > li')
console.log(pcNav)
for(let n of pcNav){
    n.addEventListener('mouseover', ()=>{
        for(let i of pcSub){i.style.display = 'block'}
    })
    n.addEventListener('mouseout', ()=>{
        for(let i of pcSub){i.style.display = 'none'}
    })
}
// mobile - nav
const mbTab = document.querySelector('.m_nav_wrap')
const mbOpen = document.querySelector('#m_nav')
const mbClose = document.querySelector('.m_nav_wrap .m_nav_close')
console.log(mbTab, mbOpen, mbClose)
mbTab.style.display = 'none'
mbOpen.addEventListener('click', ()=>{mbTab.style.display = 'block'})
mbClose.addEventListener('click', ()=>{mbTab.style.display = 'none'})