const buyBtns  = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-close');
document.querySelector('.js-container').addEventListener('click',function(e){
    e.stopPropagation();
})


//duyệt qua các element vừa get được
for (const buyBtn of buyBtns) {
    //khi lắng nghe được sự kiện click thì làm gì
    buyBtn.addEventListener('click',function(){
        //thao tác khi bắt được sự kiện
        modal.classList.add('open');
    });    
}

modalClose.addEventListener('click',function(){
    modal.classList.remove('open');
})

modal.addEventListener('click',function(){
    
    modal.classList.remove('open');
})