$(window).on('load', function () {
    $('.loader').fadeOut(1000, function () {
        // $(this).remove();
    });      
});


// login and register
$(".login .text-reset").click(function(){
    $(".login").attr("style", "display: none !important");
    $(".sign-up").fadeIn(1500);
    
})
$(".sign-up .text-reset").click(function(){
    $(".sign-up").attr("style", "display: none !important");
    $(".login").fadeIn(1500);
})

// edit user account
$(".account_setting .addtion-data .account_setting_toggle").click(function(){
    $(".account_setting .addtion-data").attr("style", "display: none !important");
    $(".account_setting .basic-data").fadeIn(1000);
    
})
$(".account_setting .basic-data .account_setting_toggle").click(function(){
    $(".account_setting .basic-data").attr("style", "display: none !important");
    $(".account_setting .addtion-data").fadeIn(1000);
})

//  like toggle
$(".liketoggle").click(function() {
    $(this).toggleClass("like-done");
  });

/******************************************
    PRICE FILTER
******************************************/

$('.slider-range-price').each(function() {
	var min = $(this).data('min');
	var max = $(this).data('max');
	var unit = $(this).data('unit');
	var value_min = $(this).data('value-min');
	var value_max = $(this).data('value-max');
	var label_reasult = $(this).data('label-reasult');
	var t = $(this);
	$(this).slider({
		range: true,
		min: min,
		max: max,
		values: [value_min, value_max],
		slide: function(event, ui) {
			var result = label_reasult + " - " +  ui.values[0] + unit + ' : ' + ui.values[1] + unit;
			console.log(t);
			t.closest('.slider-range').find('.amount-range-price').html(result);
		}
	});
})



