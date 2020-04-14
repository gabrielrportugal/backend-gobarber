import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1586875131592
  implements MigrationInterface {
  // Criação da tabala appointments no banco de dados
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  // Método caso algo aconteça de errado e seja necessário desfazer
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('appointments');
  }
}
