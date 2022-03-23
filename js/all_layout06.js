$(function () {
    ////////////////////////////////////

    // topBanner : Kim 2022.03.17 수정
    function topBannerHandler() {
        // $('topBanner').hide(); //display:none;
        $('.topBanner').slideUp();
    }
    $('.topBanner .container i').on('click', topBannerHandler);

    $('.visualSlide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '<div class="msLeft"></div>',
        nextArrow: '<div class="msRight"></div>'
    });

    // 슬라이드에 애니메이션 주기

    $('.visualSlide figure').eq(1).addClass('oo');
    $('.visualSlide').on('afterChange', function (e, s, c) {
        $('.visualSlide figure').eq(c + 1).addClass('oo').siblings().removeClass('oo');
        if (c === 1) {
            $('.msLeft').addClass('oo')
        } else {
            $('.msLeft').removeClass('oo')
        }
    });

    //

    $('.eProductSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $('.eventProduct i:nth-of-type(1)').on('click', function () {
        $('.eProductSlide').slick('slickPause')
    });

    $('.eventProduct i:nth-of-type(2)').on('click', function () {
        $('.eProductSlide').slick('slickPlay')
    });

    //

    $('.aproductSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });


    $('.allProduct i:first-child').on('click', function () {
        $('.aproductSlide').slick('slickPrev')
    })

    $('.allProduct i:last-child').on('click', function () {
        $('.aproductSlide').slick('slickNext')
    });




    //유투브 플레이어를 쓰는방법//

    $("#bgndVideo").YTPlayer({
        videoURL: 'https://youtu.be/4Ps6nV4wiCE',
        containment: '.movieBg',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true
    });

    $('.movieBg i:first-child').on('click', function () {
        $("#bgndVideo").YTPPause();
    });

    $('.movieBg i:last-child').on('click', function () {
        $("#bgndVideo").YTPPlay();
    });

    $('.tapMenu li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('oo').siblings().removeClass('oo');
        $('.tapContent>div').eq(idx).addClass('oo').siblings().removeClass('oo');
    });

    // link

    $('#link').on('change', function () {
        let linkSite = $(this).val();
        if (!linkSite) return;
        window.open(linkSite)
    });


    $('.popup01 button').on('click', function () {
        $(this).parent().hide();

    });

    $('.toTop').on('click', function () {
    $('html,body').animate({
        scrollTop:0
    }, 500);
    return false;
    });


//// 스크롤 업 하는 버튼 만들기

    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 500) {
            $('.toTop').fadeIn(1000);
        }else {
            $('.toTop').fadeOut(1000);
        }
    })




    ///////////////////////////////
})