import './App.css';
import Layout from './Pages/Layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ClassForm from './Pages/ClassForm';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ClassForm" element={<ClassForm />} />
            {/* <Route path="/templates" element={<Template />} /> */}
            {/* <Route path="/generate-readme" element={<GenerateReadme />} /> */}
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
