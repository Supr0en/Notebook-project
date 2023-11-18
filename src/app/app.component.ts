import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextContainerComponent } from './components/text-container/text-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TextContainerComponent],
  template: `
    <body>
      <div class="book">
        <div class="page" name="left" #left>
          @defer (on idle) {
            <app-text-container />
          } @placeholder {
            <span>Click page to start taking notes</span>
          } @error {
            <span>creating component failed</span>
          }
        </div>
        <div class="page" name="right" (click)="true" #right>
        </div>
      </div>
    </body>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'notebook-app';
  
}