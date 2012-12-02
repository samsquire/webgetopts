module.exports = {

fetch: function(address, overrides, callback){
   var fs = require("fs"),
       request = require("request"),
       url = require('url'),
       scrapefile = require("./jsonscrape.js"),
       extraction = require('./metadata.json');

         request(address, function(error, response, body) {
           var libxmljs = require("libxmljs");
           var doc = libxmljs.parseHtmlString(body);
           var $ = function(search) {
             return doc.get(search);
           }
           var val = function(result) {
             return result.value();
           }
           console.log(extraction);
           var metadata = scrapefile($, val, extraction) 


           var URL = url.parse(response.request.uri.href);
           metadata.target = url.resolve(URL.protocol + '//' + URL.host + URL.pathname, metadata.target);
           metadata.site = URL.hostname; 

           for (key in metadata) {
            console.log(key);
            if (key in overrides) {
              metadata[key] = overrides[key];
            }
           } 
           callback(metadata);
         });
} 
}
