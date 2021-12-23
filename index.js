// 获取当前设备的可视宽度除以15分，把每份作为根元素html的字体大小
function setHtmlFS() {
    let copies = 15;
    let htmlClientWidth = document.documentElement.clientWidth;
    htmlClientWidth = htmlClientWidth > 750 ? 750 : htmlClientWidth;
    document.documentElement.style.fontSize = htmlClientWidth / copies + 'px';

    if (window.innerWidth <= 750) {
        $('header').css({
            'position': 'sticky',
            'top': '0',
            'z-index': '999999'
        })
        $('nav').css({
            'position': 'fixed',
            'top': $('header')[0].offsetHeight,
            'z-index': '999999'
        })
        $('.yl_nav').css('display', 'block');
        $('.yl_nav li').eq(0).css('background', '')
        $('.yl_nav li').css({
            'display': 'none',
            'padding': '0.18rem 0',
            'text-align': 'left'
        }).click(function () {
            $(this).css('background', '').siblings().css('background', '');
            $('.yl_nav li').stop().slideUp();
            flag = 0;
        })
        // $('.swiperBox').css('top', '1.6rem')
        $('#inputBtn').hide();
        let flag = 0;
        $('.yl_more').show().click(function () {
            if (flag == 0) {
                $('.yl_nav li').stop().slideDown();
                flag = 1;
            } else {
                $('.yl_nav li').stop().slideUp();
                flag = 0;
            }
        });

        $('.main').css({
            'padding': '0.2rem 0.2rem 0',
            'height': '3rem'
        })
        $('.main div').eq(1).css({
            'margin': '0.2rem 0',
        })

        $('.circle').click(function () {
            $('#inputBtn').click();
        })

        // $('.yl_login').css({
        //     'width':'80vw',
        //     'height':'50vh'
        // })


    } else {
        $('header').css({
            'position': 'relative',
            'top': '0',
            'z-index': '0',
        })

        $('nav').css({
            'position': 'sticky',
            'top': 0,
            'z-index': '99',
        })

        $('.yl_nav').css('display', 'flex');
        $('.yl_nav li').css({
            'display': 'block',
            'padding': '0 0',
            'text-align': 'center'
        }).click(function () {
            $(this).css('background', '#333').siblings().css('background', '');
            $('.yl_nav li').stop().slideDown();
        })
        // $('.swiperBox').css('top', '2.6rem');
        $('.yl_more').hide();
        $('#inputBtn').show();
        $('.circle').unbind('click');
    }


    // if (window.innerWidth <= 320) {
    //     $('.main').css({
    //         'padding': '0',
    //         'height': '2.8rem'
    //     })
    //     $('.main div').eq(1).css({
    //         'margin': '0',
    //     })
    // }

}

// console.log( );


window.onload = function () {
    setHtmlFS();
}

window.onresize = function () {
    setHtmlFS();
}


$('#inputBtn').click(function () {
    if ($(this).val() === '请登录') {
        $('.yl_entry').stop().fadeIn();
        $('.yl_cover').stop().fadeIn();
    } else if ($('#inputBtn').val() === '退出登录') {
        $('.yl_alert').stop().fadeIn();
        $('#confirm').click(function () {
            $('.circle img').attr('src', './images/1.jpeg');
            $('#inputBtn').val('已退出');
            setTimeout(() => {
                $('#inputBtn').val('请登录');
            }, 1000);
            $('.yl_alert').stop().fadeOut();
        })

        $('#cancel').click(function () {
            $('.yl_alert').stop().fadeOut();
        })

    }
})

$('.close').click(function () {
    $('.yl_entry').stop().fadeOut();
    $('.yl_enroll').stop().fadeOut();
    $('.yl_cover').stop().fadeOut();
    setTimeout(() => {
        $('.validation .proving').text(validation());
    }, 1000)
})

