import { useEffect } from 'react';
import * as d3 from 'd3';

// Default Props
ScatterPlot.defaultProps = {
    id: "chart",
    data: null,
    height: 100,
    width: 100
};

function ScatterPlot(props) {
    const draw = () => {
        // If no data. Don't draw
        if (props.data === null) {
            return false;
        }

        // Remove old content
        document.getElementById(props.id).innerHTML = "";

        // Draw
        const svg = d3.select("#" + props.id).append("svg")
            .attr("width", props.width)
            .attr("height", props.height);

        // Add dots
        svg.append('g')
        .selectAll("dot")
        .data(props.data["y"])
        .enter()
        .append("circle")
            .attr("cx", (d, i) => props.data["x"][i] )
            .attr("cy", d => 100 - d )
            .attr("r", 5)
            .style("fill", "#69b3a2")
    };

    // ComponentDidUpdate
    useEffect(() => draw(), [props.data]);


    return (
        <div id={props.id}>
            
        </div>
    )
}

export default ScatterPlot
