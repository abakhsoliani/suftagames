var rules = [
    'ეს თამაში ცნობილი "მე არასდროს" შებრუნებული ვარიანტია <br> თუ მოცემულ სიტტუაციაში ყოფილხარ აუცილებლად !სვამ!',
    '',
    '',
    'გამოიცანი სიმღერა სასურველი კატეგორიიდან<br> ან !დალიე!'
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

var songsList = [
    {
        category: 'ქართული ძველი', 
        songs : 
        [
            {name :"შენ დაგეძებ დილაა თუ ბინდია", file: 'shendagedzeb.mp3', youtube:"",description:""}, 
            {name :"იმღერე რამე", file: 'imgererame.mp3', youtube:"",description:""}, 
            {name :"ნანინა გერჩივნოს", file: 'nanina.mp3', youtube:"",description:""}, 
            {name :"გოგოვ გოგოვ შავთვალა", file: 'gogovgogovshavtvala.mp3', youtube:"",description:""}, 
        ]
    },
    {
        category: 'ქართული ახალი', 
        songs : 
        [
            {name :"ლექს სენი - ხელები მაღლა", file: 'lexsenixelebimagla.mp3', youtube:"",description:""}, 
            {name :"უცნობი - კუნძული", file: 'ucnobi-kundzuli.mp3', youtube:"",description:""}, 
            {name :"გიორგი ხუციშვილი - ზღვა ღელავს", file: 'zgvagelavs.mp3', youtube:"",description:""}, 
            {name :"ირმა სოხაძე - დრო როგორ გევიდაა", file: 'irmasoxa.mp3', youtube:"",description:""}, 
        ]
    },
    {
        category: 'როკი', 
        songs : 
        [
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
        ]
    },
    {
        category: 'რეპი', 
        songs : 
        [
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
        ]
    },
    {
        category: 'პოპი ძველი', 
        songs : 
        [
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
        ]
    },
    {
        category: 'პოპი ახალი', 
        songs : 
        [
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
        ]
    },
    {
        category: 'იტალიური', 
        songs : 
        [
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
            {name :"მაგარი სიმღერა", file: 'file', youtube:"",description:""}, 
        ]
    },
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

    function getSongContent(){


        var playSongs = [];

        if(songsList.length<4) return "<div class='ivenever-card'>სამწუხაროდ მეტი სიმღერა აღარ გვაქვს<br>ახალი თამაშის ასარჩევად დაბრუნდით <a href='/'>მთავარ გვერდზე</a></div>";
        for(var i = 0; i<4; i++){           
            var randNumber = Math.floor(Math.random() * songsList.length);
            playSongs.push(songsList[randNumber]);
            songsList.splice(randNumber, 1);
        }



        var string = "<h2>იმღერე (და დალიე) რამე</h2><div class='songs-container'>";
        
        playSongs.forEach(function(songList, index){
            string += "<div class='songs-row'><div class='song-category'>"+songList.category+"</div>";

            for(var i = 0; i<4; i++){
                var randNumber = Math.floor(Math.random() * songList.songs.length);
                string+= "<div class='song' data-category='"+index+"' data-song='"+randNumber+"' data-name='"+songList.songs[randNumber].name+"' data-file='songs/"+songList.songs[randNumber].file+"'>?</div>"
                playSongs[index].songs.splice(randNumber, 1);

            }
            
            string +="</div>";
        });
        
        songsList = songsList.concat(playSongs);



        string+='</div>';


        return string;
    }


    function openSongPopup(name,file){
        var string = "<div class='overlay'>";
        string +="<div data-name='"+name+"' class='song-popup'>დაიწყე მოსმენა, როცა ვინმე მიხვდება სიმღერას დააჭირე პაუზას<br> თუ გამოიცნო ყველა სვამს მის გარდა, თუ არა თვითონ სვამს!<br><br> <button class='main-button play'>დაწყება</button><br><button class='song-answer'>პასუხის ნახვა</button> </div>";
        
        string+="<audio id='audio'><source src='"+file+"' type='audio/mpeg'></audio></div>";
        return string;
    }

    function getSongAnswer(){
        return string = "პასუხი იყო " +$('.song-popup').data('name') + "<br> <button class='main-button exit-play'>სხვა სიმღერის არჩევა</button>";
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

    $("#singsomething").click(function(){
        current_game = 3;
        $(".games-container").removeClass("active");
        $(".rules").html(rules[current_game]);
        setTimeout(function(){ $(".rules-container").addClass("active"); }, 400);

    });

    $(".main-button.continue").click(function(){
        $(".rules-container").removeClass("active");
        if(current_game == 0){
            $(".game-container").html(getRandomIveNever());
            setTimeout(function(){ $(".ivenever-card").addClass("active"); }, 600);
        } else if(current_game==3){
            $(".game-container").html(getSongContent());
        }
    });


    $(".content").on("click",".ivenever-card .main-button", function(){
        $(".game-container").html(getRandomIveNever());
        setTimeout(function(){ $(".ivenever-card").addClass("active"); }, 600);
      });


    $(".game-container").on("click",".song", function(){
        if($(this).hasClass('done')) return;
        var name = $(this).data("name");
        var file = $(this).data("file");
        $(this).addClass("done");
        $('body').append(openSongPopup(name,file));
    });

    var playStatus = 0;
    $("body").on("click",".song-popup .main-button.play", function(){
        if(playStatus==0){
            document.getElementById("audio").play();
            $(".song-popup .main-button").text("პაუზა");
            playStatus = 1;
        } else {
            playStatus = 0;
            document.getElementById("audio").pause();
            $(".song-popup-exit").addClass("active");
            $(".song-popup .main-button").text("გაგრძელება");
            $(".song-popup").addClass("played");
        }
    });


    $("body").on("click",".song-popup .song-answer", function(){
       
            playStatus = 1;
            document.getElementById("audio").play();
            $(".song-popup").html(getSongAnswer());


    });


    $("body").on("click",".song-popup .main-button.exit-play", function(){
        
            playStatus = 0;
            document.getElementById("audio").pause();
            $(".overlay").remove();
       
    });

   
});
