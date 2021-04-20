import { useState } from 'react';
import './App.css';

import ScatterPlot from './components/d3/ScatterPlot';

function App() {
    const CHART_ID = "chart";
    const [data, setData] = useState(null);

    const processFile = () => {
        var files = document.getElementById('files').files;
        console.log(files);
        if (files.length <= 0) {
            console.log("No files uploaded");
            return false;
        }
    
        var fr = new FileReader();
    
        fr.onload = function(e) { 
            console.log(e);
            var result = JSON.parse(e.target.result);
            console.log(result);
            setData(result["data"]);
        }

        // read file
        fr.readAsText(files.item(0));
    };


    return (
      <div className="App">
          <h1>Welcome!</h1>
          <input type="file" id="files" name="files" />
          <button onClick={() => processFile()}>Process</button>
          {data === null ? "" : data["x"][1]}
          <ScatterPlot id={CHART_ID} data={data} />
      </div>
    );
}

export default App;
