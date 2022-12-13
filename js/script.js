$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop: true,
        nav: true,
        items: 4,
        margin:10,
    responsiveClass:true,
    responsive:{
        250:{
            items:1,
            nav:true
        },
        450:{
            items:2,
            nav:true
        },
        850:{
            items:3,
            nav:false
        },
        1100:{
            items:4,
            margin:50,
            nav:true,
            loop:false
        },
        1260:{
            items:3,
            nav:true,
            loop:false
        },
        1450:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
  });


