function getbasketInButton (idname) {
    $('btn').append('<p class="basket">&#128722;<p>');
}

$(function() {
    ('#offer').click(function(){
        getbasketInButton();
    
    });
    
});






/*модальное окно с выбором города*/
/*function getModalWindow(idname) {
    $('body').append('<div class="screener"></div><div class="modal" id="'+idname+'"><button type="button" class="close">&#10008;</button></div>');
    $('.screener, .modal .close').click(dropModalWindow);
}
function dropModalWindow() {
    $('.screener, .modal').remove();
}




$(function(){
    $('#city').click(function(){
        getModalWindow('citymodal');
        $('.modal').append('<h3>Выберите город доставки:</h3><p>Москва</p><p>Санкт-Петербург</p><p>Казань</p><p>Сочи</p><p>Воронеж</p>');
        $('.modal p').click(function(){
            $('#city').html($(this).html());
            dropModalWindow();
        });
    });
    
   
    console.log('just loaded');
});

 
 
 