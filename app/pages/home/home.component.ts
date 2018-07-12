import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as camera from "nativescript-camera";
import { Image } from "ui/image";
import { ImageFilters } from 'nativescript-image-filters';
import { topmost, Observable } from 'ui/frame';

@Component({
  selector: "app-home",
  providers: [],
  templateUrl: "./pages/home/home.html",
  styleUrls: ["./pages/home/home.css"]
})
export class HomeComponent extends Observable implements OnInit {
  

  image = new Image();
  private _ImageFilters: ImageFilters;

  constructor(private router: Router) {
    super();
    this._ImageFilters = new ImageFilters();
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

  effect1() {
    setTimeout(() => {
      let pic = topmost().currentPage.getViewById('myPicture') as Image;
      this._ImageFilters.saturationFilter(pic, 100).then((result) => {
        // set the pic imageSource equal to the new imageSource
        pic.imageSource = result;
        console.log('success!')
      }).catch((err) => {
        console.log('applyFilter ERROR: ' + err);
      });    
    }, 150);
  }

  effect2() {
    setTimeout(() => {
      let pic = topmost().currentPage.getViewById('myPicture') as Image;
      this._ImageFilters.hueFilter(pic, 100).then((result) => {
        // set the pic imageSource equal to the new imageSource
        pic.imageSource = result;
        console.log('success!')
      }).catch((err) => {
        console.log('applyFilter ERROR: ' + err);
      });    
    }, 150);
  }
  
  

}