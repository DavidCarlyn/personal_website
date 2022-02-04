import './Resume.css';
import ResumePDF from '../../resources/resume.pdf';

function Resume() {
    return (
        <div id="Resume" className="Resume">
            <h1>Resume</h1>
            <a href={ResumePDF}>Download</a>
        </div>
    );
}

export default Resume;