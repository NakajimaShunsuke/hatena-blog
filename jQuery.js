

//  ボタンが押された時の切り替え処理
$('.btn').click(function () {
    $('.btn').removeClass('active');
    $(this).addClass('active');

    $('.panel').hide().fadeToggle;
    $('.panel').eq($(this).index()).fadeIn();
});
