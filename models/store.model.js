import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        min: 0.01,
        required: true,
        validate: {
            validator: function (value) {
                return Number.isFinite(value);
            },
            message: props => `${props.value} is not a valid price.`
        }
    },
    category: {
        type: String,
        enum: ["Consumable", "Non-Consumable"],
        required: true
    }
});

export default mongoose.model("Store", storeSchema);
