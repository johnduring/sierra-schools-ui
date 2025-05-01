import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // your routes
];

@NgModule({
    declarations: [
      // Your components here
    ],
    imports: [
      AppRoutingModule,  // Add the routing module here
      RouterModule.forRoot(routes),
      AppRoutingModule
    ],

    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }