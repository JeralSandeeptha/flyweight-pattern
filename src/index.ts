import { TreeFactory } from "./classes/TreeFactory.js";

// Get shared tree types from the factory
const oak = TreeFactory.getTreeType("Oak", "Green", "Rough");
const pine = TreeFactory.getTreeType("Pine", "Dark Green", "Scaly");

// Use them directly at different positions
oak.render("10", "20");
oak.render("15", "25");   // reused flyweight instance

pine.render("50", "60");
oak.render("70", "80");   // reused again
pine.render("90", "100");

// Show how many unique flyweights were created
console.log(`🌲 Unique tree types created: ${TreeFactory.getCount()}`);