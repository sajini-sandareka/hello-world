var fs=require('fs');
var readme=fs.readFileSync('file.txt','uft8');
console.log(readme);

var readme=fs.readFile('file.txt','uft8', function(err,content){
console.log(content);
});
