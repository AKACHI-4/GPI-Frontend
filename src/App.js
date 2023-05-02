import './App.css';
import Layout from './Pages/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ClassForm from './Pages/ClassForm';
import StudentForm from './Pages/StudentForm';
import ClassRoom from './Pages/ClassRoom';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/student-form" element={<StudentForm />} />
            <Route path="/class-form" element={<ClassForm />} />
            <Route path="/class-room" element={<ClassRoom />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
