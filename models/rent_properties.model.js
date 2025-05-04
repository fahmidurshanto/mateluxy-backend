import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    propertyTitle: { type: String, required: true },
    propertyDescription: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    propertyCountry: { type: String, required: true },
    propertyState: { type: String, required: true },
    propertyZip: { type: String, required: true },
    propertyFeaturedImage: { type: String, required: true },
    media: [{ type: String }], // links to images/videos

    propertyType: { type: String, required: true }, // e.g. Apartment, Villa, etc.
    propertyPrice: { type: Number, required: true }, // Yearly
    roiPercentage: { type: Number, required: true },
    numberOfCheques: { type: Number, required: true },
    brokerFee: { type: Number, required: true },
    propertySize: { type: Number, required: true }, // in ft

    propertyRooms: { type: Number, required: true },
    propertyBedrooms: { type: Number, required: true },
    propertyKitchen: { type: Number, required: true },
    propertyBathrooms: { type: Number, required: true },

    dldPermitNumber: { type: String, required: true },
    agent: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
    dldQrCode: { type: String, required: true },

    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    googleViewCameraAngle: { type: Number, default: 0 },
    zoomLevel: { type: Number, default: 15 }, // 1-20

    features: [{ type: String }],
    amenities: [{ type: String }]
}, {
    timestamps: true
});

const Rent = mongoose.model('Property', propertySchema);

export default Rent;