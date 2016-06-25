require.config({ paths: { 'vs': '../node_modules/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
  var editor = monaco.editor.create(document.getElementById("container"), {
    value: "function hello() {\n\talert('Hello world!');\n}",
    language: "javascript",
    scrollBeyondLastLine: false
  });
});
