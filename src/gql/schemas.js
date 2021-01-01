const { gql } = require("apollo-server");

const typeDefs = gql`
  type Restaurant {
    id: ID
    name: String
    logo: String
    phone: String
    address: String
  }
  input RestaurantInput {
    name: String!
    logo: String
    phone: String!
    address: String!
  }
  
  type Query {
    getRestaurants: [Restaurant]
    getRestaurantById(id: ID!): Restaurant
    getRestaurantByName(search: String!): [Restaurant]
  }

  type Mutation {
    newRestaurant(restaurant: RestaurantInput): Restaurant
    updateRestaurant(id: ID!, restaurant: RestaurantInput): Restaurant
    deleteRestaurant(id: ID!): String
  }
`;

module.exports = typeDefs;