import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/header";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  let pageProps = {};      
  const client = buildClient(appContext.ctx);   
   let  {data}  = await client.get("/api/users/currentuser");  
   if (appContext.Component.getInitialProps) {
     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
   }
 return {
    pageProps,
    ...data
 }
};

export default AppComponent;
