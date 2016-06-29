"use strict";
var fs = require('fs');
var StaticDispatcher = (function () {
    function StaticDispatcher() {
    }
    StaticDispatcher.sendIndex = function (req, res) {
        var _root = process.cwd();
        var _clientFiles = (process.env.NODE_ENV === 'local') ? '/client/.tmp/' : '/client/dist/';
        res.type('.html');
        fs.createReadStream(_root + _clientFiles + 'index.html')
            .pipe(res);
    };
    return StaticDispatcher;
}());
exports.StaticDispatcher = StaticDispatcher;
//# sourceMappingURL=index.js.map