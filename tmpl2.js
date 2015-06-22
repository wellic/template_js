var mTmpl2 = (function() {
  var fncache = { };

  return {
    parseTemplate : function (id, data) {
        var cacheId = 't1_' + id;
        if ( !fncache[cacheId] ) {
            fncache[cacheId] = new Function("o",
                "var p=[],print=function(){p.push.apply(p,arguments);};"
                + "with(o){p.push('" +
                document.getElementById(id).innerHTML
                .replace(/[\r\t\n]/g, " ")
                .replace(/'(?=[^#]*#>)/g, "\t")
                .split("'").join("\\'")
                .split("\t").join("'")
                .replace(/<#=(.+?)#>/g, "',$1,'")
                .split("<#").join("');")
                .split("#>").join("p.push('")
                + "');}return p.join('');");
        }
        return data ? (fncache[cacheId])(data) : fncache[cacheId];
    }
  };
})();