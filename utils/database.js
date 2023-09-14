import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("already connected to Mongo DB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("Connect to MongoDB...");
  } catch (error) {
    console.log("Error Not Connected: " + error);
  }
};
