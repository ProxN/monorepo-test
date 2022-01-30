import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Comment from '../comment/comment-entity';
import User from '../user/user-entity';

@ObjectType()
@Entity()
class Post extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  post_url!: string;

  @Field()
  @Column()
  user_id!: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  caption?: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments!: Comment[];

  @Field(() => String)
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @Field(() => String)
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt?: Date;
}

export default Post;
