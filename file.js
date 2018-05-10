var http=require('http');
var fs=require('fs');
const readLine=require('readline');
var output;
var mysql=require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Enter password here",
  database: "file"
});



var rl=readLine.createInterface({
	input:fs.createReadStream(__dirname + '/demo.txt')

});

output=fs.createWriteStream(__dirname + '/output.txt');
rl.on('line',function(line){
	var array=line.split(' ');
	var toWrite="";
	 for(var i=0;i<array.length;i++)
	 {
	 	if(array[i]=='the'){
	 		array[i]="pickcel";
	 		var sql="INSERT INTO words (word) values ('pickcel')";
	 		con.query(sql, function (err, result) {
    		if (err) throw err;
    		console.log("1 record inserted");
  });

	 }
      toWrite+=array[i] + " ";
	 
	 }
console.log(toWrite);
output.write(toWrite);
});



/*fs.readFile('demo.txt','utf8',function(err,data){
if(err)
	throw err;
console.log(data);

});*/
