import { BaseEntity } from "src/base-entity";
import { Column, Entity } from "typeorm";

@Entity('companies')
export class Company extends BaseEntity{
   
    // @Column({type : 'varchar' , length:100 , nullable: false})

    @Column({nullable: false})
    email : string

    @Column({nullable: false})
    password : string
}