import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions'


const NuevoProductos = ({history}) => {
    // State del componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');
    //Utilizar dispatch y te crea una funcion
    const dispatch = useDispatch();

    //aceder al state del store 
    const error = useSelector(state => state.productos.error)

    // Mandar a llamar el action de productoAction
    
    const agreagarProducto = (producto) => dispatch( crearNuevoProductoAction(producto))

    const submitNuevoProducto = e => {
        e.preventDefault();


        //validar formular

        if(nombre.trim() === '' || precio <= 0 ) {
            return;
        }
        //si no hay errores


        //crear el nuevo Producto
        agreagarProducto({
            nombre,
            precio
        })
        history.push('/')
    } 
    return (
       <div className="row justify-content-center">
           <div className="col-md-8">
               <div className="card">
                   <div className="card-body">
                       <h2 className="text-center mb-4 font-weight-bold">
                           Agregar Nuevo Producto
                       </h2>
                       <form
                       onSubmit={submitNuevoProducto}
                       >
                           <div className="form-group">
                               <label>Nombre del Producto</label>
                               <input 
                               type="text"
                               className="form-control"
                               placeholder="Nombre Producto"
                               name= "precio"
                               value= {nombre}
                               onChange= {(e) => {guardarNombre(e.target.value)}}
                               />
                           </div>
                           <div className="form-group">
                               <label>Precio del Producto</label>
                               <input 
                               type="number"
                               className="form-control"
                               placeholder="Precio del Producto"
                               name="precio"
                               value={precio}
                               onChange= {(e) => {guardarPrecio(Number(e.target.value))}}
                               />
                           </div>
                           <button
                           type="submit"
                           onSubmit={submitNuevoProducto}
                           className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                           >Agregar</button>
                       </form>
                       {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                   </div>
               </div>
           </div>
       </div>
    )   
}

export default NuevoProductos;