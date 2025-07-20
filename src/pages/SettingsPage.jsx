//SettingsPage.jsx

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const SettingPage = () =>{

    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
    <div className="container">

        <h1>This is the Settings Page</h1>
        <p>Here you can change your theme settings. Choose a theme to start with:</p>

        <select onChange={(e) => toggleTheme(e.target.value)} value={theme}>
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
        </select>

    </div>

)}

export default SettingPage;