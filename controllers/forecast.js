const { getForeCastData } = require("../Utils/index");

const getForeCast = async (req, res) => {
  const { days, cityName } = req.params;
  const data = await getForeCastData({ cityName, days });
  res.status(200).json(data);
};

module.exports = { getForeCast };
