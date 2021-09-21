import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompaniesService {
    constructor(@InjectRepository(Company) private companyRepo: Repository<Company>){}

    findAll(): Promise<Company[]>{
        return this.companyRepo.find()
    }
    
    async create(newCompany):Promise<Company>{
        return this.companyRepo.save(newCompany)
        // return this.companyRepo.insert(newCompany)
    }

    async findOne(condition:any):Promise<Company>{
        return this.companyRepo.findOne(condition)
    }
}
