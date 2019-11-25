var code;

var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox')});

function myUpdateFunction(event) {
    let a = Blockly.JavaScript.workspaceToCode(workspace);
    if (!(a == null || a === "")) {
        document.getElementById('output').value = a;
    }
}
workspace.addChangeListener(myUpdateFunction);
