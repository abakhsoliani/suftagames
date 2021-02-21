var rules = [
    'ამ თამაშს ზედმეტი წარდგენა არ ჭირდება',
    'ყოველ ჯერზე ამოვა პირობა, ვისაც თვლით, რომ ყველაზე მეტად ემთხვევა პირობას <br> იმისკენ გაიშვირეთ თითი, ვინც ყველაზე მეტ თითს მიიღებს სვამს',
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
    'იქნება მდიდარი',
    'გახდება ცნობილი',
    'დაქორწინდება პირველი',
    'იცოცხლებს ყველაზე მეტხანს',
    'მოკვდება ყველაზე ადრე',
    'შეუერთდება სექტას',
    'ზომბი აპოკალიფის დროს მოკვდება პირველი',
    'ზომბი აპოკალიფსს გადაურჩება',
    'სამი კვირის მანძილზე არ იბანავებს',
    'დაქორწინდება ერთი კვირის გაცნობილ ადამიანზე',
    'წავა სტრიპტიზ კლუბში',
    'გაძარცვავს ბანკს',
    'იქნება ღარიბი',
    'უყურებს პორნოს ახალგაღვიძებულზე',
    'ჩაიჭრება მარტივ ტესტში',
    'მიატოვებს ყველაფერს და წავა ხანგრძლივ მოგზაურობაში',
    'ეცმევა ერთი და იგივე მაისური 1 კვირის მანძილზე',
    'გაიცინებს ყველაზე უხერხულ მომენტში',
    'წაიკითხავს ყველა წიგნს ბიბლიოთეკაში',
    'გაავრცელებს ჭორებს',
    'დაავიწყდება შეყვარებულის დაბადების დღე',
    'ერთდროულად ორ ადამიანთან გააბამს რომანს',
    'მიიღებს ნობელის პრემიას',
    'ნახევარი საათიც ვერ შეინახავს საიდუმლოს',
    'დაიფარავს სხეულს ტატუებით',
    'უღალატებს მეორე ნახევარს',
    'იქნება ალკოჰოლიკი',
    'გახდება მამამო/მონაზონი',
    'ეყოლება ბევრი კატა/ძაღლი სახლში',
    'ვერ გაიხსენებს სად დააპარკინგა მანქანა',
    'გაძლებს საჭმლის გარეშე სამი დღე',
    'იქნება ძალიან ცუდი დეტექტივი',
    'იქნება საშინელი მსახიობი',
    'შეიძლება აღმოჩნდეს ციხეში ',
    'მოიპარავს სახლიდან ძვირფას ნივთებს',
    'არის დეპრესიული',
    'იგინება ყველაზე მეტს',
    'მოკლავს ადამიანს ფულის სანაცვლოდ',
    'არის ძუნწი',
    'ხელგაშლილია',
    'დრამა ქვინია',
    'ბევრს იტყუება',
    'გამოუსწორებელი რომანტიკოსია',
    'სარკესთან ყველაზე დიდი დროს ატარებს',
    'ხშირად დადის ,,საროსკიპოში’',
    'ყოველთვის აგიბამთ მხარს არაადეკვატურ გადაწყვეტილებებში',
    'ყველაზე სამართლიანია',
    'ყველაზე უსამართლოა',
    'ყველაზე უყვარს წუწუნი',
    'არცერთი თურქული სერიალი არ გამოუტოვებია',
    'ფარულ ვნებას დღემდე უყურებს',
    'მომავალი ერთი წლის განმავლობაში ყველაზე მეტ პარტნიორს გამოიცვლის',
    'ცუდ კულინარებს შორის უარესი კულინარია',
    'მეგობარს დაბადების დღის საჩუქრად საკუთარი ნივთებიდან აურჩევს რამეს და ისე გამოძვრება',
    'უნდა იყოს ფსიქიატრიულის პაციენტი',
    'ილაპარაკებს მთელი დღე და არ დაიღლება',
    'ყველაფერს კარგავს',
    'გველის ხორცს დაუფიქრებლად შეჭამს',
    'ჯასტინ ბიბერის კონცერტზე წავა',
    'თავი ფილოსოფოსი გონია 1 ჭიქის მერე',
    '5 ლარისთვის ყველაფერს იზამს',
    'არ იცის ჩრდილოეთი საითაა',
    'ყურადღების ცენტრში ყოფნით ტკბება',
    'რაღაცებს იმიტომ აკეთებს, რომ  სთორიში დადოს',
    'ინსტაგრამზე ლაიქებს ყიდულობს',
    'მსუქანი ბავშვი იყო',
    'უნდა იყოს ციხეში',
    'საშინელი მუსიკალური გემოვნება აქვს',
    'აქვს სექსი კურიერის ყურების დროს',
    'მღერის აბაზანაში',
    'ჯოჯოხეთში მოხვდება',
    'იღბლიანია',
    'იუმორის გრძნობა არ აქვს',
    'გამოსავალს ყველა სიტუაციაში იპოვის',
    'ყველა ახალგაცნობილს ეჭვის თვალით უყურებს',
    'ყოველთვის ტრაკში პეროთი იცხოვრებს',
    'პონტის გამო გაგყიდით',
    '60-იანებში ჰიპი იქნებოდა',
    'რომ შეეძლოს საკუთარ თავთან ექნებოდა სექსი',
    'პირველად ნახვისას ცუდ შთაბეჭდილებას ტოვებს',
    'ერთი და იგივე ისტორიას ყოველ ნახვაზე მოგიყვება',
    'შეუძლია ყველგან დაიძინოს',
    'ორშაბათიდან დიეტას იწყებს',
    'ბუდისტი გახდება',
    'ყველგან აგვიანებს',
    'მშიერი დარჩება, მარა აიფონ ბოლოს მაინც იყიდის',
    'ბასიანის ტატუს გაიკეთებს',
    'საზღვარზე გარეგნობის გამო გააჩერებენ',
    'მომავალი 1 კვირის მანძილზე სკანდალში გაეხვევა',
    'ყოველ დალევაზე 1 კარაოკეს მაინც Მღერის',
    'ბევრ საიდუმლოს ინახავს',
    'ხმაურით ჭამს',
    'ჯუჯღუნა მოხუცი იქნება',
    'ძაან არტია',
    'მეტამფეტამინის ლაბორატორიას გააკეთებს',
    'გახდება პრეზიდენტი',

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
        
        string+="<audio id='audio'><source src='"+file+"' type='audio/mpeg'></audio></div>";
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


    $("#mostlikely").click(function(){
        current_game = 1;
        $(".games-container").removeClass("active");
        $(".rules").html(rules[current_game]);
        setTimeout(function(){ $(".rules-container").addClass("active"); }, 400);

    });

    $("#drinkcard").click(function(){
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

    $("body").on("click"," .other-games, .go-back", function(){
        
        playStatus = 0;
        if(document.getElementById("audio"))document.getElementById("audio").pause();
        $(".overlay").remove();
        $(".game-container").text('');
        $(".game-container").removeClass('active');
        $(".games-container").addClass('active');
        $(".go-back").removeClass("active");

   
    });

   
});
