var mTemplate = (function(_var) {
  _var = _var || 'data';
  var cache = {};
  return {
    parse : function (id, data) {
        if ( !/^\w+$/.test(id) ) return null;
        if ( !cache[id] )
            cache[id] = new Function(_var,
                "var p='" + document.getElementById(id).innerHTML
                .replace(/[\r\t\n]/g, " ")
                .replace(/'(?=[^#]*#>)/g, "\t")
                .split("'").join("\\'")
                .split("\t").join("'")
                .replace(/<#=(.+?)#>/g, "';p+=$1;p+='")
                .split("<#").join("';")
                .split("#>").join("p+='")
                + "';return p;");
        return data ? (cache[id])(data) : cache[id];
    }};
})();