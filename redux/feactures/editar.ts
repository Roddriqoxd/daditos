import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Retos } from '../intefaces/retos'

const initialState: Retos = {
    1: '',
    2: 'Hermanos',
    3: 'Todos o nadie',
    4: 'Choque',
    5: 'Obligas',
    6: 'Cultura chupistica',
    7: 'Derecha',
    8: 'Pulgar',
    9: 'Izquierda',
    10: 'Mano arriba',
    11: 'Solo',
    12: 'Por él o por ella',
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