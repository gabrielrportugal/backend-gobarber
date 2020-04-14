import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Nome passado por parâmetro se refere ao nome da tabela
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
