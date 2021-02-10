var rules = [
    'ეს თამაში ცნობილი "მე არასდროს" შებრუნებული ვარიანტია <br> თუ მოცემულ სიტტუაციაში ყოფილხარ აუცილებლად !სვამ!'
]

var ivenever = [
    'არ დავკარგულვარ სიმთვრალეში',
'არ დამიძინია გარეთ',
'არ მიმღერია მთვრალზე კარაოკე',
'არ ჩამიფსავს მთვრალზე',
'არ დამიხატავს ტატუ მთვრალზე',
'არ გამიკეთებია პირსინგი',
'გამიგზავნია შიშველი სურათები',
'შევხვედრილვარ ვარსკვლავს',
'არ ვყოფილვარ ტელევიზორში',
'არ მომიტეხავს არაფერი',
'არ მქონია 24 საათიანი უხილობა',
'არ მომიტყუებია ასაკი',
'არ დამიმტვრევია მანქანა',
'არ დავცემულვარ ხალხში',
'არ მომიპარავს',
];




$(document).ready(function(){
    $('body').removeClass("not-loaded");
    var current_game = 0;


    
      

    function getRandomIveNever(){
        if(ivenever.length==0) return "<div class='ivenever-card'>ეს იყო ბოლო დავალება<br>ახალი თამაშის ასარჩევად დაბრუნდით <a href='/'>მთავარ გვერდზე</a></div>";

        var randNumber = Math.floor(Math.random() * ivenever.length);
        var cardValue = ivenever[randNumber];

        ivenever.splice(randNumber, 1);
        
        return "<div class='ivenever-card'><div>"+cardValue+"</div><button class='main-button'>შემდეგი პირობა</button></div>";

    }


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
        $(".game-container").html(getRandomIveNever());
        setTimeout(function(){ $(".ivenever-card").addClass("active"); }, 600);

        

    });


    $(".content").on("click",".ivenever-card .main-button", function(){
        $(".game-container").html(getRandomIveNever());
        setTimeout(function(){ $(".ivenever-card").addClass("active"); }, 600);
      });
});
