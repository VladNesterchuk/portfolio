import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </main>
    </>
  )
}

export default App
