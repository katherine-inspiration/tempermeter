import PostTopicRequest from "../Classes/PostTopicRequest";

export const getPostMediatopicURL = (topicData, sessionKey, sessionSecretKey, sig, webServer) => {
    let request = new PostTopicRequest(topicData, sessionKey, sessionSecretKey, sig);
    let requestURL = "https://api.ok.ru";
    requestURL += "/fb.do?";
    let params = new URLSearchParams();
    for (let [key, value] of Object.entries(request)){
        params.append(key, value);
    }
    requestURL = requestURL + params;
    // return fetch(requestURL,{
    //     headers: {
    //         "Access-Control-Allow-Origin": "https://api.ok.ru/"
    //     }
    // })
    //     .then(response => {
    //         console.log(response.status + " " + response.statusText);
    //     });
    console.log(requestURL);
    return requestURL;
};