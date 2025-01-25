import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-navigation-item',
	imports: [ RouterLinkActive, RouterLink ],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.css',
})
export class NavigationItemComponent {
	@Input() public link: string = '';
	@Input() public title: string = '';
}
