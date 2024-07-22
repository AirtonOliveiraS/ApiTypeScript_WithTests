
import Knex from "knex";
import knexConfig  from '../../config/knex';
import { User, UserCreate } from "./user.d";

const KnexC = Knex(knexConfig);



export const getAll = async (): Promise<User[] | []>=> {
    return KnexC<User>("users").select();
  };



export const save = async (params: UserCreate) => {
    return KnexC<User>('users').insert(params);
};








