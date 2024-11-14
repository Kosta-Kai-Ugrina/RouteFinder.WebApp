import { Address, RouteRequest } from "../types";

export const exampleWrongOrder1: RouteRequest = {
  addressStart: getMoverSystems(),
  addressDestinationList: [getCafeNoah(), getNetto()],
};

export const exampleWrongOrder2: RouteRequest = {
  addressStart: getMoverSystems(),
  addressDestinationList: [
    getReffen(),
    getCafeNoah(),
    getAliceIceCreamAndCoffee(),
    getNetto(),
  ],
};

function getMoverSystems(): Address {
  return {
    name: "Mover Systems",
    latitude: 55.66221993583325,
    longitude: 12.577998762094255,
  };
}

function getNetto(): Address {
  return {
    name: "Netto on Artillerivej",
    latitude: 55.66020591154689,
    longitude: 12.572785483070883,
  };
}

function getCafeNoah(): Address {
  return {
    name: "Cafe Noah",
    latitude: 55.65509242630194,
    longitude: 12.565147723042628,
  };
}

function getReffen(): Address {
  return {
    name: "Reffen",
    latitude: 55.69376270561271,
    longitude: 12.607666137085154,
  };
}

function getAliceIceCreamAndCoffee(): Address {
  return {
    name: "Alice Ice Cream and Coffee",
    latitude: 55.66845638233031,
    longitude: 12.597300106161562,
  };
}
