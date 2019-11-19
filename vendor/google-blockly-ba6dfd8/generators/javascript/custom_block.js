goog.provide('Blockly.JavaScript.Custom');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['string_length'] = function (block) {
    let text = block.getFieldValue(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '\'\'';
    let code = text + '.length';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['led_change'] = function (block) {
    let led = block.getFieldValue('LED_VALUE');
    let bool = block.getFieldValue(block, 'BOOL_VALUE', Blockly.JavaScript.ORDER_NONE) || 'false';
    return `led_${led}(` + bool + ')';
};