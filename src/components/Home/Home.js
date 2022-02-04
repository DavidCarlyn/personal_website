import './Home.css';
import headshot from '../../resources/images/headshot.jpg'

function Home() {
    return (
        <div id="Home" className="Home">
            <table>
                <tr>
                    <td>
                        <img className="headshot" src={headshot} alt="David Carlyn headshot" />
                    </td>
                    <td>
                        <h1 className="profession">PHD Student @ Ohio State University</h1>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Home;