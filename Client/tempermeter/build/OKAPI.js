var rParams = FAPI.Util.getRequestParameters();
FAPI.init(rParams["api_server"], rParams["apiconnection"],
    () => {
        console.log("The OK API is initialized");
    },
    () => {
        console.log("Couldn't initialize OK API");
    }
);