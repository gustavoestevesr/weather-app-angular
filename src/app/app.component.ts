import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftContainerComponent } from './components/left-container/left-container.component';
import { RightContainerComponent } from './components/right-container/right-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftContainerComponent, RightContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
