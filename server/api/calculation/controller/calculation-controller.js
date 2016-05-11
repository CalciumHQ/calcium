"use strict";
var CalculationController = (function () {
    function CalculationController() {
    }
    CalculationController.createCalculation = function (req, res) {
        var _values = req.body.values;
        var _data = {
            status: 'success',
            values: { ans: _values.x + _values.y }
        };
        res.json(_data);
    };
    return CalculationController;
}());
exports.CalculationController = CalculationController;
