import {library} from './library/library';

let stIGAccessToken = "IGQVJVWUh2SXVfU0NYMEhwaGMyRkNNYUlNblMwdkhwUXJnZA1N2NjlFT08zekhpZA0JwMXo3cC1zdTc3N0xmdFZAhMm9fZAXdVOUY3QWtxYWpOVXVpSXZAqMWw3YmR1RjREanFtUlBRSzhNZAlpJV04zWGlERnVWR0xSUTBrbmNj";
let stAccountMediaId = "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + stIGAccessToken;

function load(){
   var htmlString = library.Table(stAccountMediaId);
    console.log("library.Table(stAccountMediaId);", library.Table(stAccountMediaId));
    var str = document.getElementById("ig").innerHTML;
    var res = str.replace("{imageTable}", htmlString);
    document.getElementById("ig").innerHTML = res;
}


