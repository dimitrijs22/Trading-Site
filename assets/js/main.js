(function ($) {
    "use strict";

    //Preloader
    $(window).on('load', function (event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });
    
    //Open Search Box
    $('.searchbtn').on('click', function() {
        $('.search-area').toggleClass('open');
    });
    $('.close-searchbox').on('click', function() {
        $('.search-area').removeClass('open');
    });

    //Open Mobile Sidebar
    $('.mobile-sidebar').on('click', function() {
        $('.header-top').toggleClass('open');
    });
    $('.close-sidebar').on('click', function() {
        $('.header-top').removeClass('open');
    });

    
    //Counter
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Language Dropdown
    $(".language-option").each(function () {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function () {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

    //Tweenmax js
    // $('.hero-wrap.style3, .hero-wrap.style2 ').mousemove(function (e) {
    //     var wx = $(window).width();
    //     var wy = $(window).height();
    //     var x = e.pageX - this.offsetLeft;
    //     var y = e.pageY - this.offsetTop;
    //     var newx = x - wx / 2;
    //     var newy = y - wy / 2;
    //     $('.hero-content').each(function () {
    //         var speed = $(this).attr('data-speed');
    //         if ($(this).attr('data-revert')) speed *= -.4;
    //         TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
    //     });
    // });
    
    //Hero  Slider 
    $(".hero-slider-one").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 20,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
    });

    $(".hero-slider-two").owlCarousel({
        nav: true,
        dots: false,
        loop: false,
        margin: 20,
        items: 1,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next"></i>'],
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        touchDrag  : false,
        mouseDrag  : false
    });

    //Testimonial Slider 
    $(".testimonial-slider-one").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next"></i>'],
        margin: 25,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });
    //Testimonial Slider 
    $(".testimonial-slider-three").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-next"></i>'],
        margin: 25,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
    });

    //Service Slider
    $(".service-slider-one").owlCarousel({
        nav: false,
        dots: true,
        loop: true,
        margin: 22,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    //Project Slider 
    $(".project-slider-one").owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        margin: 25,
        items: 1,
        thumbs: false,
        smartSpeed: 1300,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    //sticky Header
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Responsive mmenu
    $(window).on('resize', function() {
        if($(window).width() <= 1199) {
            $('.collapse.navbar-collapse').removeClass('collapse');
        }else{
            $('.navbar-collapse').addClass('collapse');
        }
    });
    $('.mobile-menu a').on('click', function() {
        $('.main-menu-wrap').addClass('open');
        $('.collapse.navbar-collapse').removeClass('collapse');
    });

    $('.mobile_menu a').on('click', function () {
        $(this).parent().toggleClass('open');
        $('.main-menu-wrap').toggleClass('open');
    });

    $('.menu-close').on('click', function () {
        $('.main-menu-wrap').removeClass('open')
    });
    $('.mobile-top-bar').on('click', function () {
        $('.header-top').addClass('open')
    });
    $('.close-header-top button').on('click', function () {
        $('.header-top').removeClass('open')
    });
    var $offcanvasNav = $('.navbar-nav'),
    $offcanvasNavSubMenu = $offcanvasNav.find('.dropdown-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ri-arrow-down-s-line"></i></span>');
    $offcanvasNavSubMenu.slideUp();
    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('dropdown-menu')\b/)) {
            $this.toggleClass('menu-open');
        }
    });

    // Scroll animation
    AOS.init();

    //Back To top
    function BackToTop() {
        $('.back-to-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 600) {
                $('.back-to-top').fadeIn();
                $('.back-to-top').addClass('open');
            } else {
                $('.back-to-top').fadeOut();
                $('.back-to-top').removeClass('open');
            }
        });
    }
    BackToTop();

})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('raxa_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('raxa_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
// (function () {
//     if (localStorage.getItem('raxa_theme') === 'theme-dark') {
//         setTheme('theme-dark');
//         document.getElementById('slider').checked = false;
//     } else {
//         setTheme('theme-light');
//         document.getElementById('slider').checked = true;
//     }
// })();



function startCalc() {
	let a = document.getElementById("amount");
	let m = document.getElementById("margin");
	let p = document.getElementById("percent");
	let amount = parseFloat(a.value);
	let margin = parseFloat(m.value);
	let percent = parseFloat(p.value/100);

	let profit = amount * margin * percent;
	let fullresult = profit + amount;
	let fullresult2 = parseFloat(fullresult);
	let grossmargin = profit*100 / fullresult2;



	console.log(profit);
	console.log(fullresult);
	console.log(grossmargin);

	$("#result").text(profit.toFixed(0));

	
}


document.addEventListener('DOMContentLoaded', function() {
    var chatLink = document.querySelector('.chat');
    var overlay = document.querySelector('.chat-overlay');
    var closeButton = document.querySelector('.chat-close');
    var messageElement = document.querySelector('.chat-message');
    var form = document.getElementById('wf-form-Contact-Form');
    var formTitle = document.querySelector('.form-title');

    chatLink.addEventListener('click', function(event) {
        event.preventDefault();
        overlay.style.display = 'flex';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        formTitle.style.display = 'none'; // Hide the form title
        messageElement.innerHTML = `
        <p></p>
        `;
        form.reset();
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        formTitle.style.display = 'block'; // Show the form title
        messageElement.textContent = ''; // Clear the message
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            formTitle.style.display = 'block'; // Show the form title
            messageElement.textContent = ''; // Clear the message
        }
    });
});




