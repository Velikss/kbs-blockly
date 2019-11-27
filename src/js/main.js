var code;

var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox'),
    grid:
         {spacing: 30,
          length: 2,
          colour: '#ccc',
          snap: false},
    zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2},
    trashcan: true});

// function myUpdateFunction(event) {
//     let a = Blockly.JavaScript.workspaceToCode(workspace);
//     if (!(a == null || a === "")) {
//         document.getElementById('output').value = a;
//     }
// }
// workspace.addChangeListener(myUpdateFunction);