async function fetchGet(url, tipoRespuesta, callback) {
    try {
        var root = document.getElementById("hdfOculto").value;
        var url = window.location.protocol + "//" + window.location.host + "/" + root + url;
        var res = await fetch(url)
        if (tipoRespuesta == "json")
            res = await res.json();
        callback(res);
    } catch (e) {

    }
}