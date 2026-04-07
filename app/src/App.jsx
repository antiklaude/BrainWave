import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter basename="/BrainWave">
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}
