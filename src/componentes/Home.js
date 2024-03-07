import estilo from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import BotaoBar from "./BotaoBar";
import ListaProdutos from "./ListaProdutos";
import Filtro from "./Filtro";
import imgBanner from "../assets/img/banner.jpg";

function Home({ cart, setCart }) {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");

  function ProdutosNaTela() {
    const produto = axios.get(`https://fakestoreapi.com/products`);
    produto.then(({ data }) => setProdutos(data));
    produto.catch((err) => alert("deu erro"));
  }

  useEffect(() => {
    ProdutosNaTela();
  }, []);

  return (
    <Container>
      <NavBar>
        <Pesquisa>
          <Box
            sx={{
              width: 200,
              maxWidth: "100%",
            }}
          >
            <TextField label="Pesquisa" id="Pesquisa" />
          </Box>
        </Pesquisa>
        <Filtro
          filtro={filtro}
          setFiltro={setFiltro}
          setProdutos={setProdutos}
        ></Filtro>
      </NavBar>
      <Banner>
        <img src={imgBanner} alt="banner" />
      </Banner>
      <Main>
        <TituloMain>Ofertas Exclusivas</TituloMain>
        <Produtos>
          <ListaProdutos produtos={produtos} cart={cart} setCart={setCart} />
        </Produtos>
      </Main>
      <BotaoBar />
    </Container>
  );
}

const Container = estilo.div`
  width: 100vw;
  height: 100vh;
`;

const Banner = estilo.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 16vh;

  img {
    width: 90vw;
    height: 15vh;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #d7dbdd;
  }
`;

const Main = estilo.div`
  width: 100vw;
  height: 55vh;
  position: fixed;
  top: 35vh;
  overflow: scroll;
`;

const TituloMain = estilo.p`
  font-family: "Protest Riot", sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 5vh;
  margin-left: 6vw;
  letter-spacing: 2px;
`;

const Produtos = estilo.div`
  height: 30vh;
  display: flex;
  flex-wrap: wrap;
`;

const NavBar = estilo.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;
  position: fixed;
`;

const Pesquisa = estilo.div`
  width: 60vw;
`;
export default Home;
