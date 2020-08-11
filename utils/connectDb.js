import mongoose from "mongoose";
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // use existing database connection
    return;
  }
  // Use a new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindNewModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
