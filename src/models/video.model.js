import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      typeof: String, // cloudinary url
      required: true,
    },
    thumbnail: {
      typeof: String, // cloudinary url
      required: true,
    },
    title: {
      typeof: String,
      required: true,
    },
    description: {
      typeof: String,
      required: true,
    },
    duration: {
      typeof: Number, //from cloudinary
      required: true,
    },
    views: {
      typeof: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
