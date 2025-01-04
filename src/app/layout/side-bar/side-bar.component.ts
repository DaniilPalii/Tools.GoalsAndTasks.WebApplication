import { Component, ViewEncapsulation } from '@angular/core';
import { ScrollPanel } from 'primeng/scrollpanel';
import { Panel } from 'primeng/panel';

@Component({
	selector: 'app-side-bar',
	imports: [ ScrollPanel, Panel ],
	templateUrl: './side-bar.component.html',
	styleUrl: './side-bar.component.css',
	encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent {

}
