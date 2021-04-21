import { useState, useEffect } from 'react';
import './App.css';

import ScatterPlotAUM from './components/d3/ScatterPlotAUM';

function App() {
    const CHART_ID = "chart";
    const [data, setData] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [dataManagement, setDataManagement] = useState(<></>);
    const [formData, setFormData] = useState({
        "correctColor" : "#00ff00",
        "incorrectColorAlpha" : "ff",
        "incorrectColor" : "#ff0000",
        "correctColorAlpha" : "ff",
        "dummyColor" : "#aaaaaa",
        "dummyColorAlpha" : "ff",
    })

    const uploadFile = (e) => {
        var files = document.getElementById('files').files;
        console.log(files);
        if (files.length <= 0) {
            console.log("No files uploaded");
            return false;
        }
    
        var fr = new FileReader();
    
        fr.onload = function(e) { 
            var result = JSON.parse(e.target.result);
            setData(result);
        }

        // read file
        fr.readAsText(files.item(0));
    };

    const onChangeHandler = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData)
    }

    const processData = (e) => {
        e.preventDefault();
        const iterSelect = document.getElementById("iter-select");
        const iter = iterSelect.options[iterSelect.selectedIndex].value;

        let newChartData = [];
        const images = data["iterations"][iter]["aum"]["images"];
        const dummyClass = data["class_num"]
        for (var key in images) {
            let pred = images[key]["tsub_prediction"];
            let gt = images[key]["gt"];
            let color = formData["dummyColor"] + formData["dummyColorAlpha"];
            if (pred != dummyClass) {
                if (pred === gt) {
                    color = formData["correctColor"] + formData["correctColorAlpha"];
                } else {
                    color = formData["incorrectColor"] + formData["incorrectColorAlpha"];
                }
            }
            newChartData.push({
                "path" : key,
                "gt" : gt,
                "source_prediction" : images[key]["source_prediction"],
                "source_logits" : images[key]["source_logits"],
                "aum" : images[key]["aum"],
                "tsub_prediction" : pred,
                "color" : color
            })
        }

        setChartData(newChartData);
    }

    // on data update
    useEffect(() => {
        if (data === null) return false;
        let options = []
        data["iterations"].forEach((d, i) => {
            options.push(<option value={i}>{i+1}</option>);
        });
        console.log("Options", options)
        setDataManagement(
            <form>
                <div>
                    <select id="iter-select" name="iter-select">
                        {options}
                    </select>
                </div>
                <div>
                    <input type="color" id="correctColor" name="correctColor" value={formData["correctColor"]} onChange={onChangeHandler}/>
                    <input type="text" id="correctColorAlpha" name="correctColorAlpha" value={formData["correctColorAlpha"]} onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="color" id="incorrectColor" name="incorrectColor" value={formData["incorrectColor"]} onChange={onChangeHandler}/>
                    <input type="text" id="incorrectColorAlpha" name="incorrectColorAlpha" value={formData["incorrectColorAlpha"]} onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="color" id="dummyColor" name="dummyColor" value={formData["dummyColor"]} onChange={onChangeHandler}/>
                    <input type="text" id="dummyColorAlpha" name="dummyColorAlpha" value={formData["dummyColorAlpha"]} onChange={onChangeHandler}/>
                </div>
                <button onClick={processData}>Draw Graph</button>
            </form>
        )
    }, [data, formData])


    return (
      <div className="App">
          <h1>Welcome!</h1>
          <input type="file" id="files" name="files" />
          <button onClick={uploadFile}>Upload</button>
          { dataManagement }
          <ScatterPlotAUM id={CHART_ID} data={chartData} />
      </div>
    );
}

export default App;