/*global $ */
$(document).ready(function ($) {
    'use strict';


    // var swiper = new Swiper('.swiper-container', {
    //     direction: 'vertical',
    //     loop: true,
    //     speed: 300,
    //     autoplay: {
    //         delay: 1000,
            
    //       },
    //     pagination: {
    //       el: '.swiper-pagination',
    //       clickable: true,
    //     },
    //   });
    //   $(".swiper-container").mouseenter(function(){
    
    //     swiper.autoplay.stop();
    // });
    
    // $(".swiper-container").mouseleave(function(){
    //     swiper.autoplay.start();

    // });

    // Header cart 
    $('.middle-header .cart-header').click(function(){
        $('.middle-header .cart-dropdown').toggleClass('showcart');
    });

    $('.middle-header .cart-dropdown .close').click(function(){
        $('.middle-header .cart-dropdown').removeClass('showcart');
    });



    // Header filter category
    $('.middle-header .filter-box').click(function(){
        $('.middle-header .search-categ li ul').slideUp();
        $('.middle-header .search-categ').toggleClass('show-cat');
    });

    $('.middle-header .search-categ p span').click(function(){
        $(this).parent().next().slideToggle();
        $(this).toggleClass('minus');
    });

    $('.middle-header .search-categ .expand').click(function(){
        $('.middle-header .search-categ li ul').slideDown();
        $('.middle-header .search-categ p span').addClass('minus');
    });

    $('.middle-header .search-categ .colapse').click(function(){
        $('.middle-header .search-categ li ul').slideUp();
        $('.middle-header .search-categ p span').removeClass('minus');
    });

    $(document).on('click',function(){
        $('.middle-header .search-categ').removeClass('show-cat');
    });

    $('.middle-header .filter-box , .middle-header .search-categ').click(function(e){
        e.stopPropagation();
    });


    //  HEADER  MENUE 
    $('.bg-light .btn-menu').click(function(){
        $('.bg-light .main-list').toggleClass('show-menue');
    });
    $(document).on('click',function(){
        $('.bg-light .main-list').removeClass('show-menue');
    });
    $('.bg-light .btn-menu , .bg-light .main-list').click(function(e){
        e.stopPropagation();
    });

    $('.bg-light .navbar-brand-small').click(function(){
       $('.bg-light .navbar-collapse').css('right','0');
       $('.bg-light .cart-menu').css('left','-400px');
    });
    $('.bg-light #fa-close-menu').click(function(){
        $('.bg-light .navbar-collapse').css('right','-250px')
     });

     $('.bg-light .links-small .cart-header').click(function(){
        $('.bg-light .cart-menu').css('left','0');
        $('.bg-light .navbar-collapse').css('right','-250px');
     });
     $('.bg-light #cart-menu-close').click(function(){
         $('.bg-light .cart-menu').css('left','-400px')
      });


    




    // HEADER TABS 
    $('.bg-light .side-menue .tab-link').click(function (e) {
        e.preventDefault();
        
        var itemId = $(this).attr("href");
        
        $('.bg-light .cotents .block-contnet').removeClass('active-content'); 
        $(itemId).addClass('active-content');
        
        $('.bg-light .side-menue .tab-link').removeClass('active-tap');
        $(this).addClass('active-tap')
    });

 

    
    // SIDE MENUE 
    $('.mobile-side-menu .main-ul .colapse-body').slideUp();

    $('.mobile-header .side-menu-btn').click(function(){
        $('.mobile-side-menu .main-ul').toggleClass('show');
        $('.mobile-side-menu .overlay').toggleClass('show');
        $('body').css('overflow','hidden');
    });

    $('.mobile-side-menu .colapse-btn').on('click',function(){
        $('.mobile-side-menu .main-ul .colapse-body').slideUp();
        $('.mobile-side-menu .icon').removeClass('rotate');
        if($(this).parent().find('.colapse-body').is(':visible')){
            $(this).parent().find('.colapse-body').slideUp();
        }else{
            $(this).parent().find('.colapse-body').slideDown();
        }
        $(this).find('.icon').addClass('rotate');
    });

    $('.mobile-side-menu .overlay').click(function(){
        $('.mobile-side-menu .main-ul').removeClass('show');
        $('.mobile-side-menu .overlay').removeClass('show');
        $('body').css('overflow-y','auto');
    });

    $('.mobile-side-menu .main-ul').click(function(e){
        e.stopPropagation();
    });


    // PRODUCTS TABS SLIDER 
    $('.products-section .tablist-slider a').click(function (e) {
        e.preventDefault();     
        var itemId = $(this).attr("href");
        var tablist = $(this).closest('.tablist-slider'); 

        tablist.closest('.products-section').find('.tab_content').removeClass('active'); 
        $(itemId).addClass('active');     

        tablist.find('a').removeClass('active-item');
        $(this).addClass('active-item')
    });

    // PRODUCT VIEW PICS
    $('.owl-hash-nav .item').click(function(){
        $('.owl-hash-nav .item').removeClass('active');
        $(this).addClass('active');
    });



    // FAQ QUESTIONS SHOW ANSWER
    var quest   =  $('.question-box');
    var q_btn   =  quest.find('.question');
    var answer  =  quest.find('.answer');
    q_btn.click(function(){
        $(this).parent(quest).find(answer).slideToggle();
        $(this).find('.icon').toggleClass('plus');
    });


    // FAQ QUESTIONS CHANGE CONTENT
    $('.faq-side-categorys .faqcat-link').click(function (e) {
        e.preventDefault();
        
        var itemId  =  $(this).attr("href");
        $('.faq .faq-category').removeClass('active'); 
        $(itemId).addClass('active'); 
    });
    $('.faq-side-categorys .total-links').click(function (e) {
        e.preventDefault();
        $('.faq .faq-category').addClass('active'); 
    });


    // RANGE SLIDER 
    $('#range-slider').slider({
        range: "max",
        min: 1,
        max: 500,
        isRTL: false,
        value: 1,
        slide: function( event, ui ) {
        $('#amount').val( ui.value );
        }
    });
    $('#amount').val( $('#range-slider').slider("value") );

    $('.reset-range').click(function(){
        $('#range-slider').slider("value", $('#range-slider').slider("option", "min") );
    });

    
    // STORE LOCATOR SEARCH 
    $('.locator-search-options .tabs-list a').click(function (e) {
        e.preventDefault();
        
        var itemId = $(this).attr("href");
        
        $('.locator-search-options .single-content').removeClass('active'); 
        $(itemId).addClass('active');
        
        $('.locator-search-options .tabs-list a').removeClass('active');
        $(this).addClass('active');
    });





    //  PRODUCTS RANGE FILTER 
    $('#range-bar').slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $('#range-min').val("$" + ui.values[ 0 ]);
            $('#range-max').val( "$" + ui.values[ 1 ]);
        }
    });
    $('#range-min').val("$" + $('#range-bar').slider( "values", 0 ));
    $('#range-max').val("$" + $('#range-bar').slider( "values", 1 ));


    // SHOW SELLER CATEGOREY
    $('.seller-categ-filter .cats_box .cat_head').click(function(){
        $(this).parent('.cats_box').find('.cat_body').toggle();
    });

    // DELETE PRODUCT ITEM FROM CART-MENU 
    $('.cart-page .delete-cart-prod').click(function(e){
        e.preventDefault();
        $(this).parent('.cart-page .cart-item').remove();
    });


    // SHOW GIFT CONTENT
    $('.cart-gift .head').click(function(){
        $(this).siblings('.cart-gift .gift-cont').toggle();
        $(this).find('i').toggleClass('rotate');
    });

    // SHOW BRAND FILTER 
    var filter_item  =  $('.brand-side-filter .filter-item-box');
    var filter_btn   =  filter_item.find('.filter-item-head');
    var filter_body  =  filter_item.find('.filter-item-body');
    filter_btn.click(function(){
        $(this).parent(filter_item).find(filter_body).slideToggle();
        $(this).find('.icon').toggleClass('plus');
    });




    // OWL 
    $('.main-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots:true,
        autoplaySpeed: 3000,
        smartSpeed: 3000,
        dragEndSpeed: 3000,
        slidSpeed: 900,
        paginationSpeed: 900,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



    $('.tablist-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: false,
        loop: true,
        nav: true,
        dots:false,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-circled-right'></i>", "<i class='icofont-circled-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.tabcontent-owl').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: false,
        loop: true,
        nav: true,
        dots:false,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1 
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1100: {
                items: 5
            }
        }
    });

    $('.owl-hash-slider').owlCarousel({
        items:1,
        loop:true,
        nav: false,
        rtl:true,
        navText: ["<i class='icofont-circled-right'></i>", "<i class='icofont-circled-left'></i>"],
        URLhashListener:true,
        autoplayHoverPause:true,
        margin:10,
        animateOut: 'fadeOut',
        startPosition: 'URLHash',
    });

    $('.blog-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.featured-brands-owl').owlCarousel({
        rtl: true,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        autoplaySpeed: 2000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

// HEADER CATEG SEARCH FILTER 
var array = [];
function myCatSelect(myEl){
   var value = myEl.value;
    if(myEl.checked){
        array.push(myEl.id);
    }else{
     array.splice(array.indexOf(myEl.id) ,1 );
    }

    if(array.length === 1){
        var name = $('#'+array[0]).val();
        $('#result').html(name);
    }else if(array.length === 0){
        $('#result').html(' الأقســام ');
    }
    else{
        $('#result').html(array.length + ' أقســام ' );
    }
}



// COUNTER PLUS AND MINUS
$(document).on('click','.counter .btn',function (e) {
    e.preventDefault();
    var count = $(this).parent(),
    num = $(this).siblings(".num"),
    i = parseInt(num.text(), 10);
    
    if ($(this).hasClass("plus")) {
        if (i === 0) {
            i = i + 1;
            count.removeClass("shrink");
            num.fadeIn();
            num.text(i);
            $('.product_num').val(1);
        } else {
            i = i + 1;
            num.text(i);
            $('.product_num').val(i);
        }
    } else {
        if (i === 1) {
            i = i - 1;
            count.addClass("shrink");
            // num.fadeOut();
            num.text(i);
            $('.product_num').val(0);
        } else if (i > 1) {
            i = i - 1;
            num.text(i);
            $('.product_num').val(i);
        }
    }
});





// SHOW LOADER 
function showList() {
    $('.loader').fadeIn();
    setTimeout(function(){ 
        $('.loader').fadeOut();
        $('.brand-page-contnet .brand-products .col-12').addClass('list-view');
    }, 200);
}
function showGrid() {
    $('.loader').fadeIn();
    setTimeout(function(){ 
        $('.loader').fadeOut();
        $('.brand-page-contnet .brand-products .col-12').removeClass('list-view');
        $('.product-card .overlay').style.animationDuration = "3s";
    }, 200);
}


// checkout

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "   شراء";
  } else {
    document.getElementById("nextBtn").innerHTML = " التالى ";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    document.getElementsByClassName("step")[currentTab].innerHTML = "<i class='icofont-tick-mark'> </i>";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
  
 