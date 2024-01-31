const getCatalogueById = async (req, res) => {
  try {
    res.send("WE get the detail of a catalogue by its id from this route");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCatalogueById };
