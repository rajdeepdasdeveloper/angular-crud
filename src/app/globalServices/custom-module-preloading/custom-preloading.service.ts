import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

	@Injectable({
	  providedIn: 'root'
	})
	export class CustomPreloadingService implements PreloadingStrategy{

	  preload(route: Route, fn: () => Observable<any>): Observable<any>{
	    if(route.data && route.data['customPreload']){
	      return fn();
	    }
	    else{
	      return of(null); // Observable of null
	    }
	  }

	  constructor() { }
	}
