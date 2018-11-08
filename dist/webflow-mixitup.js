$(function() {

    console.log( "document ready!" );

    console.log( "starting item code" );


 // Creating dynamic elements classes from its categories:
 var itemArray = document.querySelectorAll('.w-dyn-item .item-category');
 
 itemArray.forEach( function(elem) {
    var text = elem.innerText || elem.innerContent;
    if (!text) { 
        var text = 'empty';
       }
    var conv = text.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
    var className = conv.replace (/ /g, "-")
                        .toLowerCase()
                        .trim();
    if (!isNaN(parseInt(className.charAt(0), 10))) {
              className = ("_" + className);
            }
    elem.parentElement.classList.add(className);
 
 });

    console.log( "starting button code" );

 var categoryArray = document.querySelectorAll('.w-dyn-item .filter-button');
 
 categoryArray.forEach( function(elem) {
    var text = elem.innerText || elem.innerContent;
    if (!text) { 
        var text = 'empty';
       }
    var conv = text.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
    var className = conv.replace (/ /g, "-")
                        .toLowerCase()
                        .trim();
    if (!isNaN(parseInt(className.charAt(0), 10))) {
              className = ("_" + className);
            }
    elem.setAttribute('data-filter', '.' + className);
 
 }); 

      // Set the reference to the container
      var containerEl = document.querySelector('.blog-collection-list');
 
      // Call the MixitUp plugin
      mixitup(containerEl);

    console.log( "init complete" );

 });
