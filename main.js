var rules = [
    'ამ თამაშს ზედმეტი წარდგენა არ ჭირდება',
    'სასურველია ითამაშოს მინიმუმ 4-მა ადამიანმა.  ყველა თავისთვის იღებს გადაწყვეტილებას იმის შესახებ თუ ვის შეესაბამება მოცემული პირობა ყველაზე მეტად, ითვლით 3-დან 1-მდე და ვიშვერთ თითს ჩაფიქრებული ადამიანისკენ. სვამს ის, ვინც ყველაზე მეტ თითს მიიღებს!',
    'ეს თამაში ყველაზე მარტივი ხერხია სწრაფად შესაზარხოშებლად. <br> თამაშის წესები მარტივია, ყველა კარტს თავისი დალევი წესი აქვს <br> რიგრიგობით გახსენით ახალი კარტი და შეასრულეთ მასზე ამოსული პირობები',
    'გამოიცანი სიმღერა სასურველი კატეგორიიდან<br> ან დალიე!'
]

var ivenever = [
    'ამრევია გული ტაქსიში',
    'მიჩხუბია დაცვასთან',
    'დამილევია სადარბაზოში',
    'მიჩხუბია რიგის გამო',
    'დამიწყევლია ვინმე',
    'შემიჭრია მთვრალზე თმები',
    'ამიცდენია დენცქვიტასთვის შესაერთებელი',
    'მიქნია მომისაქმებია ბუნებაში',
    'ჩამიფსამს აუზში',
    'მქონია სექსი 20 წუთზე დიდხანს',
    'მომიგონია ტყუილი ჩემი ცუდი საქციელის გადასაფარად',
    'მიკოცნია 5 წუთზე დიდხანს',
    'მიცეკვია ტექტონიკი',
    'მიცეკვია გასული რეივერივით',
    'მიცეკვია ქართული',
    'გამიკუებია სხვების თანდასწრებით',
    'გავსულვარ უნიფხვოდ გარეთ',
    'ჩავსულვარ მაღაზიაში ფლოსტებით',
    'ჩამირბენია ხალათით პურზე',
    'ვყოფილვარ ინტრიგის ობიექტი',
    'ამშლია კუჭი შეხვედრაზე',
    'მიფიქრია ქვეყნიდან გაქცევაზე',
    'დამილევია უბანში 3 ლარიანი ჭაჭა ',
    'მქონია გულის პრანჭვები',
    'გამომიძახებია სასწრაფო',
    'გამომიძახებია პატრული',
    'შემიხვევია ხინკალი',
    'გავსულვარ გარეთ ულიფოდ',
    'ცხვირში თითის ბზრიალს ძალიან არ შეუყოლებივარ',
    'მისრიალია თხილამურებით',
    'შემიგინებია ყველა კაცისთვის',
    'შემიგინებია ყველა ქალისთვის ',
    'მცმია ტანგა',
    'მიცდია ვყოფილიყავი განსხვავებული',
    'შევუწუხებივარ კლუბში ოფლის სუნს',
    'მომიპარავს ბარიდან ეულად მიგდებული კოქტეილი',
    'მიჩხუბია კლუბის ტუალეტში',
    'მიყურებია თურქული სერიალისთვის',
    'დამიგვიანებია პაემანზე',
    'მიკოცნია უცნობისთვის ტუჩებში',
    'შემპარვია ეჭვი ჩემს სექსუალურ ორიენტაციაში',
    'გამომიყენებია ,,შპარგალკა”',
    'გავუჩერებივარ პატრულს',
    'გავპარულვარ ღამე სახლიდან',
    'შევხვედრილვარ ვინმე ცნობილს',
    'მომიტყუებია ასაკი',
    'ჩამიფსია სიცილისგან',
    'მივსულვარ ამობრუნებული მაისურით სამსახურში/უნივერსიტეტში',
    'გამიგზავნია სქრინშოთი არასწორ ადრესატთან',
    'გადამიკოცნია უცნობი ადამიანი',
    'დამინახავს მოჩვენება',
    'ვმჯდარვავრ მოტოციკლეტზე',
    'წამიგია სანაძლეო',
    'შემშლია ავტობუსი/მარშრუტკა',
    'გამისინჯავს მოსაწევი',
    'გადამირჩენია ადამიანი',
    'გავუჩერებივარ აეროპორტის დაცვას',
    'მირბენია მარათონზე',
    'მომიტყუებია უახლოესი მეგობარი იმაზე თუ ვისთან გავატარე მთელი დღე',
    'ჩამძინებია სექსის დროს',
    'დამილევია აღმგზნები საშუალება',
    'მომიტყუებია ისტორია ისეთ ადამიანზე, რომელიც არ არსებობს',
    'ვყოფილვარ აქციაზე',
    'ყურადღების მისაქცევად მომიტყუებია, რომ ცუდად ვარ',
    'წამიშლია პოსტი ცოტა მოწონების გამო',
    'ვყოფილვარ სტრიპტიზ კლუბშივ',
    'მითქვამს მიყვარხარ მხოლოდ სექსის გამო',
    'დამიცინია ვინმე ფიზიკური ნაკლის გამო',
    'მქონია ღია ურთიერთობა',
    'ჩამომირთმევია არასწორი ადამიანის ხელი',
    'შემყვარებია სოციალური ქსელის საშვალებით',
    'მომიტყუებია ამ თამაშში',
    'მითქვამს მიყვარხარ სიყვარულის გარეშე',
    'გამოვუგდივარ კლუბიდან/ბარიდან',
    'მიმიკრია საღეჭი რეზინი ყურის ბიბილოსთან',
    'მიმიწებებია საღეჭი რეზინი მაგიდის ქვემოთ',
    'დამივიწყებია ჩემი პირველი სიყვარული',
    'ვყოფილვარ ნაღალატები',
    'მიკოცნია იგივე სქესის ადამიანისთვის ტუჩებში',
    'მიცურავია აუზში/ზღვაში შიშველს',
    'მიჭამია ძირს დაგდებული საჭმელი',
    'ჩამძინებია ავტობუსში/მარშრუტკაში',
    '"დავქრაშულვარ” ჩემს ნათესავზე',
    'გავუქურდივარ',
    'გავჭედილვარ ლიფტში',
    'მიჭამია სხვისი დატოვებული საჭმელი',
    'მიყვირია გოგიტა გლდანის შაურმის რიგში',
    'დამილევია მაგიდაზე დაქცეული სასმელი',
    'დამჯახებია მანქანა',
    'მიტირია უმიზეზოდ',
    'გამიყალბებია საბუთი',
    'გამიღვიძია უცნობი ადამიანის გვერდით',
    'ვყოფილვარ სასწრაფოს მანქანაში',
    'გამიგზავნია ნუდები',
    'შევსულვარ საპირისპირო სქესისთვის განკუთვნილ ტუალეტში',
    'ჩამიგდია ტუალეტში მობილური',
    'მიცდია მეეჭვიანებინა შეყვარებული',
    'გამოვუგდივარ სამსახურიდან',
    'გადამიმოწმებია ყოფილი შეყვარებულის სოციალური მედია',
    'მომიპარავს ოფისიდან ნივთი',
    'გადამიღია ტიკ ტოკი',
    

];


