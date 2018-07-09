import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as camera from "nativescript-camera";
import { Image } from "ui/image";

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
}