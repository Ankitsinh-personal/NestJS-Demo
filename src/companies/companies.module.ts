import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';

@Module({
  imports:  [ 
    TypeOrmModule.forFeature([Company]),
    JwtModule.register({
      secret:"Secret",
      signOptions:{expiresIn: '1d'}
    })
  ], 
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {}
