function popupOpen(btn) {
    var itemValue = btn.data("itemValue");
    
    $("div.popup").each(function(i){
        var item =  $("div.popup").eq(i).data("item");

        if (itemValue === item) {
            $(this).show().stop().animate({
                left : "15%"
            }, "slow");

            $(".popup_bg").fadeTo("300", 0.5);
        }
    });
}

function popupClose(btn) {
    $("div.popup").animate({
        left:"-2000px"
    }, "speed");
    $(".popup_bg").fadeOut("500");
}

$(function() {
    $(".btn").on("click", function() {
        popupOpen($(this));
    });

    $(".close, .popup_bg").on("click", function() {
        popupClose($(this));
    });
});