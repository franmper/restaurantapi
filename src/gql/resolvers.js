const Restaurant = require("../models/Restaurants");

const resolvers = {
  Query: {
    getRestaurants: async () => {
      try {
        const restaurants = await Restaurant.find({});
        return restaurants;
      } catch (error) {
        console.log(error);
      }
    },
    getRestaurantById: async (_, { id }) => {
      try {
        const restaurants = await Restaurant.findById(id);
        return restaurants;
      } catch (error) {
        console.log(error);
      }
    },
    getRestaurantByName: async (_, { search }) => {
      try {
        const restaurants = await Restaurant.find({$text: {$search: search}});
        return restaurants
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    newRestaurant: async (_, { restaurant }) => {
      try {
        const newRestaurant = new Restaurant(restaurant);
        return newRestaurant.save();
      } catch (error) {
        console.log(error);
      }
    },
    updateRestaurant: async (_, { id, restaurant }) => {
      let restaurantToUpdate = await Restaurant.findById(id);
      if (!restaurantToUpdate) throw new Error("Restaurant no encontrado.");
      restaurantToUpdate = await Restaurant.findByIdAndUpdate({ _id: id }, restaurant, {
        new: true,
      });
      return restaurantToUpdate;
    },
    deleteRestaurant: async (_, { id }) => {
      let restaurantToDelete = await Restaurant.findById(id);
      if (!restaurantToDelete) throw new Error("Restaurant no encontrado.");
      try {
        await Restaurant.findOneAndDelete({ _id: id });
        return "Restaurant eliminado.";
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
