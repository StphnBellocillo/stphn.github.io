var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xmlHttp = new XMLHttpRequest();

const library = {};

let stIGAccessToken = "IGQVJXbGRYdGc1UzZA5LW8xRXVXbXF3Ym1zeG13VERBU29uV0FlVHZAiWDBWQjFBQnRsTGUyM0x2U2hQM3dNb1N4YjZAGbnZAwQnZArWHNHUldnT180N3R4TjJveENxMkpnSGhQMEZAfeDRMMGM1RHBLdUp1dmJlN2NFclh4MUU0";
let stAccountMediaId = "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + stIGAccessToken;

function httpGetMediaId(url) {
    let arr = [];
    let obj = {};
    try {
        let objMediaIds = httpGet(url);
        console.log("httpGetMediaId objMediaIds:", objMediaIds);
        for (let i in objMediaIds) {
            for (let x in objMediaIds[i]) {
                if (objMediaIds[i][x].id) {
                    obj.id = objMediaIds[i][x].id;
                    arr.push(obj);
                }
            }
        }
    } catch (e) {
        console.log("errror:", e);
    }
    console.log("httpGetMediaId:", arr);
    return arr;
}

function httpGetMediaImageUrl(url) {
    console.log("httpGetMediaImageUrl url", url);
    let arr = [];
    let obj = {};
    let objMediaIds = httpGetMediaId(url);
    console.log("httpGetMediaImageUrl obj:", objMediaIds);
    for (var i in objMediaIds) {
        /*        console.log("httpGetMediaImageUrl objMediaIds:", );*/
        obj.ImageUrl = "https://graph.instagram.com/" + objMediaIds[i].id
            + "?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXdWZAPdHRWT2JQRDljaEpzR3pXTEhpRC1tLWFJbThPVGdXc2hHc0IxUjN0bkVaZAHJmaVhlcEpJMnhJUVFMa2hud2ZAXV0t6a0JzME5qMlBqQzlnV2szQ1Bkc3FYU3hWNS1DU1RtT25aR3otZA3Q4a2dsdVZAleGNiOE53";
        arr.push(obj);
    }
    /*    console.log("arr", arr);*/
    return arr;
}

function httpGet(theUrl) {
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
}

library.Table = function (url) {
    let htmlString = "";
    let rowString = "";
    let count = 0;
    console.log("url", url);
    let objUrl = httpGetMediaImageUrl(url);
    for (let i in objUrl) {
        rowString += '<div class="col-sm">\n';
        rowString += '<img class="card-img-top" src="' + objUrl[i].ImageUrl + '">\n';
        rowString += '</div>\n';

        /*        console.log("count", count);*/
        if (count == 3) {
            /*         console.log("ara naku sa count", count);*/
            htmlString += '<div class="row">\n';
            htmlString += rowString;
            htmlString += '</div>\n';
            htmlString += ' <br>\n';
            htmlString += ' <br>\n';
            rowString = "";
            count = 0;
        }
        count++;
        /*    console.log("count", count);*/
    }
    var str = document.getElementById("ig").innerHTML;
    var res = str.replace("{imageTable}", htmlString);
    document.getElementById("ig").innerHTML = res;
    return htmlString;

}


export {library};