import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,HomeComponent,AboutComponent,ResumeComponent,PortfolioComponent,ContactComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
//   const typed: Typed = new Typed("#title", {
//     strings: ["Designer", "Developer"],
//     typeSpeed: 60,
//     backSpeed: 60,
//     loop: true
//   }
// );
  
  
  
  

}
