import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ExperiencePage from './pages/ExperiencePage'
import WorkPage from './pages/WorkPage'
import SpeakingPage from './pages/SpeakingPage'
import SuperAccPage from './pages/SuperAccPage'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#f9f7f4]">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/work/superacc" element={<SuperAccPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
