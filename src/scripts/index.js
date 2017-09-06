'use strict';

var $ = require('jquery');

$.get('/test-local-json.do', function(res) {
    console.log('local json', res);
});

$.get('/test-local-js.do', function(res) {
    console.log('local js', res);
});

$.get('/test-func.do', function(res) {
    console.log('function', res);
});

$.get('/test-remote.do', function(res) {
    console.log('remote', res);
});

$.get('/test-mock-data.do', function(res) {
    console.log('mock data', res);
});

$.ajax({
    type: "POST",
    url: '/test-post.do',
    success: function(res) {
        console.log('post', res);
    }
});

$.ajax({
    type: "get",
    url: "/test-jsonp.do?callback=dataHandler",
    dataType: "jsonp",
    jsonp: "callback",
    jsonpCallback: "dataHandler",
    success: function(res) {
        console.log('jsonp', res);
    }
});
