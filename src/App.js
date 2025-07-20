import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import EditCvPage from './pages/EditCVPage';
import NavBar from './components/NavBar';
import PreviewPage from './pages/PreviewPage';
import SettingPage from './pages/SettingsPage';
import { CvProvider } from './context/CvContext';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';


function App() {
  return (
    <div >
      <ThemeProvider >
        <GlobalStyle />
      <CvProvider>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/edit-cv-page" element={<EditCvPage />} />
            <Route path="/preview-cv" element={<PreviewPage />} />
            <Route path="/settings" element={<SettingPage />} />
            <Route path="*" element={<><h1>Page Not Found</h1> <NavLink to="/">Go to Home</NavLink></>} />
          </Routes>
        </BrowserRouter>
        
      </CvProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
