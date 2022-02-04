import './App.css';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Resume from './components/Resume/Resume.js';
import Contact from './components/Contact/Contact.js';

function App() {
    return (
        <div className="App">
            <header>
                <a href="#Home"><div>Home</div></a>
                <a href="#About"><div>About</div></a>
                <a href="#Resume"><div>Resume</div></a>
                <a href="#Contact"><div>Contact</div></a>
            </header>
            <Home />
            <About />
            <Resume />
            <Contact />
        </div>
    );
}

export default App;
