import { Component } from '@angular/core';
// @ts-ignore
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styling.scss']
})
export class AppComponent {
  title = 'Mine';

  ngOnInit(): void {
    AOS.init();
  }

}
