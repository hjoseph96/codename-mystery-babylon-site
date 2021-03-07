import React from "react"
import { Link } from "gatsby"
import * as THREE from 'three';
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS

class PurpleSmoke extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: new THREE.Clock(),
      scene: new THREE.Scene(),
      renderer: new THREE.WebGLRenderer(),
      light: new THREE.DirectionalLight(0xffffff,0.5),
      camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 ),
      geometry: new THREE.BoxGeometry( 200, 200, 200 ),
      material: new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } ),
      smokeTexture: THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png'),
      smokeGeo: new THREE.PlaneGeometry(300,300),
      smokeParticles: [],
      cubeSineDriver: 0
    }

    this.state.delta = this.state.clock.getDelta();
    this.state.mesh = new THREE.Mesh( this.state.geometry, this.state.material );
    this.state.smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0xbb4ff1,
      map: this.state.smokeTexture,
      transparent: true
    });
  }

  init() {
      this.state.renderer.setSize( window.innerWidth, window.innerHeight );


      this.state.camera.position.z = 1000;
      this.state.scene.add( this.state.camera );
      //scene.add( mesh );

      THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS


      this.state.light.position.set(-1,0,1);
      this.state.scene.add(this.state.light);


      for (let p = 0; p < 300; p++) {
          var particle = new THREE.Mesh(this.state.smokeGeo, this.state.smokeMaterial);
          particle.position.set(Math.random()*600-250,Math.random()*500-250,Math.random()*1000-100);
          particle.rotation.z = Math.random() * 360;

          this.state.scene.add(particle);
          this.state.smokeParticles.push(particle);
      }

      this.state.renderer.domElement.style.width = '100%';
      this.state.renderer.domElement.style.height = '100vh';
      document.body.appendChild( this.state.renderer.domElement );
  }

  animate() {
      // note: three.js includes requestAnimationFrame shim
      this.state.delta = this.state.clock.getDelta();
      requestAnimationFrame( this.animate.bind(this) );
      this.evolveSmoke();
      this.renderCanvas();
  }

  evolveSmoke() {
      var sp = this.state.smokeParticles.length;
      while(sp--) {
          this.state.smokeParticles[sp].rotation.z += (this.state.delta * 0.2);
      }
  }

  renderCanvas() {
      this.state.mesh.rotation.x += 0.005;
      this.state.mesh.rotation.y += 0.01;
      this.state.cubeSineDriver += .01;
      this.state.mesh.position.z = 100 + (Math.sin(this.state.cubeSineDriver) * 500);
      this.state.renderer.render( this.state.scene, this.state.camera );
  }

  render() {
    this.init.bind(this).call();
    this.animate.bind(this).call();
    return null;
  }
}

export default PurpleSmoke;
