goog.provide('Blockly.JavaScript.Custom');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['string_length'] = function (block) {
    let text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '\'\'';
    let code = text + '.length';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['led_change'] = function (block) {
    let led = block.getFieldValue('LED_VALUE');
    let bool = Blockly.JavaScript.valueToCode(block, 'BOOL_VALUE', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    let code = `led_${led}(` + bool + ')';

    return Blockly.JavaScript.scrubNakedValue(code);
};