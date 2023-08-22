import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styling.scss']
})
export class AppComponent {
  title = 'Mine';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    AOS.init({ disable: 'mobile' });//AOS - 2
    AOS.refresh();
  }

}
