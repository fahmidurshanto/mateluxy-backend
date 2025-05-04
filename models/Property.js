import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    // General Details
    category: { 
        type: String, 
        required: true,
        enum: ['Buy', 'Rent', 'Off Plan', 'Commercial for Buy', 'Commercial for Rent'] 
    },
    propertyTitle: { type: String, required: true },
    propertyDescription: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    propertyCountry: { type: String, required: true },
    propertyState: { type: String, required: true },
    propertyZip: { type: String, required: true },
    propertyFeaturedImage: { type: String, required: true },
    media: [{ type: String }],

    // Price Details
    propertyPrice: { type: Number, required: true },
    numberOfCheques: { type: Number },
    brokerFee: { type: Number, required: true },
    
    // Rent-specific
    roiPercentage: { type: Number },
    
    // Off Plan-specific
    completionDate: { type: String },
    paymentPlan: { type: String },
    developer: { type: String },
    
    // Commercial-specific
    commercialType: { type: String },
    
    // Property Features
    propertyType: { type: String, required: true },
    propertySize: { type: Number, required: true },
    propertyRooms: { type: Number, required: true },
    propertyBedrooms: { type: Number, required: true },
    propertyKitchen: { type: Number, required: true },
    propertyBathrooms: { type: Number, required: true },
    
    // Legal and Agent
    dldPermitNumber: { type: String, required: true },
    agent: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Agent', 
        required: true 
    },
    dldQrCode: { type: String, required: true },
    
    // Location
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    googleViewCameraAngle: { type: Number, default: 0 },
    zoomLevel: { type: Number, default: 15 },
    
    // Features and Amenities
    features: [{ type: String }],
    amenities: [{ type: String }]
}, { timestamps: true });

// Prevent model recompilation
const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

export default Property;