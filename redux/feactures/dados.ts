import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface contador {
    dadoUno: number;
    dadoDos: number;
}

const initialState: contador = {
    dadoUno: 0,
    dadoDos: 0,
}

function cambiarNumeroDado(): number {
    return Math.floor(Math.random() * 6) + 1;
}

const estadoCambio = createSlice({
    name: "contador",
    initialState,
    reducers: {
        primerDado: (state) => {
            state.dadoUno = cambiarNumeroDado();
        },
        segundoDado: (state) => {
            state.dadoDos = cambiarNumeroDado();
        },
        limpiar: (state) => {
            state.dadoUno = 0;
            state.dadoDos = 0;
        }
    }
})

export const {
    primerDado,
    segundoDado,
    limpiar
} = estadoCambio.actions

export default estadoCambio.reducer