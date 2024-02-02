import estilo from "styled-components";
import axios from "axios";
import { useEffect } from "react";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { IoOptionsOutline } from "react-icons/io5";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Filtro() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [categorias, setCategorias] = React.useState([]);

  function CategoriasNaTela() {
    const categoria = axios.get(`https://fakestoreapi.com/products/categories`);
    categoria.then(({ data }) => setCategorias(data));
    categoria.catch((err) => alert("deu erro"));
  }

  useEffect(() => {
    CategoriasNaTela();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <IconeFiltro variant="outlined" onClick={handleClickOpen}></IconeFiltro>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            width: 250,
            height: 50,
            fontSize: 16,
            p: 2,
            fontFamily: "Open Sans",
          }}
          id="customized-dialog-title"
        >
          Filtrar por Categoria
        </DialogTitle>
        <DialogContent dividers>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {categorias.map((categoria, indice) => (
                <FormControlLabel
                  key={indice}
                  value={categoria}
                  label={categoria}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ height: 40 }}>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{ fontSize: 12, fontWeight: 700 }}
          >
            Filtrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

const IconeFiltro = estilo(IoOptionsOutline)`
  font-size: 26px;
  color: #626567;
  margin-left: 5vw;
`;
