import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {

  constructor(options: any, collections: any) {
    const versionedOptions = Object.assign({
      createdAt: {
        default: Date.now,
        type: Date,
      },
      updatedAt: {
        default: Date.now,
        type: Date,
      },
      updatedBy: {
        type: String,
      },
      createdBy: {
        type: String,
      },
      deletedBy: {
        type: String,
        required: false,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: false,
        type: String,
      }}, options);
    super(versionedOptions, collections);
  }

}

export default VersionableSchema;
