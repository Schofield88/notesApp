//document.getElementById('app').innerHTML = "Howdy"

var list = new NoteList

var view = new NoteListView(list)

(function (exports) {
  function NoteController(list){
    this.list = list
    var note = new Note("Favourite drink: seltzer")
    this.list.addNote(note)
    var view = new NoteListView(this.list)
  }

  NoteController.prototype = {

    appInsert: function () {
    document.getElementById('app').innerHTML = view.format  
    }
  };

})(this);
