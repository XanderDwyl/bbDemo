define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/user.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var _done='' ;
__p += '\n';
 if (done) _done = 'checked' ;
__p += '\n<input type="checkbox" name="done" class="done" ' +
((__t = ( _done=_done )) == null ? '' : __t) +
'> &nbsp;\n<span class="title">\n\t' +
((__t = ( title )) == null ? '' : __t) +
'\n</span>\n<span class="delete">X</span>';

}
return __p
};

  return this["JST"];

});