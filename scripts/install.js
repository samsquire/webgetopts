#!/usr/bin/env node

var spawn = require('child_process').spawn,
		path = require('path');

console.log("Creating webstub directory.");
var source = './.webgetopts';
var prefix = process.env['HOME'] + "/";
var webstubs = path.join(prefix, source);

var copy = spawn('cp', ['-R', source, prefix]);
var out = function(data) {
	console.log(data.toString());
}
copy.stdin.on('data', out);
copy.stdout.on('data', out);
copy.stderr.on('data', out);
copy.on('exit', function(data){
  console.log("Webstub directory created at", webstubs);
});
