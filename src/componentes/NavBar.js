import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import styled from "styled-components";

import { IoOptionsOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <Container>
      <Box
        sx={{
          width: 200,
          maxWidth: "100%",
        }}
      >
        <TextField label="Pesquisa" id="Pesquisa" />
      </Box>
      <Filtro />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vh;
  width: 90vw;
  position: fixed;
  left: 10vw;
`;

const Filtro = styled(IoOptionsOutline)`
  font-size: 26px;
  position: fixed;
  right: 10vw;
  color: #626567;
`;
