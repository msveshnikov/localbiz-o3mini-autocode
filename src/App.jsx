import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>Small Business ROI Marketing Platform</h1>
                <button className="toggle-button" onClick={toggleDarkMode}>
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </header>
            <main className="app-main">
                <section className="hero">
                    <h2>Maximize Your ROI</h2>
                    <p>
                        Empowering small businesses like plumbers, lawyers, and doctors with
                        targeted marketing strategies and a user-friendly interface.
                    </p>
                </section>
                <section className="features">
                    <h3>Features</h3>
                    <ul>
                        <li>Modern Frontend Architecture with React and Vite</li>
                        <li>
                            Responsive and Adaptive Layouts for an optimal experience across devices
                        </li>
                        <li>Customizable User Interface with dark mode and theme customization</li>
                        <li>Future Analytics Dashboard for detailed campaign performance</li>
                        <li>Modular Component Library for scalable marketing campaigns</li>
                        <li>Enhanced User Experience with micro-interactions and animations</li>
                    </ul>
                </section>
            </main>
            <footer className="app-footer">
                <p>Empowering small businesses to thrive in the digital age.</p>
            </footer>
        </div>
    );
}

export default App;
