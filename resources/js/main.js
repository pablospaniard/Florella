//Parallax Effect 
$(document).ready(function () {
    $('.parallax-window').parallax({
        imageSrc: './resources/img/bg-foto.jpeg'
    });
});

$(document).ready(function () {
    $('.dropdown').hover(
        function () {
            $(this).children('.sub-menu').slideDown(200);
        },
        function () {
            $(this).children('.sub-menu').slideUp(200);
        }
    );
});
