const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    getCities: async (_, __, { dataSources }) => dataSources.rajaOngkirApi.getCities()
  },
};
