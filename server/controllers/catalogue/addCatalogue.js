// const { response } = require("../../data/placeholder");
const { Catalogue } = require("../../models/Catalogue");
const { scanCatalogueWithAI } = require("../../services/vision");
const addCatalogue = async (req, res) => {
  try {
    const { catalogue_name, catalogue_description, images, userId } = req.body;

    let responseAI = {};

    const existingCatalogue = await Catalogue.findOne({ catalogue_name });

    if (existingCatalogue != null) {
      responseAI = await scanCatalogueWithAI({ images });

      await Catalogue.findOneAndUpdate(
        { _id: existingCatalogue._id },
        {
          $set: {
            ...responseAI,
            imageUrl: [...images],
          },
        }
      );

      res
        .status(200)
        .json({ message: "Catalogue updated successfully", catalogue: existingCatalogue });
    }
    else {
      responseAI = await scanCatalogueWithAI({ images });

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
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving catalogue" });
  }
};

module.exports = { addCatalogue };
