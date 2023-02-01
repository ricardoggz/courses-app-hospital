import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Spinner, Container } from '../components'
import {
    LoginView,
    DashboardUserView,
    VideoView,
    PaymentView,
    RegisterView
} from '../views'

const HomeView = lazy(()=> {
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(import('../views/HomeView/HomeView')), 500)
    })
})
export const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path='/' element={
                <Suspense fallback={<Container><Spinner /></Container>}>
                    <HomeView />
                </Suspense>
            }/>
            <Route path='/login' element={<LoginView />} />
            <Route path='/dashboard' element={<DashboardUserView />} />
            <Route path='/video/:id' element={<VideoView />} />
            <Route path='/payment' element={<PaymentView />}/>
            <Route path='/register' element={<RegisterView />}/>
        </Routes>
    )
}