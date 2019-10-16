var bar = $(".bar");
var topImage = $(".top-image");
var container = $(".container");
var isMoving = false;
var offset = container.offset().left;

bar.on("mousedown", function() {
    console.log("mousedown");
    isMoving = true;
});

$(".container").on("mousemove", function(e) {
    console.log("mousemove");
    if (isMoving) {
        topImage.css({
            width: e.clientX - 10 - offset + "px"
        });
        bar.css({
            left: e.clientX - 10 - offset + "px"
        });
    }
});

$(document).on("mouseup", function() {
    console.log("mouseup");
    isMoving = false;
    topImage.css({
        width: 295 + "px"
    });
    bar.css({
        left: 295 + "px"
    });
});
