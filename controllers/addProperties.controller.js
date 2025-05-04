import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/erros.js";
import Rent from "../models/rent_properties.model.js";

export const addProperties = async (req, res, next) => {

    const {
        propertyTitle,
        propertyDescription,
        propertyAddress,
        propertyCountry,
        propertyState,
        propertyZip,
        propertyFeaturedImage,
        media, // links to images/videos

        propertyType,
        propertyPrice, // Yearly
        roiPercentage,
        numberOfCheques,
        brokerFee,
        propertySize, // in ft

        propertyRooms,
        propertyBedrooms,
        propertyKitchen,
        propertyBathrooms,

        dldPermitNumber,
        agent,
        dldQrCode,

        latitude,
        longitude,
        googleViewCameraAngle,
        zoomLevel, // 1-20

        features,
        amenities
    } = req.body;

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newProperty = new Rent({
        propertyTitle,
        propertyDescription,
        propertyAddress,
        propertyCountry,
        propertyState,
        propertyZip,
        propertyFeaturedImage,
        media, // links to images/videos

        propertyType,
        propertyPrice, // Yearly
        roiPercentage,
        numberOfCheques,
        brokerFee,
        propertySize, // in ft

        propertyRooms,
        propertyBedrooms,
        propertyKitchen,
        propertyBathrooms,

        dldPermitNumber,
        agent,
        dldQrCode,

        latitude,
        longitude,
        googleViewCameraAngle,
        zoomLevel, // 1-20

        features,
        amenities
    });


    try {
        await newProperty.save();
        res.status(201).json('New Property Has Been Added');
    } catch (error) {
        next(error);
    }



};