import { OwlOptions } from 'ngx-owl-carousel-o';

export var OWLOPTIONS: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    // navText: ['&#8249', '&#8250;'],
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 100,    
    responsive:{
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        },
        1500: {
            items: 7
        }
    }    
}