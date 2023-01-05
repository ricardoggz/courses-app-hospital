import { NavBar } from './components'
import { AppRoutes } from './routes'
import { HomeView, DashboardUserView } from './views'

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  )
}

export default App