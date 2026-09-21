import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import IdeaLab from './pages/IdeaLab';
import Internships from './pages/Internships';
import SchoolPrograms from './pages/SchoolPrograms';
import SummerCamps from './pages/SummerCamps';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="idea-lab" element={<IdeaLab />} />
          <Route path="internships" element={<Internships />} />
          <Route path="school-programs" element={<SchoolPrograms />} />
          <Route path="summer-camps" element={<SummerCamps />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Catch all route for client-side 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
