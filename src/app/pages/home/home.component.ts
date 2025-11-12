import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

  private router = inject(Router);

  public HomeComponent() {

  }

  iniciarCalculo(session: string): void {
    this.router.navigateByUrl('calculo');
  }

}
