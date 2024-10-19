import UmmrahPackage from "@/models/UmmrahPackage"; // Import the updated model
import connectDB from "../middleware/mongoose";

const handler = async (req, res) => {
  try {
    const { sortBy } = req.query;

    let ummrahPackages;

    if (sortBy === 'highToLow') {
      ummrahPackages = await UmmrahPackage.find().sort({ price: -1 });
    } else if (sortBy === 'lowToHigh') {
      ummrahPackages = await UmmrahPackage.find().sort({ price: 1 });
    } else {
      // Default: no sorting
      ummrahPackages = await UmmrahPackage.find();
    } 

    res.status(200).json({ ummrahPackages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default connectDB(handler);
