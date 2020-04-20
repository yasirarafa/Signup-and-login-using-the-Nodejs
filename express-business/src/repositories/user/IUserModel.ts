import * as mongoose from 'mongoose';
import IVersionableModel from '../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableModel {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
}
