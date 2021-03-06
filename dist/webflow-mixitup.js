
// Future Use 
// class WebFlowMixItUpHelper {

//    constructor(
//       container, // = '.home-services-collection-list'
//       categoryClass //  '.w-dyn-item .' + categoryLabelClassName + ':not(.w-condition-invisible)'
//       ) {
//      this.mainContainer = container;
//      this.categoryLabelClassName = categoryClass;
//    }
 
//    sayHi() {
//      alert(this.name);
//    }
 
// }

// Prepare the item (cards) for filtering
// This involves creating appropriate filter-category-specific class names
// From a WebFlow-CMS-generated .item-category element.
// This element must be a direct descendent of the parent container, 
// which is typically the Collection Item itself (3rd level of the the Collection List).
function webFlowMixItUpPrepareItems(categoryLabelClassName)
{
   
   // Locate all categories
   // Ignore category items that are have been supressed using WebFlow's conditional visibility
   // But not those that are styled display: none 
   var itemArray = $('.w-dyn-item .' + categoryLabelClassName)
      .not('.w-condition-invisible'); // exclude items which are conditionally invisible 

   // Iterate and add class names 
   itemArray.each( function(elem) {

      $(this).parent().addClass(
//         createClassName($(this).innerText || $(this).innerContent)
         createClassName($(this).text())
      );


   });

}


// Prepare the filter buttons for filtering
// This involves creating appropriate a custom 'data-filter' property.
// Only needed if the buttons themselves are dynamically generated,
// otherwise you can do this manually.
function webFlowMixItUpPrepareFilterButtons(filterButtonClassName)
{

   // Locate all categories
   var categoryArray = $('.w-dyn-item .filter-button');
   
   // Iterate and add class names 
   categoryArray.each( function(elem) {
 
      $(this).attr('data-filter', 
//         '.' + createClassName(elem.innerText || elem.innerContent) // category class name 
            '.' + createClassName($(this).text())
         );

   }); 

}



// Creates an HTML-compliant class name from a text string
// for use as a MixItUp-selectable category. 
function createClassName(text)
{

   // Ensure there is a non-null class name
   if (!text) { 
      var text = 'empty';
      }

   // Replace invalid characters, lowercase and trim whitespace
   var conv = text.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
   var className = conv.replace (/ /g, "-")
                       .toLowerCase()
                       .trim();

   // Ensure first character is non-numeric 
   if (!isNaN(parseInt(className.charAt(0), 10))) {
      className = ("_" + className);
      } 

   return className;
}
