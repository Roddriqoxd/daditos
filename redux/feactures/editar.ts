import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Retos } from '../intefaces/retos'

const initialState: Retos = {
    uno: '',
    dos: 'Hermanos',
    tres: 'Todos o nadie',
    cuatro: 'Choque',
    cinco: 'Obligas',
    seis: 'Cultura chupistica',
    siete: 'Derecha',
    ocho: 'Pulgar',
    nueve: 'Izquierda',
    diez: 'Mano arriba',
    once: 'Solo',
    doce: 'Por él o por ella',
}


const todiseSlice = createSlice({
    name: 'retos',
    initialState,
    reducers: {
        editar: (state, actions: PayloadAction<Retos>) => {
            state = actions.payload;
        },
    }
})

export const {
    editar
} = todiseSlice.actions
export default todiseSlice.reducer