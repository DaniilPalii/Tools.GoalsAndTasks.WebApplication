import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{ path: 'tasks', renderMode: RenderMode.Prerender },
	{ path: '**', renderMode: RenderMode.Client },
];
