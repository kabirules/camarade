import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { routes, navigatableComponents } from "./app.routing";

import { AppComponent } from "./app.component";

// test -> remove
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
