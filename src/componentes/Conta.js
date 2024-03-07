import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { IoBagHandleOutline } from "react-icons/io5";
import { CiCreditCard2 } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

import BotaoBar from "./BotaoBar";
import FotoAvatar from "../assets/img/avatar.jpg";

function Conta() {
  return (
    <Container>
      <Header>
        <Stack direction="row" spacing={3}>
          <Avatar alt="Remy Sharp" src={FotoAvatar} />
        </Stack>
        <Usuario>
          <Nome>Afsar Hossen</Nome>
          <Email>Imshuvo97@gmail.com</Email>
        </Usuario>
      </Header>

      <Main>
        <List sx={{ width: "100%", maxWidth: 360 }} component="nav">
          <ListItemButton>
            <ListItemIcon sx={{ fontSize: 20, color: "#626567" }}>
              <IoBagHandleOutline />
            </ListItemIcon>
            <ListItemText primary="Pedidos" />
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoIosArrowForward />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <CiCreditCard2 />
            </ListItemIcon>
            <ListItemText primary="Meus Detalhes" />
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoIosArrowForward />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoLocationOutline />
            </ListItemIcon>
            <ListItemText primary="Endereços" />
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoIosArrowForward />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoNotificationsOutline />
            </ListItemIcon>
            <ListItemText primary="Notificações" />
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoIosArrowForward />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoIosHelpCircleOutline />
            </ListItemIcon>
            <ListItemText primary="Ajuda" />
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoIosArrowForward />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoAlertCircleOutline />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
            <ListItemIcon sx={{ fontSize: 22, color: "#626567" }}>
              <IoIosArrowForward />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Main>
      <Footer>
        <Botao>
          <Sair></Sair>
          <p>Log Out</p>
        </Botao>
      </Footer>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 22vh;
  position: fixed;
  left: 8vw;
  top: 0;
`;

const Nome = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
`;
const Email = styled.p`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  margin-top: 0.5vh;
`;

const Usuario = styled.div`
  margin-left: 5vw;
`;

const Main = styled.div`
  width: 100vw;
  height: 50vh;
  position: fixed;
  top: 18vh;
  left: 5vw;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 15vh;
  left: 0;
`;

const Botao = styled.div`
  background-color: #e5e7e9;
  border-radius: 20px;
  width: 55vw;
  height: 8vh;
  display: flex;
  align-items: center;

  p {
    color: #2ecc71;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-left: 8vw;
  }
`;

const Sair = styled(IoExitOutline)`
  color: #2ecc71;
  font-size: 20px;
  margin-left: 8vw;
`;

export default Conta;
