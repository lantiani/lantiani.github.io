

// A ---------------------------------------------------------------------------------------------------------------------------------

// window.onresize = function () {
    // window.onload = function () {

    if (window.innerWidth > 500) {
            console.log(111);
            ScrollReveal().reveal('.rc-img1', {
                duration: 1000,
                distance: '500%',
                origin: 'right',
                opacity: .5
            });


            ScrollReveal().reveal('.rc-img2', {
                duration: 2000,
                distance: '450%',
                origin: 'right',
                opacity: .5
            });


            ScrollReveal().reveal('.rc-img3', {
                duration: 2500,
                distance: '500%',
                origin: 'right',
                opacity: .5
            });


            ScrollReveal().reveal('.rc-img4', {
                duration: 3000,
                distance: '450%',
                origin: 'right',
                opacity: .5
            });


            ScrollReveal().reveal('.p1', {
                duration: 1500,
                distance: '450%',
                origin: 'left',
                opacity: .5
            });

            ScrollReveal().reveal('.p2', {
                duration: 2000,
                distance: '350%',
                origin: 'left',
                opacity: .5
            });

            ScrollReveal().reveal('.p3', {
                duration: 2500,
                distance: '450%',
                origin: 'left',
                opacity: .5
            });

            ScrollReveal().reveal('.p4', {
                duration: 3000,
                distance: '350%',
                origin: 'left',
                opacity: .5
            });

        ScrollReveal().reveal($('.lp-picture'), {
            // duration: 1000,
            distance: '150%',
            origin: 'right',
        });
        // ScrollReveal().reveal($('.lp-photo:eq(0)'), {
        //     duration: 400,
        //     distance: '400%',
        //     origin: 'right',
        // });
        // ScrollReveal().reveal($('.lp-photo:eq(1)'), {
        //     duration: 1000,
        //     distance: '400%',
        //     origin: 'right',
        // });
        // ScrollReveal().reveal($('.lp-photo:eq(2)'), {
        //     duration: 1400,
        //     distance: '400%',
        //     origin: 'right',
        // });
        // ScrollReveal().reveal($('.lp-photo:eq(3)'), {
        //     duration: 2000,
        //     distance: '400%',
        //     origin: 'right',
        // });
        function lpScroll(num,uDuration) {
            ScrollReveal().reveal($('.lp-photo:eq('+ num +')'), {
                duration: uDuration,
                distance: '400%',
                origin: 'right',
            });
        }
        lpScroll(0,400)
        lpScroll(1,1000)
        lpScroll(2,1400)
        lpScroll(3,2000)

        function scroll(num, animate) {
            ScrollReveal().reveal($('.hj-content:eq(' + num + ')'), {
                duration: 2500,
                distance: '450%',
                origin: animate,
            });
        };
        scroll(0, 'right');
        scroll(1, 'bottom');
        scroll(2, 'bottom');
        scroll(3, 'left');
        scroll(4, 'right');
        scroll(5, 'top');
        scroll(6, 'top');
        scroll(7, 'left');

        //     ScrollReveal().reveal($('.hj-content:eq(0)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'right',
        //     });
        //     ScrollReveal().reveal($('.hj-content:eq(1)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'bottom',
        //     });
        //     ScrollReveal().reveal($('.hj-content:eq(2)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'bottom',
        //     });
        //     ScrollReveal().reveal($('.hj-content:eq(3)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'left',
        //     });
        //     ScrollReveal().reveal($('.hj-content:eq(4)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'right',
        //     });
        //     ScrollReveal().reveal($('.hj-content:eq(5)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'top',
        //     });
        //     ScrollReveal().reveal($('.hj-content:eq(6)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'top',
        //     });
        //     ScrollReveal().reveal($('.hj-content:eq(7)'), {
        //         duration: 2500,
        //         distance: '450%',
        //         origin: 'left',
        //     });
    }
// }
    // }


// B ---------------------------------------------------------------------------------------------------------------------------------



