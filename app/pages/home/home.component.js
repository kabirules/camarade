"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var camera = require("nativescript-camera");
var image_1 = require("ui/image");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.image = new image_1.Image();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var camera = require("nativescript-camera");
        if (camera.isAvailable()) {
            camera.requestPermissions();
        }
        else {
            alert('Your camera is not working properly, mate...');
        }
    };
    HomeComponent.prototype.startCamera = function () {
        var _this = this;
        camera.takePicture().
            then(function (imageAsset) {
            console.log("Result is an image asset instance");
            _this.image.src = imageAsset;
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            providers: [],
            templateUrl: "./pages/home/home.html",
            styleUrls: ["./pages/home/home.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFFekMsNENBQThDO0FBQzlDLGtDQUFpQztBQVFqQztJQUlFLHVCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZsQyxVQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUdwQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEQsQ0FBQztJQUNILENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQUEsaUJBUUM7UUFQQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFDLFVBQVU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeEJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUs0QixlQUFNO09BSnZCLGFBQWEsQ0F5QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9wYWdlcy9ob21lL2hvbWUuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgY2FtZXJhID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIik7XHJcbiAgICBpZiAoY2FtZXJhLmlzQXZhaWxhYmxlKCkpIHsgXHJcbiAgICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdZb3VyIGNhbWVyYSBpcyBub3Qgd29ya2luZyBwcm9wZXJseSwgbWF0ZS4uLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhcnRDYW1lcmEoKSB7XHJcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoKS5cclxuICAgIHRoZW4oKGltYWdlQXNzZXQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCBpcyBhbiBpbWFnZSBhc3NldCBpbnN0YW5jZVwiKTtcclxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlQXNzZXQ7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==