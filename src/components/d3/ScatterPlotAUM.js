import { useEffect } from 'react';
import * as d3 from 'd3';

// Default Props
ScatterPlotAUM.defaultProps = {
    id: "chart",
    data: null,
    height: 400,
    width: 600
};

function ScatterPlotAUM(props) {
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

        const aumMin = Math.min.apply(Math, props.data.map(img => img["aum"]));
        const aumMax = Math.max.apply(Math, props.data.map(img => img["aum"]));

        const confMin = Math.min.apply(Math, props.data.map(img => Math.min.apply(Math, img["source_logits"].map(val => val))));
        const confMax = Math.max.apply(Math, props.data.map(img => Math.max.apply(Math, img["source_logits"].map(val => val))));

        const x = d3.scaleLinear()
            .domain([aumMin, aumMax])
            .range([10, props.width - 10])

        const y = d3.scaleLinear()
            .domain([confMin, confMax])
            .range([10, props.height - 10])

        // Add dots
        svg.append('g')
        .selectAll("dot")
        .data(props.data)
        .enter()
        .append("circle")
            .attr("cx", (d, i) => x(d["aum"]) )
            .attr("cy", d => {
                if (d["tsub_prediction"] >= d["source_logits"].length) return props.height - 10;
                return props.height + 10 - y(d["source_logits"][d["tsub_prediction"]])
            })
            .attr("r", 5)
            .style("fill", d => d["color"])
    };

    // ComponentDidUpdate
    useEffect(() => draw(), [props.data]);


    return (
        <div id={props.id}>
            
        </div>
    )
}

export default ScatterPlotAUM
