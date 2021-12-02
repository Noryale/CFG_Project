(function() {

  var ingredients = [   /* add as many ingredients as possible - check what happens on console*/
    'broccoli',
    'potatoes',
    'onions',
    'bananas',
    'courgette',
    'beef',
    'chicken'
  ];

  var form = document.getElementById('search');
  var add = form.querySelector('.add');
  if (form) {
    /* delegated event
     * instead of adding event listeners to every button
     * we take advantage that events bubble up the dom tree
     * and catch the event in the parent node
     */
    form.addEventListener('click', function(event) {
      // we're gonna do something when clicking the form - then match specific parts of form to do x, y, z:
      // old school event target event.target.tagName.toLowerCase() === 'button' ; can be declared as below:
      var target = event.target;
      if (target.matches('.remove')) {
        form.querySelectorAll('fieldset').length > 1 && form.removeChild(target.parentNode); /* deletes search bar, legth > 1 so it doesn't delete the 1st bar */
      }
      if (target.matches('.add')) {
        if (form.querySelectorAll('fieldset').length < 6) { /* set maximum number of bars to 6 */
          var fieldset = form.children[0].cloneNode(true); /* clones 1st search bar */
          form.insertBefore(fieldset, add); 
          fieldset.querySelector('input').value = ''; 
        }
      }
      
  if (form) {
    if (target.matches('.cleartext')) {
      console.log('cleartext');
    }
  }
      




      //* trying to use "cleartext" button inside label, to clear text */
      //if (target.maches('.fa fa-times')) {
      //    fieldset.querySelector('clear').value = '';
      //}
    });


    form.addEventListener('input', function(event) {   /*event.inputType - shows what action took place i.e. delete, insert text, etc. - check console*/
      var value = event.target.value;
      console.log(event.inputType, value);
      var results = ingredients.filter(function(ingredient) {
        return value && ingredient.includes(value);
      });
      if (results.length) {
        console.log(results);
        results.forEach(function(result) {
            // searchedresult.push(??) ???
            //console.log(????); // insert result somewhere;
        });
      } else {
        // not found
        console.log('no results');
      }

      
    });
  }
})();

/* do error funcion - at least one ingredient for search */


/* work in progress 
// var results = 
//recipe.filter - gives array, add it to results.

//recipe.some
//iterate results' array with recipes/ingredients array.

//no need for "for for", just array methods. 


*/

/* search button on all recipes */