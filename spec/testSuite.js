(function(exports) {

var assert = {

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, expectedValue){
    if (assertionToCheck !== expectedValue) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal to " + expectedValue)
    }
  },

   includedInArray: function(arrayToCheck, value) {
     if (!arrayToCheck.includes(value)) {
       throw new Error("Assertion failed: " + value + " is not included in" + arrayToCheck)
     }
   }
};

var it = function(nameString, callback){
  try {
    callback()
    var text = "PASS: " + nameString
    var error = ""
     addtext(text, error, "passColour")
  }catch(err){
    text = "FAIL: " + nameString
    error = err.stack
    addtext(text, error, "failColour")
  }

  };

var addtext = function(text, error, passing){
  var text = document.createTextNode(text)
  var div = document.createElement("div")
  div.setAttribute("class", passing)
  div.append(text)
  div.append(document.createElement("br"))
  div.append(document.createElement("br"))
  div.append(error)
  body.append(div)
  body.append(document.createElement("br"))
}
exports.assert = assert
exports.it = it


})(this);
