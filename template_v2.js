!(function () {

    var o = {
        header : "test1",
        list : ["l1", "l2", "l3"]
    };

    document.getElementById("results").innerHTML = "<hr />";

    var t1 = mTmpl2.parseTemplate('template');
    document.getElementById("results").innerHTML += t1(o) + "<hr />";
    document.getElementById("results").innerHTML += t1(
        {
            header : "test2",
            list : ["l1", "l2", "l3"]
        }) + "<hr />";

    document.getElementById("results").innerHTML += mTmpl2.parseTemplate('template',
        {
            header : "test3",
            list : ["l1", "l2", "l3"]
        });
})();
