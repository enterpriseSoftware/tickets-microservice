
import buildClient from "../api/build-client";

const Landing = ({ currentUser }) => {
  
  return currentUser? (
    <h1>You are signed In {currentUser.email}</h1>
  ):(
    <h1>You are not signed In</h1>  
  )
};

Landing.getInitialProps = async (context) => {   
  try{  
    const client = buildClient(context);   
    const {data } = await client.get("/api/users/currentuser");
    return data;
  }catch(err)
  {
    console.log("the error is in index.js client.js");
  }
  return {};
};
 
export default Landing;
