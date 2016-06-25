require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
  var originalModel = monaco.editor.createModel("just some text\n\nHello World\n\nSome more text", "text/plain");
  var modifiedModel = monaco.editor.createModel("just some Text\n\nHello World\n\nSome more changes", "text/plain");

  var diffEditor = monaco.editor.createDiffEditor(document.getElementById("container"));
  diffEditor.setModel({
    original: originalModel,
    modified: modifiedModel
  });
});
