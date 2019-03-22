it('returns a string of HTML something that is supposed to be a note model', function(){
  var note = { _text: "Vaping is awesome."}
  var single = new SingleNote(note);
  assert.isEqual(single.noteOut(), "<div>Vaping is awesome.</div>")
});
