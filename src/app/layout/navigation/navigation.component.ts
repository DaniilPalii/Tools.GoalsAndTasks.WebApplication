import { Component, ViewEncapsulation } from '@angular/core';
import { Panel } from 'primeng/panel';

@Component({
	selector: 'app-navigation',
	imports: [ Panel ],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.css',
	encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {

}
