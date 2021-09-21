import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    // console.log(roles.length);

    for (let i = 0; i < roles.length; i++) {
      if (roles[i] == 'Admin') {
        console.log("roles is:", roles);
        return true
      }
    }
    throw new HttpException('Access with only Admin role', 403)
  }
}
