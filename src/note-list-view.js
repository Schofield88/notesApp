(function(exports) {

function NoteListView(notelist){
  this.list = notelist;
};

NoteListView.prototype.format = function () {
  var text = new String()
  this.list._notes.forEach(function(note){
    console.log(note);
    text +=("<li><div>" + note._text.substring(0,20) + "</div></li>")
  })
  return "<ul>" + text + "</ul>"
};

exports.NoteListView = NoteListView;

})(this);
