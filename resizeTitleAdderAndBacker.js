function titleFinder() {
    const sizeOfWindowWhenTrigger1340 = 1340;
    const sizeOfWindowWhenTrigger992=992;
    if (($(window).width() > sizeOfWindowWhenTrigger1340) || ($(window).width()<sizeOfWindowWhenTrigger992) ) {
        console.log("titleFinder");
        $(".top_title.less1300").addClass("hideBtn");
        $(".top_title.higher1300").removeClass("hideBtn");
    } else {
        $(".top_title.less1300").removeClass("hideBtn");
        $(".top_title.higher1300").addClass("hideBtn");
    }
    ;
}

$(document).ready(function () {
    titleFinder();
    $(window).resize(function () {
        titleFinder();
    });

});
