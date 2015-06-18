!(function () {
    var fncache = { };
    var parseTemplate = function (id, data) {
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
    };

    var o = {
        header : "test1",
        list : ["l1", "l2", "l3"]
    };

    document.getElementById("results").innerHTML = "<hr />";

    var t1 = parseTemplate('template');
    document.getElementById("results").innerHTML += t1(o) + "<hr />";
    document.getElementById("results").innerHTML += t1(
        {
            header : "test2",
            list : ["l1", "l2", "l3"]
        }) + "<hr />";

    document.getElementById("results").innerHTML += parseTemplate('template',
        {
            header : "test3",
            list : ["l1", "l2", "l3"]
        });
})();
