$(function() {
    // header icon1
    $('.icon1').mouseover(function() {
        $(this).siblings('.iconleft').stop().show();
    });
    $('.icon1').mouseout(function() {
        $(this).siblings('.iconleft').stop().hide();
    });

    // header icon2
    $('.icon2').mouseover(function() {
        $(this).siblings('.iconright').stop().show();
    });
    $('.icon2').mouseout(function() {
        $(this).siblings('.iconright').stop().hide();
    });


    // nav
    $('.nav-main-menu li').mouseover(function() {
        $('.nav-sub-menu').stop().fadeIn(300);
        $('.list-box').stop().fadeIn(300);
        $('.nav-main-menu > li').parent().children().css({marginTop : '-15px', transition : '0.5s'});
        $('.nav-line-menu').stop().fadeIn(300);
    });
    $('.nav-main-menu li').mouseout(function() {
        $('.nav-sub-menu').stop().fadeOut(300);
        $('.list-box').stop().fadeOut(300);
        $('.nav-main-menu > li').parent().children().css({marginTop : '0px', transition : '0.5s'});
        $('.nav-line-menu').stop().fadeOut(300);
    });

    // main slide
    var ss = 0;
    function slider() {
        if(ss<7) {
            ss++;
        }
        else{
            ss = 0;
        }
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.subslider li').find('img').removeClass('active');
        $('.subslider li').eq(ss).find('img').addClass('active');
        $('.current-number').html("0" + (ss + 1));
    }
    setInterval(slider,10000);

   

    $('.s1').click(function(){
        ss=0;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.s2').click(function(){
        ss=1;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.s3').click(function(){
        ss=2;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.s4').click(function(){
        ss=3;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.s5').click(function(){
        ss=4;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.s6').click(function(){
        ss=5;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.s7').click(function(){
        ss=6;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.s8').click(function(){
        ss=7;
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.current-number').html("0" + (ss + 1));
    })
    $('.subslider li').click(function(){
        $('.subslider li').find('img').removeClass('active');
        $(this).find('img').addClass('active');
    })

    $('.main-left-arrow').click(function() {
        if (ss > 0) {
            ss--;
        }
        else {
            ss=7;
        }
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.subslider li').find('img').removeClass('active');
        $('.subslider li').eq(ss).find('img').addClass('active');
        $('.current-number').html("0" + (ss + 1));
    })
    $('.main-right-arrow').click(function() {
        if(ss < 7) {
            ss++;
        }
        else {
            ss=0;
        }
        $('.slider > ul > li').fadeOut();
        $('.slider > ul > li').eq(ss).fadeIn();
        $('.subslider li').find('img').removeClass('active');
        $('.subslider li').eq(ss).find('img').addClass('active');
        $('.current-number').html("0" + (ss + 1));
    })

    // main event list box 
    $('.list-close-btn').click(function() {
        $('.main-banner-list').fadeOut(500);
    })
    $('.list-btn').click(function() {
        $('.main-banner-list').fadeIn(500);
    })

    // left toggle menu
    $('.popup-close').click(function(){
        $('.popup-menu-bg').hide()
        $('.popup-menu').css("left","-440px")
        $('body').css("overflow","auto")
    })


    $('.left').click(function(){
        $('.popup-menu-bg').show()
        $('.popup-menu').css("left","0px")
        $('body').css("overflow","hidden")
    })


    

    // left2 toggle menu
    $('.left2').click(function(){
        $('.popup2-menu').css("left","0");
        $('body').css("overflow","hidden")
    })
    $('.pop2-close i').click(function(){
        $('.popup2-menu').css("left","-100vw")
        $('body').css("overflow","auto")
    })

    

    $('.pop2-main-list > ul > li').click(function(){
        $(this).find('.pop2-sub').stop().slideToggle(400);
        $(this).toggleClass('pop2-main-on');
        $(this).find('svg').toggleClass('active');
        $(this).siblings().find('.pop2-sub').slideUp(400);
        $(this).siblings().find('svg').removeClass('active');
        $(this).siblings().removeClass('pop2-main-on');
    });

    $('.pop2-1').click(function(){
        $('.pop2-main-1').show()
        $('.pop2-main-2').hide()
        $('.pop2-main-3').hide()
        $('.pop2-main-4').hide()
        $('.pop2-main-5').hide()
    })
    $('.pop2-2').click(function(){
        $('.pop2-main-2').show()
        $('.pop2-main-1').hide()
        $('.pop2-main-3').hide()
        $('.pop2-main-4').hide()
        $('.pop2-main-5').hide()
    })
    $('.pop2-3').click(function(){
        $('.pop2-main-3').show()
        $('.pop2-main-1').hide()
        $('.pop2-main-2').hide()
        $('.pop2-main-4').hide()
        $('.pop2-main-5').hide()
    })
    $('.pop2-4').click(function(){
        $('.pop2-main-4').show()
        $('.pop2-main-1').hide()
        $('.pop2-main-2').hide()
        $('.pop2-main-3').hide()
        $('.pop2-main-5').hide()
    })
    $('.pop2-5').click(function(){
        $('.pop2-main-5').show()
        $('.pop2-main-1').hide()
        $('.pop2-main-2').hide()
        $('.pop2-main-3').hide()
        $('.pop2-main-4').hide()
    })
    

    $('.pop2-list-text a').click(function(){
        $('.pop2-list-text a').removeClass('pop2-on')
        $(this).addClass('pop2-on')
    })

    // event slide
    var s = 0;

    function fade() {
        if(s<2){
            s++;
        }
        else{
            s=0;
        }
        console.log(s);
        $('.eventslide>ul>li').fadeOut(1000);
        $('.eventslide>ul>li').eq(s).fadeIn(1000);
        $('.eventactive ul li').removeClass('active');
        $('.eventactive ul li').eq(s).addClass('active');
 
    }
    setInterval(fade,5000);

    $('.a1').click(function(){
        s=0;
        $('.eventslide>ul>li').fadeOut(1000);
        $('.eventslide>ul>li').eq(s).fadeIn(1000);
    })
    $('.a2').click(function(){
        s=1;
        $('.eventslide>ul>li').fadeOut(1000);
        $('.eventslide>ul>li').eq(s).fadeIn(1000);
    })
    $('.a3').click(function(){
        s=2;
        $('.eventslide>ul>li').fadeOut(1000);
        $('.eventslide>ul>li').eq(s).fadeIn(1000);
    })
    $('.eventactive ul li').click(function(){
        $('.eventactive ul li').removeClass('active');
        $(this).addClass('active');
    })

    // footer family site
    $('.familytitle').click(function(){
        $('.familysite').slideToggle();
    })

    $('.videoimg').mouseover(function() {
        $(this).find('.play-btn').stop().fadeIn(300);
        $(this).find('.notice-img').css({filter : 'opacity(0.8) drop-shadow(0 0 0 #000)', transition : '0.5s', transform : 'scale(1.1)'});
        $(this).find('.videoTopImg').css({filter :'opacity(0.8) drop-shadow(0 0 0 #000)', transition : '0.5s'});
    });
    $('.videoimg').mouseout(function() {
        $(this).find('.play-btn').stop().fadeOut(300);
        $(this).find('.notice-img').css({filter : 'none', transition : '0.5s', transform : 'scale(1)'});
        $(this).find('.videoTopImg').css({filter : 'none', transition : '0.5s'});
    });


    $(window).resize(function(){

        var width = window.innerWidth;
        
        if(width < 800) {
            $('.main-logo').attr('src', 'img/logo.png').css({'height' : '57px', 'position' : 'relative', 'top' : '5px'});
            $('.left').hide();
            $('.left2').show();
            $('nav').hide();
        }
        else if (width < 1000 && width > 799) {
            $('.infoText > h1').html('메이플스토리 게임정보');
            $('nav').hide();
        }
        else if (width < 1200) {
            $('.media-sns').show();
            $('nav').show();
        }
        else {
            $('.main-logo').attr('src', 'img/nexon-logo.gif').css({'height' : '62px', 'position' : 'relative', 'top' : '0px'});
            $('.left').show();
            $('.left2').hide();
            $('.infoText > h1').html('메이플스토리<br>게임정보');
            $('.media-sns').hide();
            $('nav').show();
        }
        
    }).resize();

})