// C ---------------------------------------------------------------------------------------------------------------------------------


// ScrollReveal().reveal($('.hj-content:eq(0)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'right',
// });
// ScrollReveal().reveal($('.hj-content:eq(1)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'bottom',
// });
// ScrollReveal().reveal($('.hj-content:eq(2)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'bottom',
// });
// ScrollReveal().reveal($('.hj-content:eq(3)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'left',
// });
// ScrollReveal().reveal($('.hj-content:eq(4)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'right',
// });
// ScrollReveal().reveal($('.hj-content:eq(5)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'top',
// });
// ScrollReveal().reveal($('.hj-content:eq(6)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'top',
// });
// ScrollReveal().reveal($('.hj-content:eq(7)'), {
//     duration: 2500,
//     distance: '450%',
//     origin: 'left',
// });


let imgs = [
    './images/classroom1.jpg',
    './images/classroom2.jpg',
    './images/classroom3.jpg',
    './images/classroom4.jpg',
    './images/classroom5.jpg',
    './images/classroom6.jpg',
    './images/classroom7.png',
    './images/coffee.png',
]
let index;
$('.hj-content').mouseover(function () {
    index = $(this).index();
    $($('.hj-cover')[index]).addClass('hj-flex');
})
$('.hj-content').mouseout(function () {
    index = $(this).index();
    $($('.hj-cover')[index]).removeClass('hj-flex');
})


$('.hj-cover').click(function () {
    $('.yl-menuBox').hide();
    let indexs = index;
    $('.hj-screen').css('display', 'block');
    let imgWrap = $('<div class="img-wrap"></div>');
    $('.hj-contents').append(imgWrap);
    let img = $('<img src="" alt="">');
    img.attr('src', imgs[indexs]);
    if (window.innerWidth > 500) {
        img.css('height', '90%');
        img.innerWidth('height');
    }
    img.css('width', '100%')
    imgWrap.append(img);
    $('.number').html(indexs + 1);
    if (window.innerWidth > 500) {
        $('.hj-screen').addClass('animate__animated animate__fadeInDownBig');
        $('.hj-bgcover').addClass('animate__animated animate__fadeIn');
        setTimeout(function () {
            $('.hj-screen').removeClass('animate__animated animate__fadeInDownBig');
            $('.hj-bgcover').removeClass('animate__animated animate__fadeIn');
        }, 1000)
    }
    $('.icon_left').click(function () {
        indexs--;
        if (indexs == 0) {
            img.attr('src', imgs[0]);
            indexs = imgs.length;
        } else {
            img.attr('src', imgs[indexs]);
        }
    })


    $('.icon_right').click(function () {
        indexs++;
        if (indexs == imgs.length) {
            img.attr('src', imgs[0]);
            indexs = 1;
        } else {
            img.attr('src', imgs[indexs]);
        }
    })


})
$('.hj-bgcover').click(function () {
    $('.yl-menuBox').show();
    $('.hj-screen').addClass('animate__animated animate__fadeOutDown');
    setTimeout(function () {
        $('.hj-screen').removeClass('animate__animated animate__fadeOutDown').css('display', 'none');
    }, 1000)
    $('.img-wrap').remove();


})


$('.icon_close').click(function () {
    $('.yl-menuBox').show();
    $('.hj-screen').addClass('animate__animated animate__fadeOutDown');
    setTimeout(function () {
        $('.hj-screen').removeClass('animate__animated animate__fadeOutDown').css('display', 'none');
    }, 1000)
    $('.img-wrap').remove();
})


$('.hj-btn').mouseover(function () {
    $(this).css({ 'background': 'rgba(0,0,0,0.4)', 'border-radius': '50%' })
})


$('.hj-btn').mouseout(function () {
    $(this).css({ 'background': '', 'border-radius': '' })
})


let icon_amplify = document.querySelector('.icon_amplify');
icon_amplify.onclick = function (event) {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        document.documentElement.requestFullscreen()
    }
};

