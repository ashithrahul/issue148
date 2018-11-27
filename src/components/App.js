import React, { Component } from "react";
import * as styles from '../styles/App.css';
import { NavBar } from './common/NavBar/NavBar';
import img from './../assets/en1.jpeg'
import '@tensorflow/tfjs-node';
import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';

const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });


class App extends Component {
  async componentDidMount() {
    const input = document.getElementById('myImg');
    const detections = await faceapi.detectAllFaces(input);
    console.log(detections);
  }

  render() {
        return(
          <div>
            <div className={styles.cssLoader}>
              <img id="myImg" src={img} />
              <canvas id="myCanvas" />
            </div>
        <NavBar />
          </div>
        );
    }
}

export default App;
