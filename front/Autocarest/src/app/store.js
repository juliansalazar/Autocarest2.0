import { configureStore } from '@reduxjs/toolkit'
import  authReducer from '../features/auth/authSlice'
import placaReducer from '../features/placas/placaSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        placa: placaReducer
    },
})

export default store;