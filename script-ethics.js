window.addEventListener("load", sidenVises);

function sidenVises() {


    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {

        mainNav.classList.toggle('active');


    });

    window.addEventListener('scroll', function (e) {
        const lastPosition = window.scrollY
        if (lastPosition > 300) {
            document.querySelector("nav.navbar").classList.add('nav-colored')
        } else if (document.querySelector("nav.navbar").classList.contains('nav-colored')) {
            document.querySelector("nav.navbar").classList.remove('nav-colored')
        } else {
            document.querySelector("nav.navbar").classList.remove('nav-colored')
        }
    })

}

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $(`body`).addClass(`changeColorBlue`)
        }
        if ($(this).scrollTop() < 1000) {
            $(`body`).removeClass(`changeColorBlue`)
        }

        if ($(this).scrollTop() > 2200) {
            $(`body`).addClass(`changeColorBrown`)
        }
        if ($(this).scrollTop() < 2200) {
            $(`body`).removeClass(`changeColorBrown`)
        }


    });
});

$(function(){
    var mobile;
    if (window.width <= 479) {
        //don't load these scripts
    }
    else {
        //load all scripts
    }
});
