import { configureStore } from "@reduxjs/toolkit"
import Dados from '../feactures/dados'

export const store = configureStore({
    reducer: {
        contador: Dados,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

