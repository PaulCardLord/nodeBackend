import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  firstName: string;

  @Column()
  lastName: string;

  @Column({length: 100, nullable: true})
  middleName: string;
}
