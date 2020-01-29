console.log('hello parallax!');

parallax = (function () {
    let layer1 = document.querySelector('.parallax__layer_sky'),
        layer2 = document.querySelector('.parallax__layer_mountain'),
        layer3 = document.querySelector('.parallax__layer_baloon'),
        layer4 = document.querySelector('.parallax__layer_cloud'),
        layer5 = document.querySelector('.parallax__layer_man'),
        layer6 = document.querySelector('.parallax__layer_mountain1'),
        layer7 = document.querySelector('.parallax__layer_white');

    return {
        move: function (layer, windowScroll, strafeAmount) {
            let strafe = windowScroll / -strafeAmount + '%',
                transfotmString = 'translate3d(0,' + strafe + ', 0)',
                transformBaloonString = 'translate3d(' + strafe + ',' + strafe + ', 0)',
                style = layer.style;

            if (layer === layer3) {
                style.transform = transformBaloonString;
                style.webkitTransform = transformBaloonString;
            } else {
                style.transform = transfotmString;
                style.webkitTransform = transfotmString;
            }
        },
        init: function (wScroll) {
            this.move(layer1, wScroll, 70);
            this.move(layer2, wScroll, 50);
            this.move(layer3, wScroll, 10);
            this.move(layer4, wScroll, 40);
            this.move(layer5, wScroll, 80);
            this.move(layer6, wScroll, 95);
            this.move(layer7, wScroll, 100);
        }
    }
}());

parallaxBudda = (function () {
    let layer1 = document.querySelector('.parallax__layer_budda_sky'),
        layer2 = document.querySelector('.parallax__layer_budda_mount'),
        layer3 = document.querySelector('.parallax__layer_budda'),
        layer4 = document.querySelector('.parallax__layer_budda_cls'),
        layer5 = document.querySelector('.parallax__layer_budda_clb');

    return {
        move: function (layer, windowScroll, strafeAmount) {
            let strafe = windowScroll / -strafeAmount + '%',
                transformString = 'translate3d(0,' + strafe + ', 0)';
            style = layer.style;

            style.transform = transformString;

        },
        init: function (wScroll) {
            this.move(layer1, wScroll, 100);
            this.move(layer2, wScroll, 80);
            this.move(layer3, wScroll, 40);
        }

    }
}());


window.onscroll = function () {
    let wScroll = window.pageYOffset;
    parallax.init(wScroll);
    parallaxBudda.init(wScroll);
};


let titleS = document.querySelector('.title-section'),
    titleSHeight = titleS.offsetHeight + 80,
    scrollButton = document.querySelector('.scroll-trigger'),
    windowTop = window.pageYOffset,
    timer;

scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
    winScrollUp();

});

function winScrollUp() {

    if (windowTop < 900) {
        window.scrollTo(0, windowTop);
        windowTop += 5;
        timer = setTimeout(winScrollUp, 1);
        console.log(windowTop);
        console.log(titleSHeight);

    } else if(windowTop >= 900){
        clearTimeout(timer);
        // console.log(timer);
        window.scrollTo(0, titleSHeight);
        windowTop = 0;
    }
}