import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as camera from "nativescript-camera";
import { Image } from "ui/image";
import { ImageFilters } from 'nativescript-image-filters';
import { topmost } from 'ui/frame';

import * as Jimp from "jimp";

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

  reflection_bak() {
    console.log('reflection');
    console.log(this.image);
    let filters = new ImageFilters();

    filters.invert(this.image).then((result) => {

      // set the pic imageSource equal to the new imageSource
      this.image.imageSource = result;

    }).catch((err) => {
      console.log('applyFilter ERROR: ' + err);
    });    
  }

  reflection() {
    Jimp.read("logo_login.png", function (err, lenna) {
      if (err) throw err;
      lenna.resize(256, 256)            // resize
           .quality(60)                 // set JPEG quality
           .greyscale()                 // set greyscale
           .write("lena-small-bw.jpg"); // save
    });
  }
}