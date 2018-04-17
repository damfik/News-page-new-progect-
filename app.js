// 'use strict' is used to say javascript check all mistakes and fall with errors
'use strict';

// $(function() {}); This construction is used to start JS code ONLY after all DOM is loaded and all HTML elements are available to use. $ - JQuery library element.
$(function() {
  // We apply array with navHeader to inner variable for next usage. Needed to keep "navHeader" untouched to be reused in future.
  var navHeaderItems = navHeader;
  // "onInit" is just a function with custom name to be invoked when is needed. This name could be anything, like "startProgram" or "doSomething".
  function onInit() {
    // We invoke rendering header navigation menu.
    renderNavHeaderMenu();
  }

  // Function of rendering header navigation menu.
  function renderNavHeaderMenu() {
    // <div class="menu" id="navHeaderMenu"> All our links will be appended here... </div>
    // By pointing to tag id "navHeaderMenu" with JQuery ( $('#navHeaderMenu') ), we get access to tag "<div class="menu" id="navHeaderMenu"></div>" from DOM
    // and can manipulate by what is inside and all other properties, like styles... This can be done by using variable "nav".
    var nav = $('#navHeaderMenu');
    // Loop that iterates in "navHeaderItems" array with objects that contain required information about each link in future navigation menu.
    for (var i = 0; i < navHeaderItems.length; i++) {
      // With "built in" JQuery function "append" we fullfil "<div class="menu" id="navHeaderMenu"></div>" tag inner space 
      // with new "<a></a>" link tags, with required properties and values taken from "navHeaderItems" array items by index. 
      // Example: navHeaderItems[0] will contain { name: "Home", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83" }
      nav.append('<a href="' + navHeaderItems[i].href + '" target="_blank">' + navHeaderItems[i].name + '</a>');
    }
  }

  // In this point all JS functions, variables, constants and all other JS stuff is available to use. 
  // By running "onInit();" function, we invoke code inside it, that should be done at the very first application (site) load.
  onInit();
  
});


                                                      //ОПТИМІЗАЦІЯ ПОВТОРЮВАНОГО КОДУ!!!



// 'use strict' is used to say javascript check all mistakes and fall with errors
'use strict';

