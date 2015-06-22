var mTmpl1 = (function() {
  var fncache = { };

  return {
    parseTemplate : function (id, data) {
        var cacheId = 't1_' + id;
        if ( !fncache[cacheId] ) {
            fncache[cacheId] = new Function("_",
                "var p='" +
                document.getElementById(id).innerHTML
                .replace(/[\r\t\n]/g, " ")
                .replace(/'(?=[^#]*#>)/g, "\t")
                .split("'").join("\\'")
                .split("\t").join("'")
                .replace(/<#=(.+?)#>/g, "';p+=$1;p+='")
                .split("<#").join("';")
                .split("#>").join("p+='")
                + "';return p;");
        }
        return data ? (fncache[cacheId])(data) : fncache[cacheId];
    }
  };
})();