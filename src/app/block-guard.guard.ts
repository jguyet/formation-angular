import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { CardApiService } from './shared/services/card-api.service';

@Injectable({
  providedIn: 'root'
})
export class BlockGuardGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<any> {
  
  constructor(public card: CardApiService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(next, state);

    return this.card.getCards().pipe(
      tap(cards => console.log('HEY', cards)),
      map(_ => true)
    ).toPromise();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Can ActivateChild');
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return of(true).pipe(
      delay(5000),
      tap(x => console.log('Can Load Activated'))
    );
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }
}
