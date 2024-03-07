import styled from "styled-components";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

import "../assets/css/style.css";
function BotaoBar() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  return (
    <Footer>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className="botaobar"
      >
        <BottomNavigationAction
          label="Loja"
          value="Loja"
          icon={<IoStorefrontOutline className="botao" />}
          onClick={() => navigate("/Home")}
        />
        <BottomNavigationAction
          label="Explorar"
          value="Explorar"
          icon={<MdOutlineManageSearch className="botao" />}
          onClick={() => navigate("/Explorar")}
        />
        <BottomNavigationAction
          label="Carrinho"
          value="Carrinho"
          icon={<AiOutlineShoppingCart className="botao" />}
          onClick={() => navigate("/Carrinho")}
        />

        <BottomNavigationAction
          label="Conta"
          value="Conta"
          icon={<IoPersonOutline className="botao" />}
          onClick={() => navigate("/Conta")}
        />
      </BottomNavigation>
    </Footer>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0vh;
  left: 0;
  width: 100%;
`;

export default BotaoBar;
