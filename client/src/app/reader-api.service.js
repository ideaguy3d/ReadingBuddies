var app;
(function (app) {
    'use strict';
    var ReaderApi = (function () {
        function ReaderApi($http) {
            this.$http = $http;
        }
        ReaderApi.prototype.getReaderReviews = function (readerId) {
            return this.$http({
                method: 'get',
                url: "/api/readers/" + readerId + "/reviews"
            }).then(function (result) { return result.data; });
        };
        ReaderApi.prototype.getReaderInfo = function (readerId) {
            return this.$http({
                method: 'get',
                url: "/api/readers/" + readerId
            }).then(function (result) { return result.data; });
        };
        return ReaderApi;
    })();
    angular
        .module('app')
        .service('readerApi', ReaderApi);
})(app || (app = {}));
