$(function(){
    //상단 슬라이드 setInterval 3초 간격으로 좌측으로
    let width = $('.inner_slide>li').width();
    let count = $('.inner_slide>li').length;
    let boxWidth = width*count;
    $('.inner_slide').width(boxWidth);

    //이미지의 등록 갯수 만큼 도트 자동으로 화면에 생성 > .append("<li></li>") > for문 count회 루프
    for (let i = 0; i < count; i++) {
        $('.dot').append("<li></li>");
    }
    $(".dot>li:first").addClass('on');

    setInterval(function(){
        $(".inner_slide").stop().animate({"margin-left": -width}, 1000, function(){
            $(".inner_slide>li:first").insertAfter('.inner_slide>li:last');
            $(".inner_slide").css('margin-left', 0);
            let num = $(".inner_slide>li:first").children('img').attr('alt');
            $('.dot>li').eq(num).addClass('on').siblings('li').removeClass('on');
        });
    }, 3000);

    //포스터 이미지 가운데 오면 확대되는 효과 이미지 3장씩 좌측으로 돌아감
    setInterval(function(){
        $('.p_img').animate({'margin-left': -336}, 1000,function(){
            $('.p_img>li:first').insertAfter('.p_img>li:last');
            $('.p_img>li').eq(1).addClass('on').siblings('li').removeClass('on');
            $('.p_img').css('margin-left', 0);
        });
    }, 3000);
});