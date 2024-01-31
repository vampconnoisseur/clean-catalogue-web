const { response } = require("../../data/placeholder");
const { Catalogue } = require("../../models/Catalogue");
const addCatalogue = async (req, res) => {
  try {
    const { catalogue_name, catalogue_description, images, userId } = req.body;

    // Get the result from vision.js here later
    const catalogue = await new Catalogue({
      catalogue_name,
      catalogue_description,
      userId,
      ...response,
      imageUrl: [...images],
    });

    await catalogue.save();
    res
      .status(200)
      .json({ message: "Catalogue saved to DB successfully", catalogue });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addCatalogue };
