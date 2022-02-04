import './Home.css';
import headshot from '../../resources/images/headshot.jpg'

function Home() {
    return (
        <div id="Home" className="Home">
            <div className="sidebar"></div>
            <div className="center">
                <h1>David Carlyn</h1>
                <img className="headshot" src={headshot} alt="David Carlyn headshot" />
                <div className="profession">
                    <h3>PHD Student</h3>
                    <h3>Ohio State University</h3>
                </div>
            </div>
            <div className="sidebar"></div>
        </div>
    );
}

export default Home;