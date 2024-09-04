import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './header/about/about.component';
import { ResumeComponent } from './header/resume/resume.component';
import { PortfolioComponent } from './header/portfolio/portfolio.component';
import { ContactComponent } from './header/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,RouterLink,RouterLinkActive,HomeComponent,AboutComponent,ResumeComponent,PortfolioComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_proj';
}
