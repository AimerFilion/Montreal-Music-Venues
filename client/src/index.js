import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";
// import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } = process.env;
// const { API_KEY } = process.env;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain={REACT_APP_AUTH0_DOMAIN}
    clientId={REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    {/* <GoogleMap useLoadScript={API_KEY} MarkerF={API_KEY}> */}
    <App />
    {/* </GoogleMap> */}
  </Auth0Provider>
  // </React.StrictMode>
);