// $(function() {}); This construction is used to start JS code ONLY after all DOM is loaded and all HTML elements are available to use. $ - JQuery library element.
$(function() {
  // We apply array with navHeader to inner variable for next usage. Needed to keep "navHeader" untouched to be reused in future.
  var navHeaderItems = navHeader;
  var sameBoxesFiltered = sameBoxes;
  var searchInputValue = '';

  function onInit() {
    // We invoke rendering header navigation menu.
    renderMainHeaderMenu();
    renderNavHeaderMenu();
    renderNavFooterMenu();
    renderAllSameBoxes();
    socialMenu();
    mainImg();
    gallery();
    tech();
    desk();
    edit();
    renderPopular();
  }

  // Universal function of rendering link tags to target container tag by id.
  // tagId - "string" id of target container tag
  // tagItems - array of objects with link details. Format [ { href: '#', name: 'Some Link Name' } ]
  function renderLinksToTag(tagId, tagItems) {
    // <div class="menu" id="' + tagId + '"> All our links will be appended here... </div>
    // By pointing to tag id "' + tagId + '" with JQuery ( $('#' + tagId + '') ), we get access to tag "<div class="menu" id="' + tagId + '"></div>" from DOM
    // and can manipulate by what is inside and all other properties, like styles... This can be done by using variable "tag".
    // Here we dynamicaly define target container for our links.
    // https://www.w3schools.com/jquery/jquery_syntax.asp
    var tag = $('#' + tagId);
    // Loop that iterates in "tagItems" array with objects that contain required information about each link in future navigation menu.
    for (var i = 0; i < tagItems.length; i++) {
    // With "built in" JQuery function "append" we fullfil "<div class="menu" id="' + tagId + '"></div>" tag inner space 
    // with new "<a></a>" link tags, with required properties and values taken from "tagItems" array items by index. 
    // Example: tagItems[0] will contain { name: "Home", href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%BD_%D0%94%D0%BE%D1%83" }
      var link =  tagItems[i].image ? "<span><img src=" + socialItems[i].image + " class=" + socialItems[i].class + "></span>" : tagItems[i].name;
      tag.append('<a href="' + tagItems[i].href + '" target="_blank">' + link + '</a>');
    }
  }
  
  function renderMainHeaderMenu() {
    renderLinksToTag('mainHeaderMenu', mainHeader);
  }

  // Invoke function for rendering only "navHeaderMenu"
  function renderNavHeaderMenu() {
  // Call function "renderLinksToTag" and give it required parameters for success rendering.
  // 'navHeaderMenu' - id string value of target container
  // navHeaderItems - array of objects with links details. Format [ { href: '#', name: 'Some Link Name' } ]
    renderLinksToTag('navHeaderMenu', navHeader);
  }

  function renderNavFooterMenu() {
     renderLinksToTag('navFooterMenu', footerMenu);
  }

  function socialMenu() {
    renderLinksToTag('socialNetwork', socialItems);
  }


  function mainImg() {
    var image = $('#main-img');
    // "append" is adding items to end of container, after all previous items
    // "prepend" is adding items to start
    // reason is that our image should appear before <div class="text"><p>Slider caption text</p></div>
    // in other case (append) this tag will be invisible and hidden
    
    // <div class="main-imagine-container" id="main-img">
    //   <!-- <img src="https://wallpaperscraft.ru/image/paren_serfing_volna_sportsmen_voda_27785_3840x2160.jpg"> -->
    //   <div class="text"><p>Slider caption text</p></div> 
    // </div>    
    image.prepend('<img src="' + headImage[0].link + '">');
  }

  function renderSameBox(box) { // box === { containerTagId: 'containerTagIdHere', name: 'Box name here', content: [ { image: '#', boldText: 'Text1', text: 'Text2' } ] }
    //console.log('4', box);
    var boxContainer = $('#' + box.containerTagId);
    boxContainer.html(''); // before each render we HAVE to clear parent container to prevent duplication of content
    boxContainer.append(
      '<div class="left-content-header">' +
        '<h4 class="news-title">' + box.name + '</h4>' +
        '<button>MORE</button>' +
      '</div>');
    for (var i = 0; i < box.content.length; i++) {
      boxContainer.append(
        '<div class="left-side-content">' +
          '<div class="recent-img">' + 
            '<img src="' + box.content[i].image + '">' +
          '</div>' +
          '<p class="inner-text">' +
            '<span>' + box.content[i].boldText + '</span> ' + box.content[i].text +
          '</p>' +
          '<div class="left-side-actions">' +
            '<button>READ MORE</button>' +
          '</div>' +
        '</div>'
      );
    }
  }

  // Function that iterates in array of object with similar structure to decrease complexity of single function
  // in our case this gives ability to separate two loops throuht arrays with data
  function renderAllSameBoxes() {
    //console.log('3');
    
    // Iterate in array of objects and get one with content for next render in universal function
    for (var i = 0; i < sameBoxesFiltered.length; i++) {
      renderSameBox(sameBoxesFiltered[i]); // { containerTagId: 'containerTagIdHere', name: 'Box name here', content: [ { image: '#', boldText: 'Text1', text: 'Text2' } ] }
    }
  }

  // Filtering function
  // expect "searchText" with type "string" as parameter
  // use "searchText" to filter and keep only items that contain "searchText"
  function filterSameBoxes(searchText) {
    //console.log('2 searchText: ', searchText);
    
    // Check if we have any value in "searchText"
    if(searchText) {
      // declare variable "filtered" with empty array for next usage with gained result of filtering
      var filtered = [];
      // iterate in ORIGINAL data, that contains all unfiltered items
      for(var i = 0; i < sameBoxes.length; i++) {
        // declare "oneBox" variable and apply original content for better code view and understanding
        var oneBox = sameBoxes[i]; // { containerTagId: 'containerIdForContent', name: 'Block name. Displayed above content.', content: [ { image: 'http://imate.url.com', boldText: 'Some main text', text: 'Full text description' } ] }
        // declare "oneBoxFiltered" variable and apply COPY of original data to prevent data binding
        var oneBoxFiltered = clone(oneBox);
        // in copy of original object we replace "content" property with empty array
        // we will push found items to this array
        oneBoxFiltered.content = [];
        // iterate througth original object content to compare its properties with "searchText"
        for (var c = 0; c < oneBox.content.length; c++) {
          // we apply content of one object to variable with meaningful naming
          var oneBoxContentItem = oneBox.content[c]; // { image: 'http://imate.url.com', boldText: 'Some main text', text: 'Full text description' }
          // "foundInText" is a variable that will contain ONLY boolean value "true" or "false"
          // oneBoxContentItem.text - contains "string" value of our content. Will be used to compare with "searchText"
          // toLowerCase() - is converting any source "string" to "lower case". Example: "SOME ValuE" --> "some value"
          // "Text with someValue".indexOf("someValue") - always returns "integer" value (number) that is in range from -1 (one) to infinit value, step 1
          // if returned value is equal or more than 0 (zero), it means that "someValue" exist in target string
          // but if returned value is equal to -1, it means that "someValue" IS NOT found in original target string
          // so "Original VALUE".toLowerCase().indexOf("gin".toLowerCase()) will be 3 (number three) because "gin" exist in "Original VALUE" and index of first existing character is 3
          // if js expression found "searchText" in oneBoxContentItem.text, then boolean "true" is applied to "foundInText" variable
          var foundInText = oneBoxContentItem.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
          var foundInBoldText = oneBoxContentItem.boldText.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
          // we check if "foundInText" or "foundInBoldText" have boolean "true" and push full object with found values
          if(foundInText || foundInBoldText) {
            // push full object with found values
             oneBoxFiltered.content.push(oneBoxContentItem);
          }
        }
        // push filtered items to array with end results for next using in render of HTML
        filtered.push(oneBoxFiltered);
      }
      // apply temporary array with results to target "sameBoxesFiltered" global variable
      sameBoxesFiltered = filtered;
    } else { // if "searchText" is empty or "false" we just apply all unfiltered items to target variable
      sameBoxesFiltered = clone(sameBoxes);
    }
    // invoke render of filtering results
    renderAllSameBoxes();
  }

  function gallery() {
    var gal = $('#gallery');
    gal.append(
      '<div class="left-content-header">' +
          '<h4 class="news-title">' + galleryItems.name + '</h4>' +
          '<button>MORE</button>' +
      '</div>');
    for (var i = 0; i < galleryItems.content.length; i++) {
      gal.append('<div class="left-side-content"><div class="recent-img"><img src="' + galleryItems.content[i].link + '"></div>');
    }
  }

  function tech() {
    var technic = $('#techNews');
    technic.append('<div class="left-content-header"><h4 class="news-title">' + techItems[0].name + '</h4><button>MORE</button></div>');
    for (var i = 0; i < techItems.length; i++) {
      technic.append('<div class="left-side-content-container">' + 
                        '<p class="inner-text">' + 
                            '<span>' + techItems[i].title + '</span>' + techItems[i].content +
                        '</p>' + 
                        '<p class="comments">' +
                            ' by <span>' + techItems[i].author + '</span> | ' + techItems[i].commentsCount + ' comments' +
                        '</p>' +
                     '</div>');
    }
  }

function desk() {
    var deskN = $('#deskNews');
    deskN.append('<div class="central-part-header"><h4 class="central-title">' + deskItems.name + '</h4></div>');
    for (var i = 0; i < deskItems.content.length; i++) {
      deskN.append('<div class="central-text-box">' + 
                      '<p class="central-inner-text">' +
                        '<span>' + deskItems.content[i].title + '</span>' + deskItems.content[i].text + 
                      '</p>' + 
                      '<div class="time-btn">' + 
                        '<button class="btn">READ MORE</button>' + 
                        '<span class="time">3 hours ago </span>' +
                      '</div>' + 
                   '</div>');
    } 
  }

  function edit() {
    var editNews = $('#editorialNews');
    editNews.append('<div class="central-part-header"><h4 class="central-title">' + editorialItems.name + '</h4></div>');
    for(var i = 0; i < editorialItems.content.length; i++) {
      editNews.append('<div class="gallery-content">' +
                          '<div class="gal-img"><img src="' + editorialItems.content[i].link + '">' +
                        '</div>' +
                          '<div class="sub-text"><p>' + editorialItems.content[i].text + '</p>' +
                        '</div>' + 
                      '</div>');
    }
  }

  function renderPopular() {
    var popularContainer = $('#popularContainer');
    for(var i = 0; i < rightContentItems.length; i++) {
      popularContainer.prepend(
        '<div class="popular-text-box">' +
          '<span class="current-time">' + rightContentItems[i].date + '</span>' +
          '<span>' + rightContentItems[i].text + '</span>' +
          '<button>READ MORE</button>' +
        '</div>'
      );
    }
    popularContainer.prepend('<div class="popular-header"><span>POPULAR</span></div>');
  }

  // Function for breaking dependencies between objects
  // reason: prevent mutation of original object if its copy was changed in any moment of time in code
  // obj - expected to be any js object including array. 
  // example of obj: { id: 12345, firstName: "Vasya", lastName: "Pupkin" }
  // Example of "mutation" that we want to prevent:
  //
  // var originalObj = { slogan: "I am awesome!" };
  // var copyObject = originalObj;
  // copyObject.slogan = "I am a... idiot";
  //
  // we expected "originalObj" to be --> { slogan: "I am awesome!" }
  // but it became --> { slogan: "I am a... idiot" }
  // because after we apply "originalObj" to "copyObject", JS created "data binding", and changing of one object if reflected in another
  // 
  // so for this purpose we 
  //   1) convert original object to string
  //   2) convert string to object that DON'T have any data binding
  //   3) apply clear object to target
  function clone(obj) {
    // we check if obj contain any value
    // if yes, we do next:
    //   1) JSON.stringify(obj) - convert original object to "string": { id: 12345, firstName: "Vasya", lastName: "Pupkin" } --> '{id:12345,firstName:"Vasya",lastName:"Pupkin"}'
    //   2) JSON.parse('{id:12345,firstName:"Vasya",lastName:"Pupkin"}') - convert ONLY VALID object string to normal js object --> { id: 12345, firstName: "Vasya", lastName: "Pupkin" }
    //   ... in case if JSON.parse got invalid object string, it throw error to console and any js code stops its work.
    // if no, we just return original value back
    return obj ? JSON.parse(JSON.stringify(obj)) : obj;
  }

  // By pointing on "newsSearchInput" id of target tag
  // from jQuery we get access to actions on this tag
  // listen on "keyup" event
  // and receive full "event" with complete properties of tag with "newsSearchInput" id
 $('#newsSearchInput').keyup(function(event) {
   //console.log('1');
   
   // event object has "target" property with "value" of our input
   // it contains text edited by user to "input"
   // we apply "string" result of "event.target.value" to "searchInputValue" for next use in code
   searchInputValue = event.target.value;
   // invoke "filterSameBoxes" function and give it "searchInputValue" as expected "string" value for filtering
   filterSameBoxes(searchInputValue);
   // the end :)
 });

  // In this point all JS functions, variables, constants and all other JS stuff is available to use. 
  // By running "onInit();" function, we invoke code inside it, that should be done at the very first application (site) load.
  onInit();
  
});


































