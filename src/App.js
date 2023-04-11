import './App.css';
import Layout from './Pages/Layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ClassForm from './Pages/ClassForm';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/class-form" element={<ClassForm />} />
            {/* <Route path="/templates" element={<Template />} /> */}
            {/* <Route path="/generate-readme" element={<GenerateReadme />} /> */}
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
