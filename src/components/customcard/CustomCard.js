import React, {useState} from "react";
import {Button, Card, IconButton, Modal} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import '../home/Home';
import '../../styles/App.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const CustomCard = ({
                        setNuevaComida,
                        setNuevaCantComida,
                        actualizarComida,
                        actualizarCantComida,
                        eliminarComida,
                        listaDeComida
                    }) => {

    const [open, setOpen] = useState(false);
    const handleOpenDialog = () => {
        setOpen(true);
    };
    const handleCloseDialog = () => {
        setOpen(false);
    }
    return (
        <div id="listadoComida">
            {listaDeComida && listaDeComida.map((val, key) => (

                    <Card id="cardComida" key={key}>
                        <div id="showedFoods">
                            <h3> Nombre: {val.nombreComida} </h3>
                            <h3> Cantidad: {val.cantidadComida} </h3>
                        </div>

                        <div style={{display: "flex"}}/>
                        <div style={{width: "55%"}}/>


                        <TextField
                            id="standard-basic-small"
                            size="small"
                            fullWidth
                            color="primary"
                            label="Nuevo nombre"
                            variant="outlined"
                            onChange={(event) => {
                                setNuevaComida(event.target.value);
                            }}
                        />

                        <div>
                            <Button
                                id="btn-update-comida"
                                variant="contained"
                                color="primary"
                                startIcon={<EditIcon/>}
                                onClick={() => actualizarComida(val._id)}>
                                Actualizar
                            </Button>
                        </div>

                        <TextField
                            id="edit_cant_comida"
                            size="small"
                            fullWidth
                            type="number"
                            color="primary"
                            label="Nueva cantidad"
                            variant="outlined"
                            onChange={(event) => {
                                setNuevaCantComida(event.target.value);
                            }}
                        />

                        <Button
                            id="btn-update-cant-comida"
                            variant="contained"
                            color="primary"
                            startIcon={<EditIcon/>}
                            onClick={() => actualizarCantComida(val._id)}>
                            Actualizar
                        </Button>

                        <Button
                            id="btn-delete-comida"
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon/>}
                            onClick={handleOpenDialog}>
                            Eliminar
                        </Button>

                        <Dialog open={open}
                                onClose={handleCloseDialog}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description">
                            <DialogTitle>
                                {"¿Está seguro?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseDialog}>
                                        Cerrar
                                    </Button>
                                    <Button
                                        id="eliminarComida"
                                        color="secondary"
                                        onClick={() => {
                                            (eliminarComida(val._id));
                                            handleCloseDialog();
                                        }}>
                                        Si
                                    </Button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                    </Card>
                )
            )}
        </div>
    )
}

export default CustomCard;