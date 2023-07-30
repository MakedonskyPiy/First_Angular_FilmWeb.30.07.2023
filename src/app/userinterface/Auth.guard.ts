import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot,CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./Auth.service";
import { Observable, map, take } from "rxjs";
import { isJoinUser } from "./isJoined";

@Injectable({providedIn:'root'})

class classAuthGuard{
    constructor(private authservice:AuthService, private routerer:Router,private Joined:isJoinUser){}
    canActivate(
        route: ActivatedRouteSnapshot,
         router: RouterStateSnapshot):
    boolean | UrlTree 
    | Promise<boolean | UrlTree> 
    | Observable<boolean | UrlTree>
    {
        if(this.Joined.JoinedUser){
            return true;
        }else {
            this.routerer.navigate(['/LazyModule/loginPage']);
            return false;
        };
    }
}
export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) =>
{
    return inject(classAuthGuard).canActivate(route,state);
}