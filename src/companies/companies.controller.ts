import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { Response , Request } from 'express';

@Controller('companies')
export class CompaniesController {

    constructor(private  companyService: CompaniesService,
                private jwtService:JwtService) { }

    @Get('all')
    async getAll(): Promise<Company[]> {
        return await this.companyService.findAll();
    }

    @Post('register')
    async createCompany(
        // @Body() newCompany:any
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const hashPasssword = await bcrypt.hash(password, 12)
        return this.companyService.create({
            email,
            password:hashPasssword,
        })
    }


    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) res: Response

    ) {
        const user = this.companyService.findOne({email});

        if(!user){
            throw new Error('email not found')
        }

        if(!await bcrypt.compare(password, (await user).password)){
            throw new Error('password not found')
        }
        const jwt = (await this.jwtService.signAsync({id: (await user).id})).valueOf()

        //set cookie only backend
        console.log((await jwt).valueOf());
        
        res.cookie('jwt',jwt,{httpOnly: true})
        // return {user , jwt}
        // return jwt
        return {
            message: "success"
        }
    }

    @Get('User')
    async user(@Req() req: Request) {
        try{
            const cookie = req.cookies['jwt'];   // get cookie to install cookie-parser package
            // return await this.companyService.findAll();
            const data = await this.jwtService.verifyAsync(cookie)
            if(!data){
                throw new Error('unauthorized error')
            }
            // return data;  
            
            const user = await this.companyService.findOne({id: data['id']})
            // return user

            //remove password fro the user
            const {password , ...result} = user
            return result
        }catch(e){
            throw new Error('unauthorized error')
        }
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) res: Response) {
        res.clearCookie('jwt')
        return {
            message:"logout success"
        }
    }
}
