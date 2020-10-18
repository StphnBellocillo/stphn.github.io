$(function onload($) {
    console.log($.ajax);
    console.log("Helloword!");
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=47b89ddecddf649177da923f432039e3&photoset_id=72157716518018777&user_id=134410275@N08",
        "method": "GET",
        "headers": {}
    }

    $.ajax(settings).done(function (data) {
        var json = xmlToJson.parse(data);
        console.log("test", json.rsp.photoset.photo);
        var objPhoto = json.rsp.photoset.photo;

        for (var index = 0; index < objPhoto.length; index++) {
            var farmId = objPhoto[index].farm;
            var serverId = objPhoto[index].server;
            var id = objPhoto[index].id;
            var secret = objPhoto[index].secret;

            $("#flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
        }
    });
})


// import {library} from './library/library';

// let stIGAccessToken = "IGQVJWYkFlV1VMZAXVLTGViMDEtT1duZAjRnRjM5MkJLbDZAwZADZAIeVA2bm5rWDA4cnYzVjVKR2xTYWJMSTdjZAlpNbEpoN0lQSXpNdXBKTUdNWkhjWjRvd2lrSm4yQlFyYVlWUVBHU0hrd185TjI0SEJITndVcGlMX3NYVlFF";
// let stAccountMediaId = "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + stIGAccessToken;

// function load(){
//    var htmlString = library.Table(stAccountMediaId);
//     console.log("library.Table(stAccountMediaId);", library.Table(stAccountMediaId));
//     var str = document.getElementById("ig").innerHTML;
//     var res = str.replace("{imageTable}", htmlString);
//     document.getElementById("ig").innerHTML = res;
// }

// apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1";
