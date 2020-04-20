import * as mongoose from 'mongoose';
class Database {
  public static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true },
        )
        .then((db) => {
          console.log('successfully connected ');
          resolve();
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
  public static disconnect() {
    mongoose.disconnect();
    console.log('Disconnected from database');
  }
}
export default Database;
