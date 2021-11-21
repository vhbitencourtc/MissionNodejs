import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1637508167923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");

    }

}

/**
 * Criado uma Migration para ADD o PASSWORD os USERS;
 * Criada uma COLUMN na Migration de USERS;
 * Para criptografa as senhas do USERS, bcryptjs;
 */