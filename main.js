
$(document).ready(function(){
    $('body').removeClass("not-loaded");


    $(".terms .checkbox").click(function(){
        $(".terms .checkbox").toggleClass("active");
        $("body").toggleClass("terms-done");
        $(".main-button").toggleClass("disabled");

    });



    $(".main-button").click(function(){
        if(!$(".main-button").hasClass("disabled")) {
            $("body").addClass("select-games");
            $(".text-content").remove();
            setTimeout(function(){ $(".games-container").addClass("active") }, 1000);
        }

    });
});
