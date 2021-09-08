import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate( context: ExecutionContext ): boolean | Promise<boolean> | Observable<boolean> {
      if(true){
        return true
      }
      else{
        throw new HttpException('authentication required',403)
      }
  }
}
