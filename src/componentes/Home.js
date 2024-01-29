import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "./NavBar";
import BotaoBar from "./BotaoBar";
import MontarCard from "./MontarCard";
import imgBanner from "../assets/img/banner.jpg";

function Home() {
  const [produtos, setProdutos] = useState([]);

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
      <NavBar />
      <Banner>
        <img src={imgBanner} alt="banner" />
      </Banner>
      <Main>
        <TituloMain>Ofertas Exclusivas</TituloMain>
        <Produtos>
          <MontarCard produtos={produtos} />
        </Produtos>
      </Main>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Banner = styled.div`
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

const Main = styled.div`
  width: 100vw;
  height: 70vh;
  position: fixed;
  top: 35vh;
  overflow: scroll;
`;

const TituloMain = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 5vh;
  margin-left: 6vw;
`;

const Produtos = styled.div`
  height: 30vh;
  display: flex;
  flex-wrap: wrap;
`;

export default Home;
