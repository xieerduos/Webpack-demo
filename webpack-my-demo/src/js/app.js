// alert(require('./people.js'));
// console.log(require('./people.js'))
let people = require('./people.js');
// console.log(people[1].name)
let $ = require('jquery');

// require("!style-loader!css-loader!./style.css");
require("../css/style.css");

$.each(people,function(key,value){
    $("body").append("<h1>"+people[key].name+"</h2>");
})