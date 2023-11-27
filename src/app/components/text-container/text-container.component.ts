import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="textarea">
      
    </div>
  `,
  styleUrl: './text-container.component.css'
})
export class TextContainerComponent {
  TextArray = Array<{text: string, id: number}>();
  pushInTextArray(newText: string) {
    if (newText != null) this.TextArray.push();
  }
}
