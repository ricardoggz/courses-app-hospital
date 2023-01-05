import { Routes, Route } from 'react-router-dom'
import { LoginView, HomeView } from '../views'

export const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path='/' element={<HomeView />}/>
            <Route path='/login' element={<LoginView />} />
        </Routes>
    )
}