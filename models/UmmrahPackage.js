import mongoose from 'mongoose';

const UmmrahPackageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true }
}, { timestamps: true });

// Make sure you pass "UmmrahPackages" as the collection name
delete mongoose.models.UmmrahPackage;

export default mongoose.models.UmmrahPackage || mongoose.model("UmmrahPackage", UmmrahPackageSchema, "UmmrahPackages");
