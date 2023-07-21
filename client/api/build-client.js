import axios from "axios";

const buildClient = ({ req }) => {  
    try{
    if (typeof window === "undefined") {
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        const headers = req.headers;
      //we are on the server
      return axios.create({
        baseURL:
          "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
        headers: headers,
      });
    } else {
      return axios.create({
        baseURL: "/",
      }); //we are on the browser
    }  
  }catch(error){
    console.log("I blew up in build client");
  }
};

export default buildClient;