var mostlikely = [
    'ყველაზე მეტად ვინ გგონია რომ იქნება მდიდარი 💰',
    'ყველაზე მეტად ვინ გგონია რომ გახდება ცნობილი ',
    'ყველაზე მეტად ვინ გგონია რომ დაქორწინდება პირველი 👰‍♀️',
    'ყველაზე მეტად ვინ გგონია რომ იცოცხლებს ყველაზე დიდხანს',
    'ყველაზე მეტად ვინ გგონია რომ მოკვდება ყველაზე ადრე ⚰️',
    'ყველაზე მეტად ვინ გგონია რომ შეუერთდება სექტას',
    'ყველაზე მეტად ვინ გგონია რომ ზომბი აპოკალიფის დროს მოკვდება პირველი 🧟‍♀️',
    'ყველაზე მეტად ვინ გგონია რომ ზომბი აპოკალიფსს გადაურჩება 🧟🧟‍',
    'ყველაზე მეტად ვინ გგონია რომ სამი კვირის მანძილზე არ იბანავებს 🤢',
    'ყველაზე მეტად ვინ გგონია რომ დაქორწინდება ერთი კვირის გაცნობილ ადამიანზე 💒',
    'ყველაზე მეტად ვინ გგონია რომ წავა სტრიპტიზ კლუბში',
    'ყველაზე მეტად ვინ გგონია რომ გაძარცვავს ბანკს ',
    'ყველაზე მეტად ვინ გგონია რომ იქნება ღარიბი 💸',
    'ყველაზე მეტად ვინ გგონია რომ უყურებს პორნოს ახალგაღვიძებულზე 👯‍♂️',
    'ყველაზე მეტად ვინ გგონია რომ ჩაიჭრება მარტივ ტესტში 😵‍💫',
    'ყველაზე მეტად ვინ გგონია რომ მიატოვებს ყველაფერს და წავა ხანგრძლივ მოგზაურობაში ✈️',
    'ყველაზე მეტად ვის გგონია რომ ეცმევა ერთი და იგივე მაისური 1 კვირის მანძილზე 👕',
    'ყველაზე მეტად ვინ გგონია რომ გაიცინებს ყველაზე უხერხულ მომენტში 🤦‍♀️',
    'ყველაზე მეტად ვინ გგონია რომ წაიკითხავს ყველა წიგნს ბიბლიოთეკაში 🤓',
    'ყველაზე მეტად ვინ გგონია რომ გაავრცელებს ჭორებს 👅',
    'ყველაზე მეტად ვის გგონია რომ დაავიწყდება შეყვარებულის დაბადების დღე 😖',
    'ყველაზე მეტად ვინ გგონია რომ ერთდროულად ორ ან მეტ ადამიანთან გააბამს რომანს ',
    'ყველაზე მეტად ვინ გგონია რომ ჯანმრთელი ცხოვრების წესით იცხოვრებს სულ 🏊‍♀️',
    'ყველაზე მეტად ვინ გგონია რომ ნახევარი საათიც ვერ შეინახავს საიდუმლოს 🤐',
    'ყველაზე მეტად ვინ გგონია რომ დაიფარავს სხეულს ტატუებით ',
    'ყველაზე მეტად ვინ გგონია რომ უღალატებს მეორე ნახევარს ',
    'ყველაზე მეტად ვინ გგონია რომ იქნება ალკოჰოლიკი 🍸',
    'ყველაზე მეტად ვინ გგონია რომ გახდება მამამო/მონაზონი 📿',
    'ყველაზე მეტად ვის გგონია რომ ეყოლება ბევრი შინაური ცხოველი სახლში 🐱',
    'ყველაზე მეტად ვის გგონია რომ ეყოლება ყველაზე ბევრი შვილი 👨‍🍼',
    'ყველაზე მეტად ვინ გგონია რომ გაძლებს საჭმლის გარეშე სამი დღე ',
    'ყველაზე მეტად ვინ გგონია რომ იქნება საშინელი გამომძიებელი 🕵️‍♀️',
    'ყველაზე მეტად ვინ გგონია რომ იქნება უნიჭო მსახიობი 🎭',
    'ყველაზე მეტად ვინ გგონია რომ შეიძლება აღმოჩნდეს ციხეში 🚓',
    'ყველაზე მეტად ვინ გგონია რომ მოიპარავს სახლიდან ძვირფას ნივთებს ',
    'ყველაზე მეტად ვინ გგონია რომ არის დეპრესიული',
    'ყველაზე მეტად ვინ გგონია რომ იგინება ყველაზე მეტს 🤬',
    'ყველაზე მეტად ვინ გგონია რომ მოკლავს ადამიანს ფულის სანაცვლოდ ',
    'ყველაზე მეტად ვინ გგონია რომ ძუნწია ',
    'ყველაზე მეტად ვინ გგონია რომ ხელგაშლილია ',
    'ყველაზე მეტად ვინ გგონია რომ ,,დრამა ქვინია” 👑',
    'ყველაზე მეტად ვინ გგონია რომ ბევრს იტყუება ',
    'ყველაზე მეტად ვინ გგონია რომ გამოუსწორებელი რომანტიკოსია ',
    'ყველაზე მეტად ვინ გგონია რომ სარკესთან საათობით იპრანჭება 💅',
    'ყველაზე მეტად ვინ გგონია რომ ხშირად დადის საროსკიპოში',
    'ყველაზე მეტად ვინ გგონია რომ ყოველთვის აგიბამს მხარს არაადეკვატურ გადაწყვეტილებებში ',
    'ყველაზე მეტად ვინ გგონია რომ სამართლიანია 👩‍⚖️',
    'ყველაზე მეტად ვინ გგონია რომ უსამართლოა ',
    'ყველაზე მეტად ვის გგონია რომ უყვარს წუწუნი 🤯',
    'ყველაზე მეტად ვის გგონია რომ არცერთი თურქული სერიალი არ გამოუტოვებია ',
    'ყველაზე მეტად ვინ გგონია რომ ფარულ ვნებას დღემდე უყურებს ',
    'ყველაზე მეტად ვინ გგონია რომ მომავალი ერთი წლის განმავლობაში ყველაზე მეტ პარტნიორს გამოიცვლის ',
    'ყველაზე მეტად ვინ გგონია რომ ცუდი კულინარია ',
    'ყველაზე მეტად ვინ გგონია რომ მეგობარს დაბადების დღის საჩუქრად საკუთარი ნივთებიდან აურჩევს რამეს და ისე გამოძვრება',
    'ყველაზე მეტად ვინ გგონია რომ უნდა იყოს ფსიქიატრიულის პაციენტი',
    'ყველაზე მეტად ვინ გგონია რომ ილაპარაკებს მთელი დღე და არ დაიღლება',
    'ყველაზე მეტად ვინ გგონია რომ ყველაფერს კარგავს',
    'ყველაზე მეტად ვინ გგონია რომ გველის ხორცს დაუფიქრებლად შეჭამს 🪱',
    'ყველაზე მეტად ვინ გგონია რომ ჯასტინ ბიბერის კონცერტზე წავა ',
    'ყველაზე მეტად ვის გგონია რომ 1 ჭიქის მერე თავი ფილოსოფოსად მოაქვს',
    'ყველაზე მეტად ვინ გგონია რომ 5 ლარისთვის ყველაფერს იზამს',
    'ყველაზე მეტად ვინ გგონია რომ არ იცის ჩრდილოეთი საითაა 🧭',
    'ყველაზე მეტად ვინ გგონია რომ ყურადღების ცენტრში ყოფნით ტკბება',
    'ყველაზე მეტად ვინ გგონია რომ რაღაცებს იმიტომ აკეთებს, რომ  სთორიში დადოს 🤳',
    'ყველაზე მეტად ვინ გგონია რომ ინსტაგრამზე ლაიქებს ყიდულობს',
    'ყველაზე მეტად ვინ გგონია რომ მსუქანი ბავშვი იყო',
    'ყველაზე მეტად ვინ გგონია რომ უნდა იყოს ციხეში',
    'ყველაზე მეტად ვის გგონია რომ საშინელი მუსიკალური გემოვნება აქვს 👂',
    'ყველაზე მეტად ვინ გგონია რომ სექსი აქვს კურიერის ყურების დროს',
    'ყველაზე მეტად ვინ გგონია რომ მღერის აბაზანაში 🛀',
    'ყველაზე მეტად ვინ გგონია რომ ჯოჯოხეთში მოხვდება',
    'ყველაზე მეტად ვინ გგონია რომ იღბლიანია',
    'ყველაზე მეტად ვის გგონია რომ იუმორის გრძნობა არ აქვს',
    'ყველაზე მეტად ვინ გგონია რომ გამოსავალს ყველა სიტუაციაში იპოვის',
    'ყველაზე მეტად ვინ გგონია რომ FIFA-ს თამაშში დახარჯავს ძვირფას წლებს 🎮',
    'ყველაზე მეტად ვინ გგონია რომ ყოველთვის ტრა*ში პეროთი იცხოვრებს',
    'ყველაზე მეტად ვინ გგონია რომ პონტის გამო გაგყიდის ',
    'ყველაზე მეტად ვინ გგონია რომ 60-იანებში ჰიპი იქნებოდა ',
    'ყველაზე მეტად ვის გგონია რომ რომ შეეძლოს საკუთარ თავთან ექნებოდა სექსი',
    'ყველაზე მეტად ვინ გგონია რომ პირველად ნახვისას ცუდ შთაბეჭდილებას ტოვებს ',
    'ყველაზე მეტად ვინ გგონია რომ ერთი და იგივე ისტორიას ყოველ ნახვაზე მოგიყვება ',
    'ყველაზე მეტად ვის გგონია რომ შეუძლია ყველგან დაიძინოს ',
    'ყველაზე მეტად ვინ გგონია რომ ორშაბათიდან დიეტას და ვარჯიშს იწყებს 🏃‍♀️ ',
    'ყველაზე მეტად ვინ გგონია რომ ბუდისტი გახდება🛕',
    'ყველაზე მეტად ვინ გგონია რომ არაპუნქტუალურია',
    'ყველაზე მეტად ვინ გგონია რომ მშიერი დარჩება, მაგრამ აიფონ ბოლოს მაინც იყიდის 📱',
    'ყველაზე მეტად ვინ გგონია რომ ბასიანის ან ხიდის ტატუს გაიკეთებს 🀄',
    'ყველაზე მეტად ვის გგონია რომ საზღვარზე გარეგნობის გამო გააჩერებენ 🥷',
    'ყველაზე მეტად ვინ გგონია რომ მომავალი 1 კვირის მანძილზე სკანდალში გაეხვევა ',
    'ყველაზე მეტად ვინ გგონია რომ ყოველ დალევაზე 1 კარაოკეს მაინც მღერის 🎤',
    'ყველაზე მეტად ვინ გგონია რომ ბევრ საიდუმლოს ინახავს 🤫',
    'ყველაზე მეტად ვინ გგონია რომ ხმაურით ჭამს ',
    'ყველაზე მეტად ვინ გგონია რომ ჯუჯღუნა მოხუცი იქნება',
    'ყველაზე მეტად ვინ გგონია რომ ძაან ,,არტია”',
    'ყველაზე მეტად ვინ გგონია რომ მეტამფეტამინის ლაბორატორიას გააკეთებს 💊',
    'ყველაზე მეტად ვინ გგონია რომ გახდება პრეზიდენტი',
    'ყველაზე მეტად ვინ გგონია რომ საყვარელი მოხუცი იქნება 👴',
    'ყველაზე მეტად ვინ გგონია რომ ეჭვიანი შეყვარებული იქნება ',


];

