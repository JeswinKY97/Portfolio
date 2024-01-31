import { Component } from '@angular/core';
// @ts-ignore
import AOS from 'aos';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styling.scss']
})
export class AppComponent {
  title = 'Jeswin';
  email = 'jeswinky18@gmail.com';

  constructor(private clipboardService: ClipboardService) {}

  ngOnInit(): void {
    AOS.init();
  }

  copyToClipboard() {
    this.clipboardService.copyFromContent(this.email);
  }

}
