import estilo from "styled-components";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

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
  const [checked, setChecked] = React.useState([0]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              height: 200,
              bgcolor: "background.paper",
              p: 0,
            }}
          >
            {[
              "Eletrônicos",
              "Jóias",
              "Roupas Masculinas",
              "Roupas Femininas",
            ].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                    dense
                  >
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                    <ListItemText id={labelId} primary={`${value}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
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
