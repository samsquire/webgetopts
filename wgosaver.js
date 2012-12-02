module.exports = {

fetch: function(address, callback){
         var fs = require("fs"),
         request = require("request"),
         cheerio = require("cheerio"),
         url = require('url'),
         scrapefile = require("./scrapefile");

         request(address, function(error, response, body) {
             var libxmljs = require("libxmljs");
             console.log("Body is:", body);
             var doc = libxmljs.parseHtmlString(body);
             var $ = function(search) {
               return doc.get(search);
             }

             var val = function(result) {
               return result.value();
             }
            var extraction = require('./metadata.json');
            console.log(extraction);
            var metadata = scrapefile($, val, extraction) 

             var URL = url.parse(response.request.uri.href);
             metadata.target = url.resolve(URL.protocol + '//' + URL.host + URL.pathname, metadata.target);
             metadata.site = URL.hostname; 
         callback(metadata);
         });
} 
}
