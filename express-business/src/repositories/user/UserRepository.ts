import * as mongoose from "mongoose";
import { userModel } from "./UserModel";
import IUserModel from "./IUserModel";
import VersionableRepository from "../versionable/VersioningRepository";

export default class UserRepository extends VersionableRepository<
  IUserModel,
  mongoose.Model<IUserModel>
> {
  public static getInstance() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  private static instance: UserRepository;
  constructor() {
    super(userModel);
  }

  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public count(query: any = {}): any {
    return super.count(query);
  }

  public findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
    return super.findOne(query).lean();
  }

  public find(query, projection?: any, options?: any): any {
    return super.find(query, projection, options);
  }

  public insertMany(data): any {
    return super.insertMany(data);
  }

  public create(data: any): Promise<IUserModel> {
    return super.create(data);
  }

  public delete(id: String): any {
    return super.invalidate(id);
  }

  public update(data: any): Promise<IUserModel> {
    return super.update(data);
  }
}
