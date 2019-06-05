document.addEventListener("DOMContentLoaded", sidenVises);

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
        if ($(this).scrollTop() > 300) {
            $(`body`).addClass(`changeColorBlue`)
        }
        if ($(this).scrollTop() < 300) {
            $(`body`).removeClass(`changeColorBlue`)
        }
        if ($(this).scrollTop() > 600) {
            $(`body`).addClass(`changeColorDarkBlue`)
        }
        if ($(this).scrollTop() < 600) {
            $(`body`).removeClass(`changeColorDarkBlue`)
        }
        if ($(this).scrollTop() > 1000) {
            $(`body`).addClass(`changeColorBlack`)
        }
        if ($(this).scrollTop() < 1000) {
            $(`body`).removeClass(`changeColorBlack`)
        }

        if ($(this).scrollTop() > 600) {
            $(`nav-links`).addClass(`changeFontColor`)
        }
        if ($(this).scrollTop() < 600) {
            $(`nav-links`).removeClass(`changeFontColor`)
        }

    });


});
