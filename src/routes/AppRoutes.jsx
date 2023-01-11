import { Routes, Route } from 'react-router-dom'
import { LoginView, HomeView, DashboardUserView, CartView, VideoView } from '../views'

export const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path='/' element={<HomeView />}/>
            <Route path='/login' element={<LoginView />} />
            <Route path='/dashboard' element={<DashboardUserView />} />
            <Route path='/cart' element={ <CartView />} />
            <Route path='/video/:id' element={<VideoView />} />
        </Routes>
    )
}