(function (module, verbose) {
  'use strict';

  var querystring = require('querystring');

  var debug = !verbose ? function () {
  } : function (message) {
    console.log(message);
  };

  var MockList = (function () {

    function findMock(url) {
      for(var i = 0; i < this._mocks.length; i++) {
        debug(this._mocks[i]);
        if(this._mocks[i].url.test(url)) {
          return this._mocks[i].mock;
        }
      }
    }
    function addMock(url, mock) {
      this._mocks.push({
        url: url,
        mock: mock
      });
    }
    var MockList = function() {
      this._mocks = [];

    };
    MockList.prototype = {
      findMock: findMock,
      addMock: addMock
    };
    return MockList;
  })();

  var mocks = {
    'GET': new MockList(),
    'POST': new MockList(),
    'DELETE': new MockList(),
    'PUT': new MockList()
  };

  function paginate(data, request) {
    var query = querystring.parse(request._parsedUrl.query);
    var page = parseInt(query.p, 10) || 0;
    var count = parseInt(query.c, 10) || 10;
    var total = data.length;
    debug('slice:' + page * count + ' ' + (page + 1) * count);
    return {
      data: data.slice(page * count, (page + 1) * count),
      contentRange: page + '-' + count + '/' + total
    };
  }

  function extend(dst, src) {
    for(var property in src) {
      if(src.hasOwnProperty(property)) {
        dst[property] = dst[property] || src[property];
      }
    }
  }

  function mock(json) {
    return function (request, response) {
      var data = json;
      var headers = { 'Content-Type': 'application/json' };
      if(data instanceof Array) {
        var page = paginate(data, request);
        data = page.data;
        extend(headers, { 'Content-Range': page.contentRange });
      }
      response.writeHead(200, headers);
      response.end(JSON.stringify(data));
    };
  }

  function when(method, url) {
    return {
      respond: function (json) {
        debug(url + ' => ' + JSON.stringify(json));
        mocks[method].addMock(url, mock(json));
      }
    };
  }

  module.exports = function (request, response, next) {
    debug(request.method + ' ' + request.url);
    (mocks[request.method].findMock(request.url) || function () {
      next();
    })(request, response);
  };

  when('GET', /^\/bonita\/API\/case.*$/).respond(require('./case-mock.json'));
  when('GET', /^\/bonita\/API\/humanTask.*$/).respond(require('./humanTask-mock.json'));

})(module, false);