function startCalc() {
	let a = document.getElementById("amount");
	// let m = document.getElementById("margin");
	let p = document.getElementById("percent");
	let amount = parseFloat(a.value);
	// let margin = parseFloat(m.value);
	let percent = parseFloat(p.value / 100);

	let profit = amount * percent;
	let fullresult = profit + amount;
	let fullresult2 = parseFloat(fullresult);
	// let grossmargin = profit*100 / fullresult2;



	console.log(profit);
	console.log(fullresult);
	// console.log(grossmargin);

	$("#result").text(profit.toFixed(2));
	$("#fullResult").text(fullresult2.toFixed(2));
	// $("#grossMargin").text(grossmargin.toFixed(2));

}
function updateOutput() {
	var termInput = document.getElementById("term");
	var termOutput = document.querySelector("output[for='term']");
	termOutput.value = termInput.value / 30 + " Months";
	console.log(termInput.value);
}

function parsePriceBTC() {
	const headers = {
		'Accept': '*/*'
	};

	fetch('https://cex.io/api/last_price/BTC/USD',
		{
			method: 'GET',

			headers: headers
		})
		.then(function (res) {
			return res.json();
		}).then(function (body) {
			body = body.lprice;
			console.log(body);
			myCalc2(body);
		});

}

function parsePriceETH() {
	const headers = {
		'Accept': '*/*'
	};

	fetch('https://cex.io/api/last_price/ETH/USD',
		{
			method: 'GET',

			headers: headers
		})
		.then(function (res) {
			return res.json();
		}).then(function (body) {
			body = body.lprice;
			console.log(body);
			myCalc2(body);
		});

}
function parsePriceUSDT() {
	const headers = {
		'Accept': '*/*'
	};

	fetch('https://cex.io/api/last_price/USDT/USD',
		{
			method: 'GET',

			headers: headers
		})
		.then(function (res) {
			return res.json();
		}).then(function (body) {
			body = body.lprice;
			console.log(body);
			myCalc2(body);
		});

}


function startCalc() {
	let q = document.getElementById("token");
	let coin = q.value;
	if (coin == 'btc') {
		// responseFinal = responseBTC;
		$("#min-max").text('(Minimum 2 BTC - Max 10 BTC)');
		parsePriceBTC();
	} else if (coin == 'eth') {
		// responseFinal = responseETH;
		$("#min-max").text('(Minimum 5 ETH - Max 100 ETH)');
		parsePriceETH();
	} else if (coin == 'usdt') {
		// responseFinal = responseUSDT;
		$("#min-max").text('(Minimum 5,000 USDT - Max 250,000 USDT)');
		parsePriceUSDT();

	}
}

