import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ItemsService } from './items.service';

@Injectable()
export class ItemDetailsResolverService implements Resolve<any> {

  constructor(
    private itemsService: ItemsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const id = route.params.id;
    return this.itemsService.getItemDetail(id).toPromise().then(
      res => {
        return res;
      },
      err => {
        console.error(err);
        return null;
      }
    );
  }
}
