goog.provide('Blockly.Blocks.custom');  // Deprecated
goog.provide('Blockly.Constants.custom');

goog.require('Blockly');

Blockly.Blocks['string_length'] = {
    init: function() {
        this.jsonInit({
            'message0': 'length of %1',
            'args0': [
                {
                    'type': 'input_value',
                    'name': 'VALUE',
                    'check': 'String'
                }
            ],
            'output': 'Number',
            'colour': 160,
            'tooltip': 'Returns number of letters in the provided text.',
            'helpUrl': 'http://www.w3schools.com/jsref/jsref_length_string.asp'
        });
    }
};

Blockly.Blocks['led_change'] = {
    init: function () {
        this.jsonInit({
            "message0": "turn LED %1 %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "LED_VALUE",
                    "options": [
                        ["1", "1"],
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "BOOL_VALUE",
                    'check': 'Boolean'
                },
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "%{BKY_LOGIC_HUE}",
            "tooltip": "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
            "helpUrl": "%{BKY_LOGIC_BOOLEAN_HELPURL}",
        });
    }
};

