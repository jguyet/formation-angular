import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, CanActivateChild, CanLoad } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<any>, CanActivateChild, CanLoad {
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(next, state);
    return Observable.create(observer => {
      setTimeout(() => {
          observer.next(true);
          observer.complete();
      }, 1000);
    });
  }

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    return of(window.confirm('you are sure ?'));
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    console.log('COUCOU CHILDS: ', childRoute, state);
    return true;
  }

  canLoad(
    route: import("@angular/router").Route,
    segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad: ', route, segments);
    return true;
  }
  
}
