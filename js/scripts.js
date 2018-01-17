$(document).ready(function() {
  $("#list").submit(function(event) {
      var userInputs = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
      userInputs.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);

      });
      userInput.sort();
      alert(userInput);
//("#shoppinglist ul-li")


});

  event.preventDefault();

});
