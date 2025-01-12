import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
	const combinedUrl = new URL(
		req.url,
		environment.apiUrl);

	const apiReq = req.clone({ url: combinedUrl.href });

	return next(apiReq);
};
