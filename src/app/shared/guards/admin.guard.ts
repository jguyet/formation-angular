import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CardService } from '../services/card.service';

export const adminGuard: CanActivateFn = (route, state) => {
  // const service: AdminService = inject(AdminService);
  // return service.isAdmin();
  // console.log('EHHEHE', inject(CardService));
  return true;
};
