import React, { useState } from "react";
import {useDispatch} from "react-redux";
import Axios from 'axios';
import '../../styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
import CustomCard from '../customcard/CustomCard';
import { ButtonAddComida } from "../button/button";
import IconButton from '@material-ui/core/IconButton';
import Toast from '../toast/Toast';
import { TextField } from "@material-ui/core";
import {startLogout} from "../../actions/auth";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function App() {

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout())
  }
  
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }, 
  }));
    // eslint-disable-next-line
    const classes = useStyles();

    const [nombreComida, setNombreComida] = useState("");
    const [cantidadComida, setCantidad] = useState(0);
    const [nuevaComida, setNuevaComida] = useState("");
    const [listaDeComida, setListaDeComida] = useState([]);
    const [openToast, setOpenToast] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");



    /*Declaracion e inicializacion de reloj superior*/
    let time = new Date().toLocaleTimeString();
    // eslint-disable-next-line
    const [cTime, seCTime] = useState(time);
    const updateTime =() => {
      time = new Date().toLocaleTimeString();
      seCTime(time);
    }
    setInterval(updateTime, 1000);



    const getData = async () => {
      const response = await Axios.get("http://localhost:3001/read");
      setListaDeComida(response.data);
    };

    React.useEffect(() => {
      const fecthData = async () => {
          await getData();
      };
      fecthData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    const addToList = async () => {

      const response =  await Axios.post("http://localhost:3001/insert", {
        
        nombreComida: nombreComida, 
        cantidadComida: cantidadComida,
      });
      if (response.status === 200) {
        await getData();
        setNombreComida("");
        setCantidad("");
        setOpenToast(true);
        setSeverity("success");
        setMessage("Comida agregada exitosamente");
      }
      else {
        setOpenToast(true);
        setSeverity("error");
        setMessage("Ha ocurrido un error");
      }
    };

    const actualizarComida = async (id) => {
      // eslint-disable-next-line
      const response = await Axios.put("http://localhost:3001/update", {
        id: id, 
        nuevaComida: nuevaComida,
      });
      if (response.status === 200) {
        await getData();
        setNombreComida("");
        setCantidad("");
      }
    };

    const eliminarComida = async (id) => {
      // eslint-disable-next-line
      const response = await Axios.delete(`http://localhost:3001/delete/${id}`
      )
      if (response.status === 200) {
        await getData();
        setNombreComida("");
        setCantidad("");
      }
    };

    React.useEffect(() => {
      if (openToast) {
          let timeout = setTimeout(() => setOpenToast(false), 4500)
          return () => clearTimeout(timeout);
      }
    }, [openToast])


    return (


        <div className="App">

          <div>
            <IconButton
                id="btnLogout"
                color="secondary"
                onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </div>

          <div id="relojito">
            <p>Hora Actual</p>
            <p>{time}</p>
          </div>
            <h1>CRUD de Comida</h1>
            <br/>

            <Toast open={openToast}
            severity = {severity}
            message = {message}/>

            
            <TextField 
                value={nombreComida} 
                id="txtNameComida"
                size="small"
                label="Nombre de la comida" 
                placeholder="Inserte comida"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => {
                setNombreComida(event.target.value);
            }}/>
            <br/>
            <TextField 
                value={cantidadComida} 
                id="txtCantComida"
                size="small"
                label="Cantidad a agregar"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                type="number"
                onChange={(event) => {
                setCantidad(event.target.value);
            }}/>

            <ButtonAddComida
                    mtop = "10px"
                    // eslint-disable-next-line
                    disabled={cantidadComida === "" || nombreComida === "" || cantidadComida == 0}
                    onClick={addToList}>
                    Agregar Comida
            </ButtonAddComida>
            <br/>
            <div>
            <h2> Lista de Alimentos </h2>
            <CustomCard   listaDeComida = {listaDeComida}
                          setNuevaComida = {setNuevaComida}
                          actualizarComida = {actualizarComida}
                          eliminarComida = {eliminarComida}/>
            </div>
        </div>
    );
}

export default App;