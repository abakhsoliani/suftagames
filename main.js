rules = [
    'ეს თამაში ცნობილი "მე არასდროს" შებრუნებული ვარიანტია <br> თუ მოცემულ სიტტუაციაში ყოფილხარ აუცილებლად !სვამ!'
]


$(document).ready(function(){
    $('body').removeClass("not-loaded");
    var current_game = 0;

    $(".terms .checkbox").click(function(){
        $(".terms .checkbox").toggleClass("active");
        $("body").toggleClass("terms-done");
        $(".text-content .main-button").toggleClass("disabled");

    });



    $(".text-content .main-button").click(function(){
        if(!$(".text-content .main-button").hasClass("disabled")) {
            $("body").addClass("select-games");
            $(".text-content").remove();
            setTimeout(function(){ $(".games-container").addClass("active") }, 1000);
        }

    });

    $("#ivenever").click(function(){
        current_game = 0;
        $(".games-container").removeClass("active");
        $(".rules").html(rules[current_game]);
        setTimeout(function(){ $(".rules-container").addClass("active"); }, 400);
        

    });

    $(".main-button.continue").click(function(){
        $(".rules-container").removeClass("active");
    })
});
