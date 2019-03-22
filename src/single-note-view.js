(function(exports){
  function SingleNote(note){
    this.note = note
  };

SingleNote.prototype = {

  noteOut: function () {
    return "<div>" + this.note._text + "</div>"
  }

};
  exports.SingleNote = SingleNote;

})(this);
