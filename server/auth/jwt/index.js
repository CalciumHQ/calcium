"use strict";
var passport = require('passport');
var passport_jwt_1 = require('passport-jwt');
var user_dao_1 = require('../../api/user/dao/user-dao');
var JwtStrategy = (function () {
    function JwtStrategy() {
    }
    JwtStrategy.register = function () {
        passport.use(new passport_jwt_1.Strategy({
            secretOrKey: this.SECRET,
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeader()
        }, function (payload, done) {
            user_dao_1["default"]['findOne']({ _id: payload.user._id })
                .then(function (user) {
                if (!user) {
                    done(null, false);
                }
                done(null, user);
            })
                .catch(function (error) { return done(error); });
        }));
    };
    JwtStrategy.SECRET = 'jk34ty89jlarhgi24g89h432q9324gl9';
    return JwtStrategy;
}());
exports.JwtStrategy = JwtStrategy;
