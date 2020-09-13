const xmlHttp = new XMLHttpRequest();
const library = {};

let stIGAccessToken = "IGQVJWYkFlV1VMZAXVLTGViMDEtT1duZAjRnRjM5MkJLbDZAwZADZAIeVA2bm5rWDA4cnYzVjVKR2xTYWJMSTdjZAlpNbEpoN0lQSXpNdXBKTUdNWkhjWjRvd2lrSm4yQlFyYVlWUVBHU0hrd185TjI0SEJITndVcGlMX3NYVlFF";
let stAccountMediaId = "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + stIGAccessToken;

library.httpGetMediaId = function (url) {
    let arr = [];
    let obj = {};
    try {
        let objMediaIds = library.httpGet(url);
        /*        console.log("httpGetMediaId objMediaIds:", objMediaIds);*/
        for (let i in objMediaIds) {
            for (let x in objMediaIds[i]) {
                if (objMediaIds[i][x].id) {
                    /*  console.log(" objMediaIds[i][x]",  objMediaIds[i][x]);*/
                    obj.id = objMediaIds[i][x].id
                    arr.push(obj.id );
                }
            }
        }

    }
    catch (e) {
        console.log("errror:",e);
    }
    /*    console.log("httpGetMediaId:", arr);*/
    return arr;
}

library.httpGetMediaImageUrl = function (url) {
    console.log("httpGetMediaImageUrl url", url);
    let arr = [];
    let obj = {};
    let objMediaIds = library.httpGetMediaId(url);
    /*    console.log("httpGetMediaImageUrl obj:", objMediaIds);*/
    for(var i in objMediaIds){
         let imgUrl = "https://graph.instagram.com/" +objMediaIds[i]
            + "?fields=id,media_type,media_url,username,timestamp&access_token="+stIGAccessToken;
         let MediaUrl = library.httpGet(imgUrl);
        console.log("MediaUrl", MediaUrl);
         console.log("MediaUrl", MediaUrl.media_url);
          arr.push(obj);
    }
    console.log("arr", arr);
    return JSON.parse(arr);
}

library.httpGet = function (theUrl) {
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

library.Table = function (url) {
    let htmlString = "";
    let rowString = "";
    let count = 0;
    let objUrl = library.httpGetMediaImageUrl(url);
    console.log("objUrl", objUrl);
    for(let i in objUrl){
        console.log(objUrl[i]["media_url"]);
        rowString += '<div class="col-sm">\n';
        rowString += '<img class="card-img-top" src="' + objUrl[i] + '">\n';
        rowString += '</div>\n';

        /*        console.log("count", count);*/
        if(count == 3) {
            /*         console.log("ara naku sa count", count);*/
            htmlString += '<div class="row">\n';
            htmlString += rowString;
            htmlString += '</div>\n';
            htmlString += ' <br>\n';
            htmlString += ' <br>\n';
            rowString = "";
            count = 0 ;
        }
        count++;
        /*    console.log("count", count);*/
    }
    /*    var str = document.getElementById("ig").innerHTML;
        var res = str.replace("{imageTable}", htmlString);
        document.getElementById("ig").innerHTML = res;*/
    return htmlString ;
}

