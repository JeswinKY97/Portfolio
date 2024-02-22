import { Component } from '@angular/core';
// @ts-ignore
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styling.scss']
})
export class AppComponent {
  title = 'Jeswin';
  email = 'jeswinky18@gmail.com';

  constructor() {}

  ngOnInit(): void {
    AOS.init({
      disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
  }

}
