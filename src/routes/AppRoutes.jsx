import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Spinner, Container } from '../components'
import {
    PaymentView,
    RegisterView,
    LiveVideoView,
    LiveVideoView2
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
            {/*<Route path='/payment' element={<PaymentView />}/>
            <Route path='/register' element={<RegisterView />}/>*/}
            <Route path='/5to-congreso-enfermeria-2023' element={<LiveVideoView />}/>
            <Route path='/curso-taller-de-ortopedia-pediatrica' element={<LiveVideoView2 />}/>
        </Routes>
    )
}