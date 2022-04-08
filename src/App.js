import React from "react";
import { GlobalStyle } from "./Components/Styled/GlobalStyle";
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/hooks/useOpenItem";
import { useOrder } from "./Components/hooks/useOrder";


function App() {

    const openItem = useOpenItem();
    const orders = useOrder();

  return (
      <div>
          <GlobalStyle/>
          <NavBar/>
          <Order {...orders} />
          <Menu  {...openItem}/>
          { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      </div>
  );
}

export default App;
