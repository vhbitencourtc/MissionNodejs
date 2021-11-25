import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tags } from "./Tags";
import { User } from "./User";

@Entity("compliments")
class Compliments {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: string;
    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    tag_id: string;
    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tags)
    tag: Tags;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliments };

/**
 * Metodo de criação de Conexão com Entidades;
 * ManyToOne são muitos atributos iguais inseridos
 * JoinColumn para combinar as colunas citadas acima;
 */