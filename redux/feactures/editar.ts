import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Retos } from '../intefaces/retos'
import { RetosOrigiles } from "@/constants/RetosOriginales";

const initialState: Retos = {
    uno: RetosOrigiles.uno,
    dos: RetosOrigiles.dos,
    tres: RetosOrigiles.tres,
    cuatro: RetosOrigiles.cuatro,
    cinco: RetosOrigiles.cinco,
    seis: RetosOrigiles.seis,
    siete: RetosOrigiles.siete,
    ocho: RetosOrigiles.ocho,
    nueve: RetosOrigiles.nueve,
    diez: RetosOrigiles.diez,
    once: RetosOrigiles.once,
    doce: RetosOrigiles.doce,
}


const todiseSlice = createSlice({
    name: 'retos',
    initialState,
    reducers: {
        editar: (state, actions: PayloadAction<Retos>) => {
            state.dos = actions.payload.dos
            state.tres = actions.payload.tres
            state.cuatro = actions.payload.cuatro;
            state.cinco = actions.payload.cinco;
            state.seis = actions.payload.seis;
            state.siete = actions.payload.siete;
            state.ocho = actions.payload.ocho;
            state.nueve = actions.payload.nueve;
            state.diez = actions.payload.diez;
            state.once = actions.payload.once;
            state.doce = actions.payload.doce;
        },
        restaurar: (state) => {
            state.dos = initialState.dos
            state.tres = initialState.tres
            state.cuatro = initialState.cuatro;
            state.cinco = initialState.cinco;
            state.seis = initialState.seis;
            state.siete = initialState.siete;
            state.ocho = initialState.ocho;
            state.nueve = initialState.nueve;
            state.diez = initialState.diez;
            state.once = initialState.once;
            state.doce = initialState.doce;
        }
    }
})

export const {
    editar,
    restaurar
} = todiseSlice.actions
export default todiseSlice.reducer