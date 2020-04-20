import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
  deletedAt: Date;
  deletedBy: string;
  updatedBy: string;
  originalId: string;
  createdAt: Date;
  updatedAt: Date;
}
