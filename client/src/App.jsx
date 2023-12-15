import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import QuestionnairePage from './pages/QuestionnairePage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import NavBar from './components/Navbar.jsx'

export default function App() {
  return(
    <Router>
      <NavBar />
      <Routes>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/questionnaire' element={<QuestionnairePage />} />
      </Routes>
    </Router>
  )
}
