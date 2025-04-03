import { Component } from '@angular/core';
import { DropdownDirective } from './shopping-list/dropdown.directive';

@Component({
  selector: 'app-header',
  imports: [DropdownDirective],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
