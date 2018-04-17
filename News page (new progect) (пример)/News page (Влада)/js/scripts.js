$(function() {
  var searchInputValue = '';
  var categoriesFiltered = [];
  
  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  function onInit() {
    categoriesFiltered = clone(categories);
    
    renderNavMenu();
    searchMenu();
    categoryMenu();
    bigImg();
    renderCategories();
    galery();
    techies();
    fromDesk();
    edit();
    rightRight();
    bottomMenu();

  }

  function renderNavMenu() {
    renderLinksToTag('navMenu', headerNavItems);
    // var nav = $('#navMenu');
    // for (var i = 0; i < headerNavItems.length; i++) {
    // nav.append('<a href="' + headerNavItems[i].href + '">' + headerNavItems[i].name + '</a>');
    // }
  }

  function categoryMenu(){
    renderLinksToTag('categ', categoryItems);
    // var categoryVar = $('#categ');
    // for (var i = 0; i < categoryItems.length; i++)
    // {
    // categoryVar.append('<a href="' + categoryItems[i].href + '">' + categoryItems[i].name + '</a>')
    // }
  }

  function searchMenu(){
    renderLinksToTag('search', searchItems);
    var sear = $('#search');
    // for (var i = 0; i < searchItems.length; i++) {
    // sear.append('<a href="' + searchItems[i].href + '"><span><img src="' + searchItems[i].img + '"></span></a>');
    // }
 
  }

  // Universal function, which appends links from provided array to provided tag container by id
  // tagId - id of container where new links will be appended
  // tagItems - array of objects with links details formatted as [ {name: "Link Name", href:"" } ]
  function renderLinksToTag(tagId, tagItems){
    // Here we get access to our container tag for next append action
    var container = $('#' + tagId);
    // We iterate in provided from outside array of links
    for (var i = 0; i < tagItems.length; i++) {
      var linkInner = tagItems[i].img ? "<span><img src=" + searchItems[i].img + "></span>" : tagItems[i].name;
      container.append('<a href="' + tagItems[i].href + '">' + linkInner + '</a>')
    }
  }

  function bigImg(){
    var imG = $('#bigIm');
    var spoil = $('#bottomSpoiler')
    imG.append('<img src="' + bigImageItem[0].img + '">')
    spoil.append('<img id="spoiler" src="' + bigImageItem[1].img + '">')
  }

  // function newsBlocks(){
  //   var bl1= $('#block1');
  //   var bl2= $('#block2');
  //   bl1.append('<h2 class="' + title + '">' + newsBlocks.title + '</h2><button class="' + more + '">' + More + '</button>')
  // }
  function renderCategories() {
    if (searchInputValue) {
      for (var c = 0; c < categories.length; c++) {
        var cat = clone(categories[c]);
        cat.content = [];
        
        for (var i = 0; i < categories[c].content.length; i++) {
          var isFoundInText = categories[c].content[i].text.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1;
          var isFoundInStrongText = categories[c].content[i].strongText.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1;
          if (isFoundInText || isFoundInStrongText) {
            cat.content.push(categories[c].content[i]);
          }
        }
        categoriesFiltered[c] = clone(cat);
      }
    } else {
      categoriesFiltered = clone(categories);
    }
    
    for (var c = 0; c < categoriesFiltered.length; c++) {
      var tagItem = $('#' + categoriesFiltered[c].id);
      tagItem.html('');
      tagItem.append('<h2 class="' + "title" + '">' + categoriesFiltered[c].name + '</h2><button class="' + "more" + '">' + "More+" + '</button><button class="' + "rMore" + '>' + "More" + '</button>')
      for (var i = 0; i < categoriesFiltered[c].content.length; i++) {
        var item = categoriesFiltered[c].content[i];
        tagItem.append('<div class="' + "column" + '"><img src="' + item.image + '"><p class="' + "text1" + '"><strong>' + item.strongText + '</strong></p><p class="' + "text1" + '">' + item.text + '</p></div>');
      }
    }
  }

  function galery(){
    var gal = $('#block3');
    gal.append('<h2 class="' + "title" + '">' + galeryItems[0].name + '</h2><button class="' + "more" + '">' + "More+" + '</button>')
    for (var i = 1; i<galeryItems.length; i++){
      gal.append('<img src="' + galeryItems[i].img + '">')
    }
  }
  function techies(){
    var tech = $('#block4');
    tech.append('<h2 class="' + "title" + '">' + techItems[0].name + '</h2><button class="' + "more" + '">' + "More+" + '</button>')
    for (var i = 1; i<techItems.length; i++){
      tech.append('<div class="' + "columnTech" + '"><h3 class="' + "text1" + '"><strong>' + techItems[i].strongText + '</strong></h3><p class="' + "text1" + '">' + techItems[i].text + '</p></div>');
    }
  }

  function fromDesk()
  {
    var desk = $('#block5')
    desk.append('<h3 class="' + "title2" + '">' + deskItems[0].name + '</h3>')
    for (var i = 1; i<deskItems.length; i++){
      desk.append('<div class="' + "column" + '"><h3 class="' + "text1" + '"><strong>' + deskItems[i].strongText + '</strong></h3><p class="' + "text2" + '">' + deskItems[i].text + '</p>' + '<p class="' + "dottedcolumn" + '">'+ '<a href="" class="' + "pHref" + '">' + "Read More" + '</a>' +  "3 hours ago" + '<p></div>');
    }
    desk.append('<button class="'+ "rMore" + '">' + "More +" + '</button>')
  }
  function edit(){
    var edito = $('#block5')
    edito.append('<h3 class="' + "title2" + '">' + editorialItems[0].name + '</h3>')
    for (var i = 1; i<editorialItems.length; i++){
      edito.append('<div class="' + "column" + '"><img src="' + editorialItems[i].img + '"><p class="' + "text2" + '">' + editorialItems[i].text + '</p></div>');
    }
  }

  function rightRight(){
    var its = $('#rRights')
    its.append('<img src="'+ rightRightItems[0].img +'"><div class="login"><h1>' + "Войти в личный кабинет" + '</h1><form><p><input type="text" name="login" value="" placeholder="Логин или Email"></p><p><input type="password" name="password" value="" placeholder="Пароль"></p><p><input type="submit" name="commit" value="Войти"></p></form></div><div><h2 class="title2">' + rightRightItems[1].title + '</h2><div class="column2"><p class="text1"><strong>'+ rightRightItems[1].text1 +'</strong></p><p class="text1"><strong>' + rightRightItems[1].text2 + '</p><p class="text1"><strong>' + rightRightItems[1].text3 + '</p><button class="rMore">More +</button></div><img src="'+ rightRightItems[1].img2 +'"><h2 class="title2">' + rightRightItems[1].title2 + '</h2><img id="add" src="' + rightRightItems[1].img3 + '">')
  }
  function bottomMenu(){
    var bMenu = $('#menuBottom')
    var copy = $('#copyright')
    for (var i = 0; i< mBItems.length; i++)
    {
      bMenu.append('<li><a class="mBhref" href="' +mBItems[i].href + '">' + mBItems[i].category + '</a></li<span class="border">|</span>')
    }
    for (var a = 0; a< copyItems.length; a++) {
    copy.append('<p>'+ copyItems[a].text +'</p>')
    }
  }

  $('#searchInput').keyup(function(event) {
    searchInputValue = event.target.value;
    renderCategories();
  });

  onInit();
});