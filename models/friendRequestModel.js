import mongoose from 'mongoose'

const friendRequestSchema = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
});

const FriendRequest = new mongoose.model("FriendRequest", friendRequestSchema);

export default FriendRequest;
