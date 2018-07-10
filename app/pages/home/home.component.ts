import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as camera from "nativescript-camera";
import { Image } from "ui/image";
import { ImageFilters } from 'nativescript-image-filters';
import { topmost } from 'ui/frame';

@Component({
  selector: "app-home",
  providers: [],
  templateUrl: "./pages/home/home.html",
  styleUrls: ["./pages/home/home.css"]
})
export class HomeComponent implements OnInit {

  image = new Image();


  constructor(private router: Router) {
  }

  ngOnInit() {
    var camera = require("nativescript-camera");
    if (camera.isAvailable()) { 
      camera.requestPermissions();
    } else {
      alert('Your camera is not working properly, mate...');
    }
  }

  startCamera() {
    camera.takePicture().
    then((imageAsset) => {
        console.log("Result is an image asset instance");
        this.image.src = imageAsset;
    }).catch((err) => {
        console.log("Error -> " + err.message);
    });
  }

  reflection() {
    console.log('reflection');
    let filters = new ImageFilters();

    filters.invert(this.image).then((result) => {

      // set the pic imageSource equal to the new imageSource
      this.image.imageSource = result;

    }).catch((err) => {
      console.log('applyFilter ERROR: ' + err);
    });    
  }
}