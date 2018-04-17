var timeNow = new Date();

const navHeader = [
  { name: "Home", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83" },
  { name: "About", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise" },
  { name: "Contact us", href:"http://www.nvidia.com.ua/object/geforce-experience-ru.html" },
  { name: "Subscribe", href:"https://www.theatlantic.com/education/" },
  { name: "Login", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise" }
];

const socialItems = [
	{image: "./image/2.png", href: "http://www.nvidia.com.ua/object/geforce-experience-ru.html", class: "twitter_icon"},
	{image: "./image/3.png", href: "https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise", class: "facebook_icon"},
	{image: "./image/4.png", href: "https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise", class: "wifi_icon"}


//var social = "<a href="' + items[i].href + '"><img src="' + items[i].image + '" class="' + items[i].class + '"></a>";

];

const mainHeader = [
	{name: "WORLDNEWS", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83"},
	{name: "SPORTS", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise"},
	{name: "TECH", href:"http://www.nvidia.com.ua/object/geforce-experience-ru.html"},
	{name: "BUSINESS", href:"https://www.theatlantic.com/education/"},
	{name: "MOVIES", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise"},
	{name: "ENTERTAINMENT", href:"http://www.nvidia.com.ua/object/geforce-experience-ru.html"},
	{name: "CULTURE", href:"https://www.theatlantic.com/education/"},
	{name: "BOOKS", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise"},
	{name: "CLASSIFIEDS", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83"}
];

const headImage = [	
	{link: "https://wallpaperscraft.ru/image/paren_serfing_volna_sportsmen_voda_27785_3840x2160.jpg"}
];

const sameBoxes = [
	{
    containerTagId: 'fromAroundTheWorld',
		name: "FROM AROUND THE WORLD",
		content: [
			{
        image: "https://www.time-sport.com/media/synolia/slider/image/SLIDER_HOME_1325x1024_12.jpg", 
				boldText: "Title one", 
				text: "Some dummy text for search"
      },
			{
        image: "http://s.ill.in.ua/i/news/350x252/356/356716.jpg", 
				boldText: "We desided to write here some other title",
				text: "and a bit of text to be different."
      },
			{
        image: "http://grfx.cstv.com/photos/schools/conn/sports/m-hockey/auto_vipgiant_w/12326934.jpeg", 
				boldText: "But... not everything can differ", 
				text: "Some text should stay the same."
      }
		]
	},
	{
    containerTagId: 'latestArticles',
		name: "LATEST ARTICLES",
		content: [
			{
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRMXyLhQ9AcfGzOXbnnlpAqarqISUzhBOMJGzTBI5YL9ej-rf", 
				boldText: "So we became mad!!!!!", 
				text: "Fuck!"
      },
			{
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvx4YLbthMz-ZHF5w2sWLk85MEFM6V8ATcaFZjfjyYlgWwZvP_w", 
				boldText: "What I did just now?", 
				text: "Don't mind, it's ok."
      },
			{
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx701Y4cD1TfwVJ0KTNod49D7Mw4zFFwaKcG8tMPA355QyB_1eOg", 
				boldText: "Day comes to end.", 
				text: "And all good people goes to bed."
      }
		]
	}
];

const galleryItems = {
    name: 'GALLERY',
    content: [
      {link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRMXyLhQ9AcfGzOXbnnlpAqarqISUzhBOMJGzTBI5YL9ej-rf"},
      {link: "https://www.time-sport.com/media/synolia/slider/image/SLIDER_HOME_1325x1024_12.jpg"},
      {link: "http://s.ill.in.ua/i/news/350x252/356/356716.jpg"},
      {link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvx4YLbthMz-ZHF5w2sWLk85MEFM6V8ATcaFZjfjyYlgWwZvP_w"},
      {link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx701Y4cD1TfwVJ0KTNod49D7Mw4zFFwaKcG8tMPA355QyB_1eOg"},
      {link: "http://grfx.cstv.com/photos/schools/conn/sports/m-hockey/auto_vipgiant_w/12326934.jpeg"}
    ]
  };

const techItems = [
    {
      name: "TECH NEWS",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      content: "Maecenas a sapien at lectus pharetra varius. Quisque posuere at urna vel suscipit.",
      author: 'John Doe',
      commentsCount: 29
    },
    {
      name: "TECH NEWS",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      content: "Maecenas a sapien at lectus pharetra varius. Quisque posuere at urna vel suscipit.",
      author: 'John One',
      commentsCount: 39
    },
    {
      name: "TECH NEWS",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      content: "Maecenas a sapien at lectus pharetra varius. Quisque posuere at urna vel suscipit.",
      author: 'John Two',
      commentsCount: 19
    },
    {
      name: "TECH NEWS",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
      content: "Maecenas a sapien at lectus pharetra varius. Quisque posuere at urna vel suscipit.",
      author: 'John Three',
      commentsCount: 129
    }
];

const deskItems = {
		name: "FROM THE DESK",
    	content: [
      		{title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", text: "Maecenas a sapien at lectus pharetra varius. Quisque posuere at urna vel suscipit." },
      		{title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", text: "Maecenas a sapien at lectus pharetra varius. Quisque posuere at urna vel suscipit." },
      		{title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", text: "Maecenas a sapien at lectus pharetra varius. Quisque posuere at urna vel suscipit." }
    ]
};
  

const editorialItems = 
	{
		name: "EDITORIAL",
		content: [
			{link: "https://www.time-sport.com/media/synolia/slider/image/SLIDER_HOME_1325x1024_12.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
			{link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvx4YLbthMz-ZHF5w2sWLk85MEFM6V8ATcaFZjfjyYlgWwZvP_w", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
			{link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx701Y4cD1TfwVJ0KTNod49D7Mw4zFFwaKcG8tMPA355QyB_1eOg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
			{link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRMXyLhQ9AcfGzOXbnnlpAqarqISUzhBOMJGzTBI5YL9ej-rf", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
	]
};

const rightContentItems = [
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: 'Sept 20th 2045' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: 'Sept 21th 2045' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: 'Sept 22th 2045' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: 'Sept 23th 2045' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', date: 'Sept 24th 2045' }
];

const footerMenu = [
	{name: "world news", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83"},
	{name: "sports", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise"},
	{name: "tech", href:"http://www.nvidia.com.ua/object/geforce-experience-ru.html"},
	{name: "business", href:"https://www.theatlantic.com/education/"},
	{name: "Movies", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise"},
	{name: "entertainment", href:"http://www.nvidia.com.ua/object/geforce-experience-ru.html"},
	{name: "culture", href:"https://www.theatlantic.com/education/"},
	{name: "Books", href:"https://en.wikipedia.org/wiki/The_Areas_of_My_Expertise"},
	{name: "classifieds", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83"},
	{name: "biogs", href:"https://www.theatlantic.com/education/"}
];