var songsList = [
    {
        category: 'ქართული ძველი', 
        songs : 
        [
            {name :"მუხამბაზი Mukhambazi - ჯ. კახიძე, ვ. კახიძე, გ. დოლიძე", file: 'მუხამბაზი Mukhambazi - ჯ. კახიძე, ვ. კახიძე, გ. დოლიძე - J. Kakhidze, V. Kakhidze, G.Dolidze.mp3', youtube:"",description:""}, 
            {name :"ივერია - იმღერე რამე (1975)", file: 'ივერია - იმღერე რამე (1975).mp3', youtube:"",description:""}, 
            {name :"ჩემი საქართველო აქ არის ", file: 'ჩემი საქართველო აქ არის (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"საზამთრო Watermelon - ჯანსუღ კახიძე & გოგი დოლიძე", file: 'საზამთრო Watermelon - ჯანსუღ კახიძე & გოგი დოლიძე Jansugh Kakhidze & Gogi Dolidze.mp3', youtube:"",description:""}, 
            {name :"07 - ვია 75 პირველი სიყვარული 1982 via 75 First Love", file: '07 - ვია 75 პირველი სიყვარული 1982 via 75 First Love.mp3', youtube:"",description:""}, 
            {name :"Aleksandre Basilaia Gza Dagviloce", file: 'Aleksandre Basilaia Gza Dagviloce )) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"მაყვალა & არჩილ ჩიხლაძეები - კართან მოდგა შემოდგომა (1976) ", file: 'მაყვალა & არჩილ ჩიხლაძეები - კართან მოდგა შემოდგომა (1976).mp3', youtube:"",description:""}, 
            {name :"რომა რცხილაძე ნატვრის ხე", file: 'რომა რცხილაძე ნატვრის ხე.mp3', youtube:"",description:""}, 

        ]
        
    },
    {
        category: 'ქართული ახალი', 
        songs : 
        [
            {name :"ლექს სენი - ხელები მაღლა", file: 'lexsenixelebimagla.mp3', youtube:"",description:""}, 
            {name :"უცნობი - კუნძული", file: 'ucnobi-kundzuli.mp3', youtube:"",description:""}, 
            {name :"დათო გომართელი - გატეხილი გული", file: 'დათო გომართელი - გატეხილი გული Dato Gomarteli - Gatexili Guli.mp3', youtube:"",description:""}, 
            {name :"ირმა სოხაძე - დრო როგორ გევიდაა", file: 'irmasoxa.mp3', youtube:"",description:""}, 
            {name :"ლელა წურწუმია - ღამის სიჩუმე გაფანტე", file: 'ლელა წურწუმია - ღამის სიჩუმე გაფანტე Lela Tsurtsumia - Ghamis Sichume Gafante.mp3', youtube:"",description:""}, 
            {name :"ძებნილები & ჯერონიმო - ჩემი ძმები", file: 'ძებნილები & ჯერონიმო - ჩემი ძმები.mp3', youtube:"",description:""}, 
            {name :"არა - კი", file: 'არა - კი.mp3', youtube:"",description:""}, 
            {name :"Nini Karseladze - Chemi qalaqi", file: 'Nini Karseladze - Chemi qalaqi.mp3', youtube:"",description:""}, 
            {name :"Mao & Stefane [Xelebi]", file: 'Mao & Stefane [Xelebi] (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Bakur Burduli - Fetqavs ", file: 'Bakur Burduli - Fetqavs (HD) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Dato - Megobrebtan Ertad", file: 'Dato - Megobrebtan Ertad (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Giga Miqaberidze ft. Kato Piramidebi", file: 'Giga Miqaberidze ft. Kato Piramidebi.wmv.mp3', youtube:"",description:""}, 
        ]
    },
    {
        category: 'როკი', 
        songs : 
        [
            {name :"Queen - Radio Ga Ga", file: 'Queen - Radio Ga Ga (Official Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"The Rolling Stones - (I Can't Get No) Satisfaction", file: "The Rolling Stones - (I Cant Get No) Satisfaction (Official Lyric Video).mp3", youtube:"",description:""}, 
            {name :"Prince - Purple Rain ", file: 'Prince - Purple Rain (Official Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Eagles - Hotel California", file: 'Eagles - Hotel California.mp3', youtube:"",description:""}, 
            {name :"Black Dog Led Zeppelin Lyrics", file: 'Black Dog Led Zeppelin Lyrics.mp3', youtube:"",description:""}, 
            {name :"ACDC - Highway to Hell ", file: 'ACDC - Highway to Hell (Official Video).mp3', youtube:"",description:""}, 
            {name :"Aerosmith - Crazy", file: 'Aerosmith - Crazy (Official Music Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Nirvana - Come As You Are", file: 'Nirvana - Come As You Are (mp3cut.net).mp3', youtube:"",description:""}, 

        ]
    },
    {
        category: 'ჰიპ ჰოპი', 
        songs : 
        [
            {name :"Nas - I Can", file: 'Nas - I Can (Official HD Video).mp3', youtube:"",description:""}, 
            {name :"Puff Daddy", file: 'Puff Daddy [feat (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Biggie Smalls - Hypnotize ", file: 'Biggie Smalls - Hypnotize (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"2pac feat Dr", file: '2pac feat Dr (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"50 Cent - Window Shopper ", file: '50 Cent - Window Shopper (Official Music Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Mattafix - Big City Life", file: 'Mattafix - Big City Life.mp3', youtube:"",description:""}, 
            {name :"Outkast - Ms ჟეკსონ", file: 'Outkast - Ms (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Afroman - Because I Got High", file: 'Afroman - Because I Got High (Official Video).mp3', youtube:"",description:""},
            {name :"სნუუპდოოოოგ და დრე ", file: 'Dr (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Eminem - Mockingbird", file: 'Eminem - Mockingbird (Official Music Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Kendrick Lamar - HUMBLE", file: 'Kendrick Lamar - HUMBLE (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Wu-Tang Clan - C.R.E.A.M", file: 'Wu-Tang Clan - C.R.E.A.M. (Official Video).mp3', youtube:"",description:""},
        ]
    },
    {
        category: 'R&B, Soul', 
        songs : 
        [
            {name :"Marvin Gaye - Lets get it on", file: 'Marvin Gaye - Lets get it on.mp3', youtube:"",description:""}, 
            {name :"James Brown - It's A Man's Man's Man's World ", file: "James Brown - It's A Mans Mans Mans World (Official Video).mp3", youtube:"",description:""}, 
            {name :"Stevie Wonder I Just Called To Say I Love You", file: 'Stevie Wonder I Just Called To Say I Love You (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Michael Jackson - Billie Jean", file: 'Michael Jackson - Billie Jean (Official Video).mp3', youtube:"",description:""}, 
            {name :"Sade - Smooth Operator", file: 'Sade - Smooth Operator - Official - 1984.mp3', youtube:"",description:""}, 
            {name :"Barry White Never Never Gonna Give You Up Lyrics", file: 'Barry White Never Never Gonna Give You Up Lyrics.mp3', youtube:"",description:""}, 
            {name :"Alicia Keys - Fallin'", file: "Alicia Keys - Fallin (Official Video) (mp3cut.net).mp3", youtube:"",description:""},
            {name :"Bobby Caldwell - What You Won't Do for Love ", file: "Bobby Caldwell - What You Wont Do for Love (Album Version).mp3", youtube:"",description:""}, 
            {name :"George Michael - Careless Whisper", file: 'George Michael - Careless Whisper (Official Video).mp3', youtube:"",description:""}, 

        ]
    },
    {
        category: '90-იანები', 
        songs : 
        [
            {name :"Ricky Martin - Livin' La Vida Loca", file: "Ricky Martin - Livin La Vida Loca.mp3", youtube:"",description:""}, 
            {name :"Britney Spears -  ჰით მი ბებე ვან მორ თაიმ", file: 'Britney Spears -  (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Las Ketchup - The Ketchup Song (Asereje) ", file: 'Las Ketchup - The Ketchup Song (Asereje) (Spanglish Version) (Official Video).mp3', youtube:"",description:""}, 
            {name :"Barry White - Let The Music Play", file: 'Barry White - Let The Music Play.mp3', youtube:"",description:""}, 
            {name :"Destiny's Child - Survivor (Official Music Video) ", file: "Destinys Child - Survivor (Official Music Video) ft (mp3cut.net).mp3", youtube:"",description:""}, 
            {name :"NSYNC - Bye Bye Bye ", file: 'NSYNC - Bye Bye Bye (Official Music Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Backstreet Boys - Everybody (Backstreet's Back) ", file: "Backstreet Boys - Everybody (Backstreets Back) (Official Video) (mp3cut.net).mp3", youtube:"",description:""}, 
            {name :"The Cardigans - Lovefool ", file: 'The Cardigans - Lovefool (Official Music Video).mp3', youtube:"",description:""}, 
            {name :"Modjo - Lady (Hear Me Tonight)", file: 'Modjo - Lady (Hear Me Tonight) (Official Video).mp3', youtube:"",description:""}, 
            {name :"Mr პერზიდენტ კოკო ჯამბო", file: 'Mr (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Haddaway - What Is Love", file: 'Haddaway - What Is Love [Official] (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Bomfunk MC's - Freestyler ", file: "Bomfunk MCs - Freestyler (Video Original Version).mp3", youtube:"",description:""}, 
            {name :"Cher - Strong Enough ", file: 'Cher - Strong Enough (Official Music Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            
        ]
    },
    {
        category: 'სიყვარულზე', 
        songs : 
        [
            {name :"Elton John - Can You Feel The Love Tonight", file: 'Elton John - Can You Feel The Love Tonight (Lyrics) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Elvis Presley - Can't Help Falling In Love", file: "Elvis Presley - Cant Help Falling In Love (Audio).mp3", youtube:"",description:""}, 
            {name :"(Everything I Do) I Do It For You", file: '(Everything I Do) I Do It For You (Official Music Video).mp3', youtube:"",description:""}, 
            {name :"John Legend - All of Me ", file: 'John Legend - All of Me (Official Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"James Blunt - Goodbye My Lover", file: 'James Blunt - Goodbye My Lover [OFFICIAL VIDEO] (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Celine Dion - My Heart Will Go On", file: 'Celine Dion - My Heart Will Go On (HD).mp3', youtube:"",description:""}, 
            {name :"Mariah Carey - Without You", file: 'Mariah Carey - Without You (Live Video Version) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"NOTHING'S GONNA CHANGE MY LOVE FOR YOU (with lyrics) - GEORGE BENSON", file: "NOTHINGS GONNA CHANGE MY LOVE FOR YOU (with lyrics) - GEORGE BENSON (mp3cut.net).mp3", youtube:"",description:""}, 
            {name :"Joe Cocker - You Are So Beautiful", file: 'Joe Cocker - You Are So Beautiful (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Whitney Houston - I Will Always Love You", file: 'Whitney Houston - I Will Always Love You (Official 4K Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Aerosmith - I Don't Want to Miss a Thing", file: "Aerosmith - I Dont Want to Miss a Thing (Official HD Video).mp3", youtube:"",description:""}, 
            {name :"The Beatles - All My Loving", file: 'The Beatles - All My Loving (2009 Stereo Remaster).mp3', youtube:"",description:""}, 
            {name :"Bee Gees - How Deep Is Your Love", file: 'Bee Gees - How Deep Is Your Love (Official Video).mp3', youtube:"",description:""}, 
        ]
    },
    {
        category: 'პოპი', 
        songs : 
        [
            {name :"Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars", file: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars.mp3', youtube:"",description:""}, 
            {name :"Maroon 5 - Moves Like Jagger ft ", file: 'Maroon 5 - Moves Like Jagger ft (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Gwen Stefani - The Sweet Escape ", file: 'Gwen Stefani - The Sweet Escape (Closed Captioned) ft. Akon.mp3', youtube:"",description:""}, 
            {name :"Nelly - Dilemma (Official Music Video) ft", file: 'Nelly - Dilemma (Official Music Video) ft (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Blue Featuring Elton John - Sorry Seems To Be The Hardest Word ", file: 'Blue Featuring Elton John - Sorry Seems To Be The Hardest Word (Official Video).mp3', youtube:"",description:""}, 
            {name :"Shakira - Hips Don't Lie ft. Wyclef Jean", file: "Shakira - Hips Dont Lie ft. Wyclef Jean.mp3", youtube:"",description:""}, 
            {name :"Justin Timberlake - Cry Me A River ", file: 'Justin Timberlake - Cry Me A River (Official).mp3', youtube:"",description:""}, 
            {name :"Britney Spears - Oops! აი დიდ ით ეგეინ", file: 'Britney Spears - Oops! (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Michael Jackson - Bad ", file: 'Michael Jackson - Bad (Shortened Version).mp3', youtube:"",description:""}, 
            {name :"The Black Eyed Peas - Pump It", file: 'The Black Eyed Peas - Pump It (Official Music Video) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Rihanna - Umbrella ", file: 'Rihanna - Umbrella (Orange Version) (Official Music Video) ft (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Beyoncé - Crazy In Love ft. JAY Z", file: 'Beyoncé - Crazy In Love ft. JAY Z.mp3', youtube:"",description:""}, 

        ]
        
    },
    {
        category: 'დისკოოო', 
        songs : 
        [
            {name :"Kool & The Gang - Get Down On It", file: 'Kool & The Gang - Get Down On It (Official Video).mp3', youtube:"",description:""}, 
            {name :"Bee Gees - Stayin' Alive", file: "Bee Gees - Stayin Alive (Official Music Video).mp3", youtube:"",description:""}, 
            {name :"Gloria Gaynor - I Will Survive", file: 'Gloria Gaynor - I Will Survive [Official Video] 1978 [Audio iTunes Plus AAC M4A].mp3', youtube:"",description:""}, 
            {name :"Ottawan - Hands Up", file: 'Ottawan - Hands Up.mp3', youtube:"",description:""}, 
            {name :"Disco Dancer - Jimmi Jimmi Jimmi Aaja Aaja ", file: 'Disco Dancer - Jimmi Jimmi Jimmi Aaja Aaja Aaja Aaja Re Mere - Parvati Khan (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"ABBA - Gimme! Gimme! Gimme! (A Man After Midnight)", file: 'ABBA - Gimme! Gimme! Gimme! (A Man After Midnight) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Boney M Daddy cool", file: 'Boney M Daddy cool (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Village People - YMCA", file: 'Village People - YMCA OFFICIAL Music Video 1978.mp3', youtube:"",description:""}, 
            {name :"I Want You Back - The Jackson 5", file: 'I Want You Back - The Jackson 5.mp3', youtube:"",description:""}, 
            {name :"Modern Talking - Cheri Cheri Lady", file: 'Modern Talking - Cheri Cheri Lady (Official Music Video).mp3', youtube:"",description:""}, 
            {name :"BOYS BOYS BOYS-SABRINA", file: 'BOYS BOYS BOYS-SABRINA (Official Video 1987) (mp3cut.net).mp3', youtube:"",description:""}, 
            {name :"Earth, Wind & Fire - Boogie Wonderland", file: 'Earth, Wind & Fire - Boogie Wonderland (Official Video).mp3', youtube:"",description:""}, 
        ]
        
    },
];



var drinkCards = [
    {
        card: "6", color: "a" , task: "სვამს შენს მარცხნივ მჯდომი"
    },
    {
        card: "6", color: "g" , task: "სვამს შენს მარცხნივ მჯდომი"
    },
    {
        card: "Joker", color: "y" , task: "ჩამოთვალეთ აშშ-ს ქალაქები, ვინც გაიჭედება ის სვამს"
    },
    {
        card: "Joker", color: "j" , task: "ჩამოთვალეთ ევროპის ქვეყნები, ვინც გაიჭედება ის სვამს"
    },
    {
        card: "7", color: "j" , task: "სვამს შენს მარჯვნივ მჯდომი"
    },
    {
        card: "7", color: "g" , task: "სვამს შენს მარჯვნივ მჯდომი"
    },
    {
        card: "7", color: "y" , task: "სვამს შენს მარჯვნივ მჯდომი"
    },
    {
        card: "7", color: "a" , task: "სვამს შენს მარჯვნივ მჯდომი"
    },
    {
        card: "8", color: "j" , task: "აირჩიე პარტნიორი და ერთად დალიეთ"
    },
    {
        card: "8", color: "g" , task: "აირჩიე პარტნიორი და ერთად დალიეთ"
    },
    {
        card: "8", color: "y" , task: "აირჩიე პარტნიორი და ერთად დალიეთ"
    },
    {
        card: "8", color: "a" , task: "აირჩიე პარტნიორი და ერთად დალიეთ"
    },
    {
        card: "9", color: "j" , task: "ყოველ 9-იანზე ემატება დალევის წესი, წესის დარღვევის შემთვხვევაში ვისი ჯერიც არის სვამს დამატებით 1 ჭიქას"
    },
    {
        card: "9", color: "g" , task: "ყოველ 9-იანზე ემატება დალევის წესი, წესის დარღვევის შემთვხვევაში ვისი ჯერიც არის სვამს დამატებით 1 ჭიქას"
    },
    {
        card: "9", color: "y" , task: "ყოველ 9-იანზე ემატება დალევის წესი, წესის დარღვევის შემთვხვევაში ვისი ჯერიც არის სვამს დამატებით 1 ჭიქას"
    },
    {
        card: "9", color: "a" , task: "ყოველ 9-იანზე ემატება დალევის წესი, წესის დარღვევის შემთვხვევაში ვისი ჯერიც არის სვამს დამატებით 1 ჭიქას"
    },
    {
        card: "10", color: "j" , task: "აირჩიე სფერო, ჩამოთვალეთ შესაბამისი ბრენდები<br> ვინც გაიჭედება ის სვამს"
    },
    {
        card: "10", color: "g" , task: "აირჩიე სფერო, ჩამოთვალეთ შესაბამისი ბრენდები<br> ვინც გაიჭედება ის სვამს"
    },
    {
        card: "10", color: "y" , task: "აირჩიე სფერო, ჩამოთვალეთ შესაბამისი ბრენდები<br> ვინც გაიჭედება ის სვამს"
    },
    {
        card: "10", color: "a" , task: "აირჩიე სფერო, ჩამოთვალეთ შესაბამისი ბრენდები<br> ვინც გაიჭედება ის სვამს"
    },
    {
        card: "J", color: "j" , task: "ყველა ბიჭი სვამს"
    },
    {
        card: "J", color: "g" , task: "ყველა ბიჭი სვამს"
    },
    {
        card: "J", color: "y" , task: "ყველა ბიჭი სვამს"
    },
    {
        card: "J", color: "a" , task: "ყველა ბიჭი სვამს"
    },
    {
        card: "Q", color: "j" , task: "ყველა გოგო სვამს"
    },
    {
        card: "Q", color: "g" , task: "ყველა გოგო სვამს"
    },
    {
        card: "Q", color: "y" , task: "ყველა გოგო სვამს"
    },
    {
        card: "Q", color: "a" , task: "ყველა გოგო სვამს"
    },
    {
        card: "K", color: "j" , task: "ჩაასხი საერთო ჭიქაში სასურველი სასმელი<br> ბოლო K ვისაც ამოუვა სვამს ამ ჭიქიდან"
    },
    {
        card: "K", color: "g" , task: "ჩაასხი საერთო ჭიქაში სასურველი სასმელი<br> ბოლო K ვისაც ამოუვა სვამს ამ ჭიქიდან"
    },
    {
        card: "K", color: "y" , task: "ჩაასხი საერთო ჭიქაში სასურველი სასმელი<br> ბოლო K ვისაც ამოუვა სვამს ამ ჭიქიდან"
    },
    {
        card: "K", color: "a" , task: "ჩაასხი საერთო ჭიქაში სასურველი სასმელი<br> ბოლო K ვისაც ამოუვა სვამს ამ ჭიქიდან"
    },
    {
        card: "A", color: "j" , task: "დალიე ორი ჭიქა"
    },
    {
        card: "A", color: "g" , task: "დალიე ორი ჭიქა"
    },
    {
        card: "A", color: "y" , task: "დალიე ორი ჭიქა"
    },
    {
        card: "A", color: "a" , task: "დალიე ორი ჭიქა"
    },
    
];


$(document).ready(function(){
    $('body').removeClass("not-loaded");
    var current_game = 0;
    var songLimit = 0;



    
    $(".burger").click(function(){
        $(".nav").toggleClass("active");
        $(".burger").toggleClass("active");

    });
    
    function getRandomIveNever(){
        if(ivenever.length==0) return "<div class='ivenever-card'>ეს იყო ბოლო დავალება<br>ახალი თამაშის ასარჩევად დაბრუნდით მთავარ გვერდზე <button class='secondary-btn other-games'>სხვა თამაშების არჩევა</button></div>";

        var randNumber = Math.floor(Math.random() * ivenever.length);
        var cardValue = ivenever[randNumber];

        ivenever.splice(randNumber, 1);
        
        return "<div class='ivenever-card'><div>მე არასდროს <br>"+cardValue+"</div><button class='main-button'>შემდეგი პირობა</button></div>";

    }


    function getMostLikelyContent(){
        if(mostlikely.length==0) return "<div class='mostlikely-card'>ეს იყო ბოლო დავალება<br>ახალი თამაშის ასარჩევად დაბრუნდით მთავარ გვერდზე <button class='secondary-btn other-games'>სხვა თამაშების არჩევა</button></div>";

        var randNumber = Math.floor(Math.random() * mostlikely.length);
        var cardValue = mostlikely[randNumber];

        mostlikely.splice(randNumber, 1);
        
        return "<div class='mostlikely-card'><div>ყველაზე მეტად ვინ გგონია რომ,<br> "+cardValue+"</div><button class='main-button'>შემდეგი პირობა</button></div>";

    }

    function getSongContent(){


        var playSongs = [];
        songLimit = 16;
        if(songsList.length<4) return "<div class='ivenever-card active'>სამწუხაროდ მეტი სიმღერა აღარ გვაქვს<br>ახალი თამაშის ასარჩევად დაბრუნდით მთავარ გვერდზე<button class='secondary-btn other-games'>სხვა თამაშების არჩევა</button></div>";
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
        
        for(var i = 0; i<playSongs.length; i++){
            if(playSongs[i].songs.length<4) {
                playSongs.splice(i, 1);
                i--;
            }
        }
        songsList = songsList.concat(playSongs);



        string+='</div>';


        return string;
    }


    function openSongPopup(name,file){
        var string = "<div class='overlay'>";
        string +="<div data-name='"+name+"' class='song-popup'>დაიწყე მოსმენა, როცა ვინმე მიხვდება სიმღერას დააჭირე პაუზას<br> თუ გამოიცნო ყველა სვამს მის გარდა, თუ არა თვითონ სვამს!<br><br> <button class='main-button play'>დაწყება</button><br><button class='song-answer secondary-btn'>პასუხის ნახვა</button> </div>";
        
        string+="<audio id='audio'><source src=\""+file+"\" type='audio/mpeg'></audio></div>";
        return string;
    }

    function getSongAnswer(){
        return string = "პასუხი იყო " +$('.song-popup').data('name') + "<br> <button class='main-button exit-play'>სხვა სიმღერის არჩევა</button>";
    }


    function getSongRefreshText(){
        return string = "ეს იყო ბოლო სიმღერა, პასუხი იყო " +$('.song-popup').data('name') + "<br>  შეგიძლია სხვა სიმღერები ჩატვირთო ან სხვა თამაში აირჩიო <br><button class='main-button songs-refresh'>სხვა სიმღერების ჩარტვირთვა</button><br><button class='secondary-btn other-games'>სხვა თამაშების არჩევა</button>";

    }

    function getNextDrinkCard(){
        if(drinkCards.length==0) return "<div class='mostlikely-card active'>ეს იყო ბოლო დავალება<br>ახალი თამაშის ასარჩევად დაბრუნდით მთავარ გვერდზე <button class='secondary-btn other-games'>სხვა თამაშების ჩატვირთვა</button></div>";

        var randNumber = Math.floor(Math.random() * drinkCards.length);
        var cardValue = drinkCards[randNumber];

        drinkCards.splice(randNumber, 1);
        
        return "<div class='drinkcard-container'><div class='drink-card color-"+cardValue.color+"'><span>"+cardValue.card+"</span><span>"+cardValue.card+"</span><img src='images/"+cardValue.color+".png'></div><p>"+cardValue.task+"<br><button class='main-button'>შემდეგი კარტი</button></div></p></div>"
    }

    //---------------------------------------------------------------------MAIN PAGE
    //-----------------------------
    //-----------------------------
    $(".terms .checkbox").click(function(){
        $(".terms .checkbox").toggleClass("active");
        $("body").toggleClass("terms-done");
        $(".text-content .main-button").toggleClass("disabled");

    });



    $(".text-content .main-button").click(function(){
        window.history.pushState('choosegames', 'თამაშების არჩევა', '/choosegames');
        ga('send', {
            hitType: 'pageview',
            page: location.pathname
          });

        if(!$(".text-content .main-button").hasClass("disabled")) {
            $("body").addClass("select-games");
            $(".text-content").remove();
            setTimeout(function(){ $(".games-container").addClass("active") }, 1000);
        }

    });


    //---------------------------------------------------------------------GAME BUTTONS
    //-----------------------------
    //-----------------------------

    $("#ivenever").click(function(){
        current_game = 0;
        window.history.pushState('ivenever', 'მე არასდროს', '/ivenever');
        ga('send', {
            hitType: 'pageview',
            page: location.pathname
          });

        $(".games-container").removeClass("active");
        $(".rules").html(rules[current_game]);
        setTimeout(function(){ $(".rules-container").addClass("active"); }, 400);
        

    });

    $("#singsomething").click(function(){
        current_game = 3;
        window.history.pushState('singsong', 'იმღერე რამე', '/singsong');
        ga('send', {
            hitType: 'pageview',
            page: location.pathname
          });

        $(".games-container").removeClass("active");
        $(".rules").html(rules[current_game]);
        setTimeout(function(){ $(".rules-container").addClass("active"); }, 400);

    });


    $("#mostlikely").click(function(){
        current_game = 1;
        window.history.pushState('mostlikely', 'ვინ გგონინა', '/mostlikely');
        ga('send', {
            hitType: 'pageview',
            page: location.pathname
          });

        $(".games-container").removeClass("active");
        $(".rules").html(rules[current_game]);
        setTimeout(function(){ $(".rules-container").addClass("active"); }, 400);

    });

    $("#drinkcard").click(function(){
        window.history.pushState('cards', 'კარტები', '/cards');
        ga('send', {
            hitType: 'pageview',
            page: location.pathname
          });

        current_game = 2;
        $(".games-container").removeClass("active");
        $(".rules").html(rules[current_game]);
        setTimeout(function(){ $(".rules-container").addClass("active"); }, 400);

    });



    //---------------------------------------------------------------------RULE BUTTON
    //-----------------------------
    //-----------------------------


    $(".main-button.continue").click(function(){
        $(".rules-container").removeClass("active");
        if(current_game == 0){

            $(".game-container").html(getRandomIveNever());
            setTimeout(function(){ $(".ivenever-card").addClass("active"); }, 600);
        } else if(current_game==3){
            $(".game-container").html(getSongContent());
            
        } else if(current_game==1){
            $(".game-container").html(getMostLikelyContent());
            setTimeout(function(){ $(".mostlikely-card").addClass("active"); }, 600);
        } else if(current_game==2){
            $(".game-container").html(getNextDrinkCard());
            setTimeout(function(){ $(".drinkcard-container").addClass("active"); }, 600);
        }

        $(".go-back").addClass("active");
    });



    //---------------------------------------------------------------------PLAY NEXT BUTTONS
    //-----------------------------
    //-----------------------------
    $(".content").on("click",".ivenever-card .main-button", function(){
        $(".game-container").html(getRandomIveNever());
        setTimeout(function(){ $(".ivenever-card").addClass("active"); }, 600);
      });

    $(".content").on("click",".mostlikely-card .main-button", function(){
        $(".game-container").html(getMostLikelyContent());
        setTimeout(function(){ $(".mostlikely-card").addClass("active"); }, 600);
    });

    $(".content").on("click",".drinkcard-container .main-button", function(){
        $(".game-container").html(getNextDrinkCard());
        setTimeout(function(){ $(".drinkcard-container").addClass("active"); }, 600);
    });



    //---------------------------------------------------------------------SONG PLAYER BUTTONS
    //-----------------------------
    //-----------------------------
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
            songLimit--;
            if(songLimit==0){
                $(".song-popup").html(getSongRefreshText());
            } else {
                $(".song-popup").html(getSongAnswer());
            }



    });


    $("body").on("click",".song-popup .main-button.exit-play", function(){
        
            playStatus = 0;
            document.getElementById("audio").pause();
            $(".overlay").remove();
          
       
    });

    $("body").on("click",".song-popup .main-button.songs-refresh", function(){
        
        playStatus = 0;
        document.getElementById("audio").pause();
        $(".overlay").remove();
        $(".game-container").html(getSongContent());

   
    });

    $("body").on("click"," .other-games, .go-back, .logo", function(){
        if(!$("body").hasClass("terms-done")) return;
        window.history.pushState('choosegames', 'თამაშების არჩევა', '/choosegames');
        ga('send', {
            hitType: 'pageview',
            page: location.pathname
          });
        playStatus = 0;
        if(document.getElementById("audio"))document.getElementById("audio").pause();
        $(".overlay").remove();
        $(".game-container").text('');
        $(".game-container").removeClass('active');
        $(".games-container").addClass('active');
        $(".go-back").removeClass("active");

   
    });

   
});
