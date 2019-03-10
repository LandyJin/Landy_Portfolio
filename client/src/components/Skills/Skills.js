import React, { Component } from 'react';

// CSS
import '../../css/Skills.css'

// Chart JS
import {Doughnut} from 'react-chartjs-2';

// React Bootstrap
import "react-bootstrap/dist/react-bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charts: [
                {   id:1, title: "Visual Studio Code",
                    borderWidth: 0.3,
                    datasets: [
                    {data: [10, 90],
                    borderColor: ['#c1c1c1','#FDCFB3'], 
                    backgroundColor: ['#c1c1c1','#FDCFB3'],}],
                },
                {   id:2, title: "AWS S3, Cloudfront",
                    datasets: [
                    {data: [5, 95],
                    borderColor: ['#c1c1c1','#FDCFB3'],
                    backgroundColor: ['#c1c1c1','#FDCFB3']}]
                },
                {   id:3, title: "Heroku",
                    datasets: [
                    {data: [20, 80],
                    borderColor: ['#c1c1c1','#FDCFB3'],
                    backgroundColor: ['#c1c1c1','#FDCFB3']}]
                },
                {   id:4, title: "GIT (Github / Bitbucket)",
                    datasets: [
                    {data: [30, 70],
                    borderColor: ['#c1c1c1','#FDCFB3'],
                    backgroundColor: ['#c1c1c1','#FDCFB3']}]
                },
                {   id:5, title: "PostgreSQL",
                    datasets: [
                    {data: [30, 70],
                    borderColor: ['#c1c1c1','#FDCFB3'],
                    backgroundColor: ['#c1c1c1','#FDCFB3']}]
                },
                {   id:6, title: "Xcode",
                    datasets: [
                    {data: [50, 50],
                    borderColor: ['#c1c1c1','#FDCFB3'],
                    backgroundColor: ['#c1c1c1','#FDCFB3']}]
                },
            ]
        }
    }
  render() {
    return (
      <div id="detailSkills">
        <div className="detailSkills">
            <div className="skillDescription">
                <h1>Technical Tools</h1>
                <span>————</span>
                <p>Technical Tools I'm using</p>
            </div>
            <Row className="processBar" style={{display:"flex"}}>
            {console.log(this.state.charts)}
            {this.state.charts.map(chart => ( 
                <Col key={chart.id} sm="6" md="4" style={{paddingTop: "30px"}}>
                    <Doughnut 
                    className="Doughnut"
                    data={chart} 
                    options={{
                        cutoutPercentage: 80,
                        title: {
                            display: true,
                            text: chart.title,
                            fontColor: "#c1c1c1",
                            fontSize: 15
                        },
                    }}/>
                </Col>
            ))}
            </Row>
        </div>
      </div>
    )
  }
}

export default Skills
