import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;


    @DeleteDateColumn()
    deleteDate: Date;

}
