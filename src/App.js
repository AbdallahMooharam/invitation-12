import { Route, Routes } from 'react-router-dom';
import FormPage from './FormPage/FormPage.jsx';
import ConfirmationPage from './Padgs/ConfirmationPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default App;
