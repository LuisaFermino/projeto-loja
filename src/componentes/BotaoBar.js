import styled from "styled-components";
import { useState } from "react";

import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

function BotaoBar() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Footer>
      <BottomNavigation value={value} onChange={handleChange}>
        <Link to="/Home">
          <BottomNavigationAction
            label="Loja"
            value="Loja"
            icon={<IoStorefrontOutline />}
          />
        </Link>

        <Link to="/Explorar">
          <BottomNavigationAction
            label="Explorar"
            value="Explorar"
            icon={<MdOutlineManageSearch />}
          />
        </Link>
        <Link to="/Carrinho">
          <BottomNavigationAction
            label="Carrinho"
            value="Carrinho"
            icon={<AiOutlineShoppingCart />}
          />
        </Link>
        <Link to="/Conta">
          <BottomNavigationAction
            label="Conta"
            value="Conta"
            icon={<IoPersonOutline />}
          />
        </Link>
      </BottomNavigation>
    </Footer>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default BotaoBar;