$('.return').click(function () {
    $('.yl_enroll').stop().fadeOut();
    $('.yl_entry').stop().fadeIn();
    setTimeout(() => {
        $('.validation .proving').text(validation());
    }, 1000);

})

$('#enrollBtn').click(function () {
    $('.yl_enroll').stop().fadeIn();
    $('.yl_entry').stop().fadeOut();
    $('.validation .proving').text(validation());
})


function password(ele, close, open, id) {
    let passwordNum = 0;
    $(`.${ele}`).click(function () {
        if (passwordNum == 0) {
            $(`.${close}`).hide();
            $(`.${open}`).show();
            $(`#${id}`).attr('type', 'text');
            passwordNum = 1;
        } else {
            $(`.${close}`).show();
            $(`.${open}`).hide();
            $(`#${id}`).attr('type', 'password');
            passwordNum = 0;
        }
    })
}

password('eyes', 'eyesClose', 'eyesOpen', 'userPassword');
password('eyes1', 'eyesClose1', 'eyesOpen1', 'enrollPassword');
password('eyes2', 'eyesClose2', 'eyesOpen2', 'againPassword');

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

function validation() {
    let provingStr = '1234567890abcdefghijklmnopqrstuvwxyz';
    let validationStr = '';
    for (let i = 0; i < 4; i++) {
        validationStr += provingStr[random(0, provingStr.length - 1)];
    }
    return validationStr;
}

$('.validation .proving').text(validation()).click(function () {
    $('.validation .proving').text(validation());
});

let spiritArr = [
    '只会幻想而不行动的人，永远也体会不到收获果实时的喜悦。',
    '目标的坚定是性格中最必要的力量源泉之一，也是成功的利器之一。没有它，天才会在矛盾无定的迷径中徒劳无功。',
    '青春就像一只容器，装满了不安躁动青涩与偶尔的疯狂。',
    '不去期望，失去了不会伤心，得到了便是惊喜。',
    '咱们什么都没有，唯一的本钱就是青春。梦想让我与众不一样，奋斗让我改变命运!',
    '障碍与失败，是通往成功最稳靠的踏脚石，肯研究利用它们，便能从失败中培养出成功。',
    '成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。',
    '所谓的人间烟火，就是这样—个可以时而温暖时而冷漠的词语，所谓的人间，就是这样时而光明时而黑暗的时刻。',
    '越是无能的人，越喜欢挑剔别人的错儿。',
    '知人者智，自知者明。胜人者有力，自胜者强。',
]


$('.spirit').click(function () {
    $('.main div').hide();
    $('.check').show();
    $('.spirit').html('换一换<i class="iconfont icon-weibiaoti-- loaded" style="font-size:0.44rem"></i>');
    $('.main span').show().css('display', 'block').text(spiritArr[random(0, spiritArr.length - 1)]);
})

$('.check').click(function () {
    $('.main div').show();
    $(this).hide();
    $('.main span').hide();
    $('.spirit').text('每日一碗毒鸡汤');

})


let userName = 'account',
    userPassword = '123456';
$('#userName').val(userName);

let timer;
$('#entryBtn').click(function () {
    if ($('#userName').val() === userName && $('#userPassword').val() === userPassword) {
        $('#inputBtn').val('欢迎回来');
        setTimeout(() => {
            $('#inputBtn').val('退出登录');
            $('#userPassword').val('');
        }, 2000);
        $('.close').click();
        // $('.circle img').attr('src', './images/1.jpeg');

    } else {
        $('.main span').hide();
        $('.main div').hide();
        $('.check').hide();
        $('.main p').show().css({
            'display': 'block',
            'text-align': 'center',
            'color': 'red',
            'line-height': '6'
        }).text('输入有误，请重新输入');
        clearTimeout(timer);
        timer = setTimeout(() => {
            $('.main p').hide().text('');
            $('.spirit').show().text('每日一碗毒鸡汤');
            $('.main div').show();
        }, 1000);
    }
})



var swiper = new Swiper(".mySwiper", {
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});