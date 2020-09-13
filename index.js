import {library} from './library/library';

let stIGAccessToken = "IGQVJXbGRYdGc1UzZA5LW8xRXVXbXF3Ym1zeG13VERBU29uV0FlVHZAiWDBWQjFBQnRsTGUyM0x2U2hQM3dNb1N4YjZAGbnZAwQnZArWHNHUldnT180N3R4TjJveENxMkpnSGhQMEZAfeDRMMGM1RHBLdUp1dmJlN2NFclh4MUU0";
let stAccountMediaId = "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + stIGAccessToken;

function load(){
    library.Table(stAccountMediaId);
    console.debug("library.Table(stAccountMediaId);", library.Table(stAccountMediaId));
}


