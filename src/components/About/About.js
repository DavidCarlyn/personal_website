import './About.css';

function About() {
    return (
        <div id="About" className="About">
            <h1>About</h1>
            <p>
                3<sup>rd</sup> year PHD student @ Ohio State University studying machine learning and computer vision.
                Advised by <a href = "https://cse.osu.edu/people/chao.209">Dr. Wei-Lun (Harry) Chao</a>. <br />
                <br />
                Research areas include: Source-free Domain Adaptation, Explainable AI (XAI), Medical & Biological applications. <br />
                <a href="https://scholar.google.com/citations?user=UccNZ0YAAAAJ">Google Scholar Profile</a>
            </p>
            <h2>Published Papers</h2>
            <div className="papers">
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0016510721000304">
                    Machicado, J. D., Chao, W. L., Carlyn, D. E., Pan, T. Y., Poland, S., Alexander, V. L., ... & Krishna, S. G. (2021). <br />
                    <em>High performance in risk stratification of intraductal papillary mucinous neoplasms by confocal laser endomicroscopy image analysis with convolutional neural networks (with video)</em>. <br />
                    Gastrointestinal Endoscopy.
                </a>
                <br /><br />
                <a href="https://www.igi-global.com/article/glare/290043">
                    Gandolfi, E., Ferdig, R. E., Carlyn, D., Kratcoski, A., Dunfee, J., Hassler, D., ... & Clements, R. (2021).<br />
                    <em>GLARE: An Open Source Augmented Reality Platform for Location-Based Content Delivery</em>. <br />
                    International Journal of Virtual and Augmented Reality (IJVAR), 5(1), 1-19
                </a>

            </div>
        </div>
    );
}

export default About;