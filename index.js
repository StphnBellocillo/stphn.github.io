import {library} from './library/library';

let stIGAccessToken = "IGQVJWYkFlV1VMZAXVLTGViMDEtT1duZAjRnRjM5MkJLbDZAwZADZAIeVA2bm5rWDA4cnYzVjVKR2xTYWJMSTdjZAlpNbEpoN0lQSXpNdXBKTUdNWkhjWjRvd2lrSm4yQlFyYVlWUVBHU0hrd185TjI0SEJITndVcGlMX3NYVlFF";
let stAccountMediaId = "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + stIGAccessToken;

function load(){
   var htmlString = library.Table(stAccountMediaId);
    console.log("library.Table(stAccountMediaId);", library.Table(stAccountMediaId));
    var str = document.getElementById("ig").innerHTML;
    var res = str.replace("{imageTable}", htmlString);
    document.getElementById("ig").innerHTML = res;
}

apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1";
