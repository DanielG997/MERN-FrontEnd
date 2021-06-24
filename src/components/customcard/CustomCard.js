import React from "react";
import { Card, IconButton } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import '../home/Home';
import '../../styles/App.css';

const CustomCard = ({setNuevaComida, actualizarComida, eliminarComida, listaDeComida}) => {

      
      return (
            <div id="listadoComida"> 
            {listaDeComida && listaDeComida.map((val, key) => (

              <Card id="cardComida"  key = {key}> 
                <div id="showedFoods">
                    <h3> Nombre: {val.nombreComida} </h3> 
                    <h3> Cantidad: {val.cantidadComida} </h3>
                </div>

                <div style={{display:"flex"}}>
                <div style={{width:"55%"}}>

                <TextField 
                    id="standard-basic-small"
                    size="small"
                    fullWidth
                    color="primary"
                    label="Nueva Comida" 
                    variant="outlined"     
                    onChange={(event) => {
                    setNuevaComida(event.target.value);
                    }}
                />
                </div>

                <IconButton 
                      id="actualizarComida" 
                      color="primary"
                      onClick={() => actualizarComida(val._id)}>
                      <EditIcon />
                </IconButton>

                <IconButton 
                      id="eliminarComida" 
                      color="secondary" 
                      onClick={() => eliminarComida(val._id)}>
                      <DeleteIcon />
                </IconButton>
                </div>
              </Card>        
              )
            )}
            </div>
    )
}

export default CustomCard;