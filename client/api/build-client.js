import axios from "axios";

const buildClient = ({ req }) => {  
    
    if (typeof window === "undefined") {
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
};

export default buildClient;
