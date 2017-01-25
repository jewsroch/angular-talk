import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  template: `
    <svg [class.active]='isActive'
         class="star"
         viewBox="0 0 240 240"
         xmlns="http://www.w3.org/2000/svg"
         width="100px"
         height="100px">
      <path fill="#aaa" d="m48,234 73-226 73,226-192-140h238z"/>
    </svg>
  `,
  styles: [`
    .active path { fill: #F8D64E}
  `]
})
export class StarIconComponent {
  @Input() isActive: boolean = false;
}