function inputFocus() {
	document.getElementById('p').focus();
}



function myCalc2(price) {
	console.log(price)
	let q = document.getElementById("token");
	let s = document.getElementById("term");
	// let m = document.getElementById("margin");
	let coin = q.value;
	let term = s.value;
	// let margin = m.value;

	console.log(term)

	let nI = document.querySelector('.numberRadio');
	let sI = document.querySelector('.sliderRadio');

	if (nI.checked) {
		var p = $("#p").val();
		var v = parseFloat(term),
			t = 1;

		

		if (v == 30) {
			f = 4;
		} else if (v >= 31 && v <= 120) {
			f = 5;
		} else if (v >= 121 && v <= 240) {
			f = 6;
		}
		else if (v >= 241 && v <= 360) {
			f = 8;
		} else if (v >= 361 && v <= 720) {
			f = 10;
		}
		var n = f * 12 / 100;

		// var f = n * v * 100 / 365;


		var a = (p * Math.pow(1 + n / 365, (365 * v) / 365)) ;
		var u = ((p * Math.pow(1 + n / 365, (365 * v) / 365) - p)) ;
		var uMonth = ((p * Math.pow(1 + n / 365, (365 * 30) / 365) - p));
		var uYear = ((p * Math.pow(1 + n / 365, (365 * 365) / 365) - p));

		a = parseFloat(a).toFixed(5);
		ausd = parseFloat(a).toFixed(3);

		u = parseFloat(u).toFixed(5);
		uMonth = parseFloat(uMonth).toFixed(5);
		uYear = parseFloat(uYear).toFixed(5);
		f = parseFloat(f).toFixed(2);


		var usdValue = u ;
		var usdValueMonth = uMonth;
		var usdValueYear = uYear * price;
		var usdValueCrop = usdValue;
		var usdValueCropMonth = usdValueMonth;
		var usdValueCropYear = usdValueYear.toFixed(3);
	} else {
		var p = $("#r").val();
		v = parseFloat(term);
		t = 1;

		// n = 0.3;


		if (v == 30) {
			f = 4;
		} else if (v >= 31 && v <= 120) {
			f = 5;
		} else if (v >= 121 && v <= 240) {
			f = 6;
		}
		else if (v >= 241 && v <= 360) {
			f = 8;
		} else if (v >= 361 && v <= 720) {
			f = 10;
		}
		var n = f * 12 / 100;

		// f = n * v * 100 / 365;


		var a = p * Math.pow(1 + n / 365, (365 * v) / 365);
		var u = (p * Math.pow(1 + n / 365, (365 * v) / 365) - p);
		var uMonth = u*30/v;
		// var uMonth = (p * Math.pow(1 + n / 365, (365 * 30) / 365) - p);
		var uYear = (p * Math.pow(1 + n / 365, (365 * 365) / 365) - p);

		a = parseFloat(a).toFixed(5);
		ausd = parseFloat(a).toFixed(3)*price;
		u = parseFloat(u).toFixed(5);
		uMonth = parseFloat(uMonth).toFixed(5);
		uYear = parseFloat(uYear).toFixed(5);
		f = parseFloat(f).toFixed(2);


		var usdValue = u * price;
		var usdValueMonth = uMonth * price;
		var usdValueYear = uYear * price;
		var usdValueCrop = usdValue.toFixed(3);
		var usdValueCropMonth = usdValueMonth.toFixed(3);
		var usdValueCropYear = usdValueYear.toFixed(3);
	}


	$(".bal-result-card").addClass("bal-active");
	$("#result").text(a);
	$("#result-usd").text(ausd);
	$("#result-rate").text(f);
	$("#result-value").text(u);
	$("#result-valueMonth").text(uMonth);
	$("#result-valueYear").text(uYear);
	$("#result-valueUSD").text(usdValueCrop);
	$("#result-valueMonthUSD").text(usdValueCropMonth);
	$("#result-valueYearUSD").text(usdValueCropYear);


	$("#coin-value").text(coin);
	$("#coin-valueMonth").text(coin);
	$("#coin-valueYear").text(coin);

}