let plusBtn = document.querySelectorAll('img.plusBtn');

for (let i=0; i<plusBtn.length; i++) {
    plusBtn[i].addEventListener('mouseover', function() {
        plusBtn[i].src = 'img/notice-btn-on.png';
    })
    plusBtn[i].addEventListener('mouseout', function() {
        plusBtn[i].src = 'img/notice-btn-off.png';
    })
}

const gameinformation = document.querySelector(".gameinformation")
    gameinformation.addEventListener('mouseover', (event)=>{
        gameinformation.src="img/gameinformation-on.png"
    });
    gameinformation.addEventListener('mouseout', (event)=>{
        gameinformation.src="img/gameinformation-off.png"
    });


    const bug = document.querySelector(".bug")
    bug.addEventListener('mouseover', (event)=>{
        bug.src="img/maple-bug.on.png"
    });
    bug.addEventListener('mouseout', (event)=>{
        bug.src="img/maple-bug.off.png"
    });


    const testworld = document.querySelector(".testworld")
    testworld.addEventListener('mouseover', (event)=>{
        testworld.src="img/maple-testworld-on.png"
    });
    testworld.addEventListener('mouseout', (event)=>{
        testworld.src="img/maple-testworld-off.png"
    });


    const pdia = document.querySelector(".pdia")
    pdia.addEventListener('mouseover', (event)=>{
        pdia.src="img/maple-pdia.on.png"
    });
    pdia.addEventListener('mouseout', (event)=>{
        pdia.src="img/maple-pdia-off.png"
    });


    const youtube = document.querySelector(".youtube")
    youtube.addEventListener('mouseover', (event)=>{
        youtube.src="img/youtube-black.png"
    });
    youtube.addEventListener('mouseout', (event)=>{
        youtube.src="img/youtube-white.png"
    });


    const twitter = document.querySelector(".twitter")
    twitter.addEventListener('mouseover', (event)=>{
        twitter.src="img/twitter.black.png"
    });
    twitter.addEventListener('mouseout', (event)=>{
        twitter.src="img/twitter.white.png"
    });



    const facebook = document.querySelector(".facebook")
    facebook.addEventListener('mouseover', (event)=>{
        facebook.src="img/facebook-on.png"
    });
    facebook.addEventListener('mouseout', (event)=>{
        facebook.src="img/facebook-off.png"
    });

    const hbtn2 = document.querySelector(".hbtn2")
    hbtn2.addEventListener('mouseover', (event)=>{
        hbtn2.src="img/maplehanz-btn2-on.png"
    });
    hbtn2.addEventListener('mouseout', (event)=>{
        hbtn2.src="img/maplehanz-btn2-off.png"
    });


    const hbtn1 = document.querySelector(".hbtn1")
    hbtn1.addEventListener('mouseover', (event)=>{
        hbtn1.src="img/maplehanz-btn1-on.png"
    });
    hbtn1.addEventListener('mouseout', (event)=>{
        hbtn1.src="img/maplehanz-btn1-off.png"
    });


    const store = document.querySelector(".store")
    store.addEventListener('mouseover', (event)=>{
        store.src="img/maple-store-on.png"
    });
    store.addEventListener('mouseout', (event)=>{
        store.src="img/maple-store.png"
    });

    let subSliderList = document.querySelectorAll('.subslider li');

    // swiper slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    // top move
    const topB = document.querySelector('.top-move');

    topB.addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: "smooth" });
    })