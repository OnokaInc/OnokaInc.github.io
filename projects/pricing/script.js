var btnMob = document.querySelector('.mob-btn-menu');
var mobBtnClose = document.querySelector('.mob-btn-close');
btnMob.onclick = function(){
    var mobMenu = document.querySelector('.mob-menu');
    mobMenu.classList.add('show');
}
mobBtnClose.onclick = function(){
    var mobMenu = document.querySelector('.mob-menu');
    mobMenu.classList.remove('show');
}