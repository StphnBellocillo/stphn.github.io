const xmlHttp = new XMLHttpRequest();
const library = {};

let stIGAccessToken = "AQA_hRQkRnBsqpV22azJxPUwgRkhTt2kVtuZLEA3eRERBmDsQ4NaKvlAzE5PGQ_5iSTOZz1FwSafqGS2uUxoqr2ReDHOcJndCQj7CaMnBszOTYmZJWqGBz0C9gRRWgI7XrGHAZeZYrcenwo1uCER0tch4HVV6pS-qC9H-Z1n9z-HpsYcmRrWJ4RWuKFNKAS3EUy9GW_aK5kCnYC-iZFA9D8CMndA7jW0Kd4SiVof0E3Rog";
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
        console.log("httpGetMediaImageUrl objMediaIds:",objMediaIds[i] );
        obj.ImageUrl = "https://graph.instagram.com/" +objMediaIds[i]
            + "?fields=id,media_type,media_url,username,timestamp&access_token="+stIGAccessToken;
        arr.push(obj.ImageUrl);
    }
    console.log("arr", arr);
    return arr;
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
    console.log("url", url);
    let objUrl = library.httpGetMediaImageUrl(url);
    for(let i in objUrl){
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

