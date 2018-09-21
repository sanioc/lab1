var fs = require('fs');
//const read = require('read-file');
var path = require('path');
var os = require('os');
var serc = require("full-text-search");
var readdir = require("readdir");
var  reg = require('regex');
var regx = require("node-regexp");
var XRegExp = require('xregexp');
var react = require("react");

var str = fs.readFileSync("./Passwords.txt","utf-8");
var lines = str.split("\n");
var headings = new Array();
for(var k = 0; k < 5;k++){
  headings[k] = lines[k];
}
for(var k = 0; k < 5 ; k++){
  lines.shift();
}
str = lines.join("\n")

// str = str.split('\n').map(function (el) { return el.split(/\s+/); });
var elems = str.split('===============').map((el) => {
  var smEl = el.split("\n")
  var host = smEl[1].split(":")
  host.shift()
  var login = smEl[2].split(":")
  login.shift()
  var password = smEl[3].split(":")
  password.shift()

  var obj = {
    host: host.join(":").trim(),
    login: login.join(":").trim(),
    password: password.join(":").trim(),
  }
  return obj
})


// console.log(elems[0])

var passwords = elems.map((x)=> {
  return x.password
})

console.log(passwords[1]);



var y;

try{
    fs.writeFileSync('myfile.txt', elems);
}catch (e){
    console.log("Cannot write file ", e);
}




process.exit()

//var headings = cells.shift();

//  var struct = new String(str);
//  struct = struct.split('===============').map(function (el) {
//
//    return el.split("\n")
//    return el.split(",,");
//  });
//
//    for(let i = 0; i < struct.length; y=i++) {
//      for(let j = 0; j < struct[i].length; j++) {
//        struct[i][j] = struct[i][j].replace(':,', ':');
//
//      }
//    }
// console.log(struct[0]);



   /*
   var obj = arr.reduce(function(acc, cur, i) {
  acc[i] = cur;
  return acc;
}, {});

With a function like this:

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    rv[i] = arr[i];
  return rv;
}

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    if (arr[i] !== undefined) rv[i] = arr[i];
  return rv;
}

   [{ a: 1},{ b: 2},{ c: 3}].reduce(function(result, item) {
  var key = Object.keys(item)[0]; //first property: a, b, c
  result[key] = item[key];
  return result;
}, {})

var arr=[[1,2,3,4]]
Object.assign(...arr.map(d => ({[d[0]]: d[1]})))


var convArrToObj = function(array){
    var thisEleObj = new Object();
    if(typeof array == "object"){
        for(var i in array){
            var thisEle = convArrToObj(array[i]);
            thisEleObj[i] = thisEle;
        }
    }else {
        thisEleObj = array;
    }
    return thisEleObj;
}

let i = 0;
let myArray ;

const arrayToObject = (arr) =>
    Object.assign({}, ...arr.map(item => ({[i++]: item})));

console.log(arrayToObject(myArray));
*/



//    var arrayOfObjects = struct.map(function (item) {
//     return { x };
// });
//Object.values(data).map(item => arr.push(item))
// console.log(arrayOfObjects[5]);


// var x =
//  {
//   host: arr[0].split(":")[1],
//   login: arr[1].split(":")[1],
//   password: arr[2].split(":")[1]
//  };
// for( x in data){
//     struct.push(data[x]);
// }
console.log(struct[0]);

   //    var headings;
   //   var obj = {};
   //   for (var i = 0, l = el.length; i < l; i++) {
   //     obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
   //   }
   //   return obj;
   //
   // var json = JSON.stringify(obj);
   // console.log(json);

   //Object.values(data).map(item => arr.push(item))

  // var x =
  //  {
  //   host: arr[0].split(":")[1],
  //   login: arr[1].split(":")[1],
  //   password: arr[2].split(":")[1]
  //  };

  // for(let i = 0;i < struct.length;i++){
  //   let j = 0
  //   struct[i][j] = struct[i][j].replace(',', ' ');
  // }
// {[
//   {
//
//   }
// ]}
//
// nu pot sa organizez nimic

//
// var index1 = new Array();
// index1 =struct[0];
// console.log(cells);
//console.log(typeof cells);
// struct = cells.(function (el) {
//   map(el.split("==============="));
//   return el;
// });
// console.log(struct);

//console.log(cells);
//console.log(headings);
// var obj = cells.map(function (el) {
//   var obj = {};
//   for (var i = 0, l = el.length; i < l; i++) {
//     obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
//   }
//   return obj;
// });
// var json = JSON.stringify(obj);
// console.log(json);


//console.log(str);


// });

// //console.log(fs);

// console.log(evens);
