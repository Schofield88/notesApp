(function(exports) {

function NoteListView(notelist){
  this.list = notelist;
};

NoteListView.prototype.format = function () {
  var text = new String()
  this.list._notes.forEach(function(note){
    text +=("<li><div>" + note._text + "</div></li>")
  })
  return "<ul>" + text + "</ul>"
};

exports.NoteListView = NoteListView;

})(this);
