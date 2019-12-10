import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Value = new Schema(
  {
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    bath: { type: Number, required: true },
    style: { type: String },
    city: { type: String, required: true },
    acreage: { type: Number, required: true },
    levels: { type: Number, required: true },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Value;
