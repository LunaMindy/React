import React from "react";
import { useState } from "react";

const AppContext = React.createContext({
  uid: "",
  setUid: () => {},
  authToken: "",
  setAuthToken: () => {}
});

export function AppContextProvider(props) {
  const [uid, setUid] = useState("");
  const [authToken, setAuthToken] = useState("");

  const value = {
    uid: uid, //uid 만도 가능
    setUid: setUid,
    authToken: authToken,
    setAuthToken: setAuthToken
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;