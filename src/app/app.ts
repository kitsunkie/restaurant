import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'restaurant';
}
