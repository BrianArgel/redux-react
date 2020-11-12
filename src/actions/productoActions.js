import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR

} from '../types'
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// crear Nuevos productos
export function crearNuevoProductoAction(producto) {
    return async(dispatch) => {
        dispatch(agrearProducto());

        try {

            //INsertar en la api
           await clienteAxios.post('/productos', producto)

            // si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto))

            //alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'

            )
        } catch (error) {
            // si hay un error cambiar el state
            console.log('hay un error', error)
            dispatch(agregarProductoError(true))

            //alerta de error
            Swal.fire({
                icon: "error",
                title: 'Hubo un error',
                text: 'Hubo un error intenta de nuevo'
            })
        }
    } 
}

const agrearProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// SI el producto se guarda en la base de datos

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})