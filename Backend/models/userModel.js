import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    hotelBooking: [
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        cnic: {
          type: Number,
          required: true,
        },
        conatctNumber: {
          type: String,
          required: true,
        },
        hotelName: {
          type: String,
          required: true,
        },
        room: {
          type: String,
          required: true,
        },
        numberOfPersons: {
          type: String,
          required: true,
        },
        arrivalDate: {
          type: Date,
          required: true,
        },
        stay: {
          type: String,
          required: true,
        },
        cusomerNote: {
          type: String,
        },
      },
    ],
    resturantBooking: [
      {
        name: {
          type: String,
        },
        email: {
          type: String,
        },
        cnic: {
          type: String,
        },
        conatctNumber: {
          type: String,
        },
        resturantName: {
          type: String,
        },
        tables: {
          type: String,
        },
        NumberOfPersons: {
          type: String,
        },
        arrivalTime: {
          type: Date,
        },
        cusomerNote: {
          type: String,
        },
      },
    ],
    transportBooking: [
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        cnic: {
          type: Number,
          required: true,
        },
        contactNumber: {
          type: String,
          required: true,
        },
        route: {
          type: String,
          required: true,
        },
        busType: {
          type: String,
          required: true,
        },

        arrivalDate: {
          type: Date,
          required: true,
        },

        cusomerNote: {
          type: String,
          required: true,
        },
      },
    ],
    tripBooking: [
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        cnic: {
          type: Number,
          required: true,
        },
        conatctNumber: {
          type: String,
          required: true,
        },
        route: {
          type: String,
          required: true,
        },
        plan: {
          type: String,
          required: true,
        },

        arrivalDate: {
          type: Date,
          required: true,
        },
        NumberOfPersons: {
          type: String,
          required: true,
        },
        cusomerNote: {
          type: String,
          required: true,
        },
      },
    ],

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("userModel", UserSchema);
