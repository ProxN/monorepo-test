import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from '../user/user-entity';

@ObjectType()
@Entity()
class Follow extends BaseEntity {
  @Field()
  @PrimaryColumn()
  user_id!: string;

  @Field()
  @PrimaryColumn()
  follower_id!: string;

  @ManyToOne(() => User, (user) => user.followers, { primary: true })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @ManyToOne(() => User, (user) => user.following, { primary: true })
  @JoinColumn({ name: 'follower_id' })
  follower?: User;

  @Field(() => String)
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @Field(() => String)
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;
}

export default Follow;
