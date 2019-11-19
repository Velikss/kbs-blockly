var code;

var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox')});

function myUpdateFunction(event) {
    let a = Blockly.JavaScript.workspaceToCode(workspace);
    if (!(a == null || a == undefined || a === "")) {
        document.getElementById('textarea').value = a;
        console.log(a);
    }
}
workspace.addChangeListener(myUpdateFunction);
