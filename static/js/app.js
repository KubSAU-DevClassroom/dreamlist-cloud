function categoriesRetrieve () {
    var r = new XMLHttpRequest();
    r.open("GET", "/categories", true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        var cats = JSON.parse(r.responseText).data;
        var div = document.getElementById("categories");
        div.innerHTML = "";
        for (var i = 0, l = cats.length; i < l; i++) {
            div.innerHTML += "<span>"+cats[i].name+"</span>";
        }
    };
    r.send();
}

function categoriesAdd () {
    var r = new XMLHttpRequest();
    r.open("POST", "/categories/add", true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        alert("Success: " + r.responseText);
    };
    r.send();
}
