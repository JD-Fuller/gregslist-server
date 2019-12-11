import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Home = new Schema(
  {
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    bath: { type: Number, required: true },
    style: { type: String },
    city: { type: String },
    acreage: { type: Number },
    levels: { type: Number },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Home;
