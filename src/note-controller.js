(function(exports) {
  function NoteController (notelist) {
    notelist.addNote(new Note("Favourite drink: seltzer"));
    notelist.addNote(new Note("Dave"));
    notelist.addNote(new Note("Vaping is awesome."));
    view = new NoteListView(notelist)

};

NoteController.prototype.viewinsert = function () {
  output = view.format()
  document.getElementById("app").innerHTML = output};

  exports.NoteController = NoteController;

})(this);
