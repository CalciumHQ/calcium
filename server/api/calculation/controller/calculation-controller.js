"use strict";
var Python = require('python-shell');
var CalculationController = (function () {
    function CalculationController() {
    }
    CalculationController.createCalculation = function (req, res) {
        var _expression = req.body.expression;
        var _values = req.body.values;
        var output = {};
        var py = new Python('./server/api/calculation/controller/calculation-engine.py', { mode: 'json' });
        py.on('message', function (m) {
            for (var attrname in m) {
                output[attrname] = m[attrname];
            }
        });
        py.on('close', function () {
            var _data = {
                status: 'success',
                values: output
            };
            res.json(_data);
        });
        for (var name in _values) {
            py.send({
                command: 'set_var',
                args: {
                    name: name,
                    value: _values[name]
                }
            });
        }
        console.log(_expression);
        py
            .send({ command: 'set_expression', args: { value: _expression } })
            .send({ command: 'execute' })
            .end();
    };
    return CalculationController;
}());
exports.CalculationController = CalculationController;
