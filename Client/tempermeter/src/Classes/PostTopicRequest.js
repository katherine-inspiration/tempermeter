import {publicKey} from "../credentials";
import Attachment from "./Attachment";
var md5 = require('md5');


class PostTopicRequest {
    constructor(topicData, sessionKey, sessionSecretKey, sig) {
        this.method = "mediatopic.post";
        this.attachment = JSON.stringify(new Attachment(topicData.text));
        this.application_key = publicKey;
        this.format = "json";
        // let keys = Object.keys(this);
        // keys.sort((key1, key2) => key1 > key2 ? 1 : -1);
        // let sigString = "";
        // for (let key of keys){
        //     sigString += key + "=" + this[key];
        // }
        // sigString += sessionSecretKey;
        //let sig = md5(sigString);
        //this.sig = sig.toLowerCase();
        this.sig = sig;
        this.session_key = sessionKey;

    }
}

export default PostTopicRequest;