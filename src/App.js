import React from "react";
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { Database } from "firebase/database";
import { GlobalStyle } from "./Components/Styled/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/hooks/useOpenItem";
import { useOrder } from "./Components/hooks/useOrder";
import { useAuth } from "./Components/hooks/useAuth";
import { useTitle } from "./Components/hooks/useTitle";
import {OrderConfirm} from "./Components/Order/OrderConfirm";
import {useConfirm} from "./Components/hooks/useConfirm";
import {Context} from "./Components/Functions/context";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
        apiKey: "AIzaSyAbJcSEI80C1VU8ag4yi6zmhn-aJcNcZf0",
        authDomain: "mrdonalds-4201a.firebaseapp.com",
        projectId: "mrdonalds-4201a",
        storageBucket: "mrdonalds-4201a.appspot.com",
        messagingSenderId: "507488377898",
        appId: "1:507488377898:web:9f0239ef85bc5b988bb753"
};

const app = initializeApp(firebaseConfig);
export const authenticationApp = getAuth(app);

function App() {
    const auth = useAuth();
    const openItem = useOpenItem();
    const orders = useOrder();
    const orderConfirm = useConfirm();
    useTitle(openItem.openItem);
  return (
      <Context.Provider value={{auth, openItem, orders, orderConfirm}}>
          <GlobalStyle/>
          <NavBar/>
          <Order/>
          <Menu/>
          { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
          {orderConfirm.openOrderConfirm && <OrderConfirm {...orders} {...auth} {...orderConfirm} fareBaseDataBase={Database}/>}
      </Context.Provider>
  );
}

export default App;