// D ---------------------------------------------------------------------------------------------------------------------------------


// ScrollReveal().reveal('.head', {
//     delay: 0,
//     duration: 1000,
//     distance: '700%',
//     origin: 'bottom',
//     opacity: null
// });
// ScrollReveal().reveal('.director', {
//     delay: 400,
//     duration: 1000,
//     distance: '400%',
//     origin: 'right',
//     opacity: null
// });
// ScrollReveal().reveal('.docent', {
//     delay: 800,
//     duration: 1000,
//     distance: '400%',
//     origin: 'right',
//     opacity: null
// });
// ScrollReveal().reveal('.cadet', {
//     delay: 1200,
//     duration: 1000,
//     distance: '400%',
//     origin: 'right',
//     opacity: null
// });
// ScrollReveal().reveal('.office', {
//     delay: 1600,
//     duration: 1000,
//     distance: '400%',
//     origin: 'right',
//     opacity: null
// });


// E ---------------------------------------------------------------------------------------------------------------------------------


function rotateBox(a, b, c, d, e) {
    $(a).click(function () {
        if ($(b).attr("id") == undefined || $(b).attr("id") === "") {
            $(b).attr("id", d);
        } else if ($(b).attr("id") === d) {
            $(b).attr("id", "");
        };
        if ($(c).attr("id") == undefined || $(c).attr("id") === d) {
            $(c).attr("id", e);
        } else if ($(c).attr("id") === e) {
            $(c).attr("id", d);
        };
    });
};
rotateBox('.lc-box', '.lc-box1', '.lc-box2', 'lc-box1', 'lc-box2');
rotateBox('.box3', '.box4', '.box5', 'box3', 'box4');
rotateBox('.three', '.t1', '.t2', 't1', 't2');
rotateBox('.four', '.f1', '.f2', 'f1', 'f2');
rotateBox('.five', '.v1', '.v2', 'v1', 'v2');
rotateBox('.six', '.s1', '.s2', 's1', 's2');
rotateBox('.seven', '.e1', '.e2', 'e1', 'e2');
rotateBox('.eight', '.lp-h1', '.lp-h2', 'lp-h1', 'lp-h2');

let index_s;
$('.lp-covers').mouseover(function () {
    index_s = $(this).index();
    $('.lp-cover').eq(index_s).css('display', 'flex').siblings().css('display', '');
    $('.lp-cover').eq(index_s).css('opacity', '1').siblings().css('opacity', '1');
});
$('.lp-covers').mouseout(function () {
    $($('.lp-cover')[index_s]).css('display', '');
})
$('.lp-covers').click(function () {
    $($('.lp-cover')[index_s]).css('opacity', '0');
});

ScrollReveal().reveal($('.lp-covers:odd'), {
    duration: 2500,
    distance: '450%',
    origin: 'left',
});
ScrollReveal().reveal($('.lp-covers:even'), {
    duration: 2500,
    distance: '450%',
    origin: 'right',
});




// F ---------------------------------------------------------------------------------------------------------------------------------


$(function () {
    $('.zy-input').each(function (index, ele) {
        $('.zy-input')[index].onfocus = function () {
            $(this).css('border', '2px solid #337ab7')
            $(this).css('boxShadow', '0px 1px 0px #337ab7');
        }
        $('.zy-input')[index].onblur = function () {
            $(this).css('border', '')
            $(this).css('boxShadow', '');
        }
    })
    $('.zy-frame').each(function (index, ele) {
        $('.zy-frame')[index].onfocus = function () {
            $(this).css('border', '2px solid #337ab7')
            $(this).css('boxShadow', '0px 1px 0px #337ab7');
        }
        $('.zy-frame')[index].onblur = function () {
            $(this).css('border', '')
            $(this).css('boxShadow', '');
        }
    })
})


// G ---------------------------------------------------------------------------------------------------------------------------------


