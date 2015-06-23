var mTemplate = (function() {
  var cache = {};
  return {
    parse : function (id, data) {
        if ( !/^\w+$/.test(id) ) return null;
        if ( !cache[id] )
            cache[id] = new Function("o",
                "var p=[],print=function(){p.push.apply(p,arguments);};"
                +"with(o){p.push('"+document.getElementById(id).innerHTML
                .replace(/[\r\t\n]/g, " ")
                .replace(/'(?=[^#]*#>)/g, "\t")
                .split("'").join("\\'")
                .split("\t").join("'")
                .replace(/<#=(.+?)#>/g, "',$1,'")
                .split("<#").join("');")
                .split("#>").join("p.push('")
                + "');}return p.join('');");
        return data ? (cache[id])(data) : cache[id];
    }};
})();