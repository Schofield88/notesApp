(function(exports) {

function NoteListView(list){
  this.list = list;
};

NoteListView.prototype.format = function () {
  var text = new String()
  this.list._notes.forEach(function(note){
    text +=("<li><div>" + note + "</div></li>")
  })
  return "<ul>" + text + "</ul>"
};

exports.NoteListView = NoteListView;

})(this);
