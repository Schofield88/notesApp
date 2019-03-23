it("an empty string is outputted when nothing is in the notelist", function (){
  var noteList = { _notes: [] }
  var noteListView = new NoteListView(noteList);
  assert.isEqual(noteListView.format(), "<ul></ul>")
});

it("produces a correctly formatted output", function (){
  var note1 = { _text: "Text for formatting which now needs to be a lot longer" }
  var note2 = { _text: "Text for formatting 2 which also needs to be a lot longer" }
  var noteList = { _notes: [note1,note2] }
  var noteListView = new NoteListView(noteList);
  //noteListView.list.addNote("Text for formatting which now needs to be a lot longer")
  //noteListView.list.addNote("Text for formatting 2 which also needs to be a lot longer")
  text = "<ul><li><div>Text for formatting </div></li><li><div>Text for formatting </div></li></ul>"
  assert.isEqual(noteListView.format(), text)
});
