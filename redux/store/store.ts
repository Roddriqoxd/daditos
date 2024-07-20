import { configureStore } from "@reduxjs/toolkit"
import Dados from '../feactures/dados'
import Editar from '../feactures/editar'

export const store = configureStore({
    reducer: {
        contador: Dados,
        retos: Editar,

    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

