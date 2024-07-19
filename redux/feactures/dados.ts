import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface contador {
    numero: number
}

const initialState: contador= {
    numero: 1
}

function cambiarNumeroDado(): number {
    return Math.floor(Math.random() * 2) + 1;
  }

const estadoCambio = createSlice({
    name: "contador",
    initialState,
    reducers:{
        cambiarAleatoriamente: (state) => {
            state.numero = cambiarNumeroDado();
        }
    }
})

export const {
    cambiarAleatoriamente
} = estadoCambio.actions

export default estadoCambio.reducer