// const { response } = require("../../data/placeholder");
const { Catalogue } = require("../../models/Catalogue");
const { scanCatalogueWithAI } = require("../../services/vision");
const addCatalogue = async (req, res) => {
  try {
    const { catalogue_name, catalogue_description, images, userId } = req.body;

    // GPT response added
    const responseAI = await scanCatalogueWithAI({ images });
    const catalogue = await new Catalogue({
      catalogue_name,
      catalogue_description,
      userId,
      ...responseAI,
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
