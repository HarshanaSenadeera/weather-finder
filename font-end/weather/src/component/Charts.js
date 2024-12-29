import {useEffect} from "react";
import * as d3 from 'd3';

export const Charts = () => {


    // D3 chart creation function
    const createChart = (id) => {
        // Select the specific div for the chart and set dimensions
        const width = 150;
        const height = 150;

        const svg = d3.select(`#${id}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Example: Create a simple bar chart
        const data = [30, 86, 168, 281, 303, 365];

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 25)
            .attr('y', (d) => height - d)
            .attr('width', 20)
            .attr('height', (d) => d)
            .attr('fill', '#61dafb');
    };

    useEffect(() => {
        // Call the chart creation function for each chart block
        createChart('chart1');
        createChart('chart2');
        createChart('chart3');
    }, []);


    return(

        <>

            <div className="fullwidth-block" style={{ backgroundColor: '#262936' }}>

                <div className="container">
                    <h2 className="section-title">Updated charts</h2>
                    <div className="row">
                        {/* First Chart */}
                        <div className="col-md-4">
                            <div className="news">
                                <div className="date">06.10</div>
                                <h3><a href="#">Doloremque laudantium totam sequi</a></h3>
                                <div id="chart1"></div> {/* Placeholder for the D3.js chart */}
                            </div>
                        </div>

                        {/* Second Chart */}
                        <div className="col-md-4">
                            <div className="news">
                                <div className="date">06.10</div>
                                <h3><a href="#">Doloremque laudantium totam sequi</a></h3>
                                <div id="chart2"></div> {/* Placeholder for the D3.js chart */}
                            </div>
                        </div>

                        {/* Third Chart */}
                        <div className="col-md-4">
                            <div className="news">
                                <div className="date">06.10</div>
                                <h3><a href="#">Doloremque laudantium totam sequi</a></h3>
                                <div id="chart3"></div> {/* Placeholder for the D3.js chart */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}