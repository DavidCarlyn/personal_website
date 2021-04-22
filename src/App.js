import { useState } from 'react';

import './App.css';

import JSONPicker from './components/JSONPicker';

function App() {
    const [jsonData, setJsonData] = useState({});
    const [graphData, setGraphData] = useState({
        "xaxis" : null,
        "yaxis" : null,
        "zaxis" : null,
    })

    const upload = (e) => {
        e.preventDefault();
        var files = document.getElementById('files').files;
        if (files.length <= 0) {
            console.log("No files uploaded");
            return false;
        }
    
        var fr = new FileReader();
    
        fr.onload = function(e) { 
            var result = JSON.parse(e.target.result);
            setJsonData(result);
        }

        // read file
        fr.readAsText(files.item(0));
    }

    const selectData = (data) => {
        const radioBtns = document.querySelectorAll('input[name="axis"]');
        for (const rb of radioBtns) {
            if (rb.checked) {
                const id = rb.id
                setGraphData( prevGraphData => ({
                    ...prevGraphData,
                    [id] : data
                }));
                break;
            }
        }
    }

    const drawGraph = (e) => {
        e.preventDefault();
        let dataTransform = [];
        // X Axis
        let xData = graphData["xaxis"];
        let key = document.getElementById("xaxis-key").value;
        let xKeys = [];
        if (key !== "") {
            xKeys = key.split("/");
        }
        // Y Axis
        let yData = graphData["yaxis"];
        key = document.getElementById("yaxis-key").value;
        let yKeys = [];
        if (key !== "") {
            yKeys = key.split("/");
        }
        // Z Axis
        let zData = graphData["zaxis"];
        key = document.getElementById("zaxis-key").value;
        let zKeys = [];
        if (key !== "") {
            zKeys = key.split("/");
        }
        for (var i = 0; i < xData.length; ++i) {
            let x = xData[i];
            let y = null;
            let z = null;
            xKeys.forEach((k, i) => { x = x[k]; });
            if (yData !== null) {
                y = yData[i];
                yKeys.forEach((k, i) => { y = y[k]; });
            }
            if (zData !== null) {
                z = zData[i];
                zKeys.forEach((k, i) => { z = z[k]; });
            }
            dataTransform.push({
                x : x,
                y : y,
                z : z
            });
        }

        console.log(dataTransform);
    }

    return (
        <div className="App">
            <h1>Welcome!</h1>
            <div>
                <input type="radio" id="xaxis" name="axis" value="X Axis" />
                <label htmlFor="xaxis">X Axis</label>
                <input type="text" id="xaxis-key" name="xaxis-key" />
                <input type="checkbox" id="xaxis-check" name="xaxis-check" disabled checked={graphData["xaxis"] !== null} /><br />
                <input type="radio" id="yaxis" name="axis" value="Y Axis" />
                <label htmlFor="yaxis">Y Axis</label>
                <input type="text" id="yaxis-key" name="yaxis-key" />
                <input type="checkbox" id="yaxis-check" name="yaxis-check" disabled checked={graphData["yaxis"] !== null} /><br />
                <input type="radio" id="zaxis" name="axis" value="Z Axis" />
                <label htmlFor="zaxis">Z Axis</label> 
                <input type="text" id="zaxis-key" name="zaxis-key" />
                <input type="checkbox" id="zaxis-check" name="zaxis-check" disabled checked={graphData["zaxis"] !== null} />
            </div>
            <input type="file" id='files' />
            <button onClick={upload}>Upload</button><br />
            <button onClick={drawGraph}>Draw Graph</button>
            <JSONPicker data={jsonData} data_selector={selectData} />
        </div>
    );
}

export default App;
