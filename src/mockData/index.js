module.exports = {
  nodes: [
    {
      id: "Vehicles",
      symbolType: "diamond",
      color: "red",
      size: 400,
      fontSize: 18,
    },

    { id: "Cars", symbolType: "circle", color: "red", size: 400, fontSize: 18 },

    { id: "car 1", name: "car 1" },
    { id: "car 2", name: "car 2" },
    { id: "car 3", name: "car 3" },
    { id: "car 4", name: "car 4" },

    { id: "Bike", symbolType: "circle", color: "red", size: 400, fontSize: 18 },

    { id: "Bike 1", name: "Bike 1" },
    { id: "Bike 2", name: "Bike 2" },
    { id: "Bike 3", name: "Bike 3" },
    { id: "Bike 4", name: "Bike 4" },

    {
      id: "Truck",
      symbolType: "circle",
      color: "red",
      size: 400,
      fontSize: 18,
    },

    { id: "Truck 1", name: "Truck 1" },
    { id: "Truck 2", name: "Truck 2" },
    { id: "Truck 3", name: "Truck 3" },
    { id: "Truck 4", name: "Truck 4" },
  ],

  links: [
    { source: "Vehicles", target: "Cars" },
    {
      source: "Cars",
      target: "car 1",
      labelProperty: "Car link test 1",
      fullname: "john cena",
      phoneNumber: "89988989989",
    },
    {
      source: "Cars",
      target: "car 2",
      labelProperty: "Car link test 2",
      fullname: "rocky ",
      phoneNumber: "89988989989",
    },
    { source: "Cars", target: "car 3", labelProperty: "Car link test 3" },
    { source: "Cars", target: "car 4", labelProperty: "Car link test 4" },

    { source: "Vehicles", target: "Bike" },

    { source: "Bike", target: "Bike 1", labelProperty: "Bike link test 1" },
    { source: "Bike", target: "Bike 2", labelProperty: "Bike link test 2" },
    { source: "Bike", target: "Bike 3", labelProperty: "Bike link test 3" },
    { source: "Bike", target: "Bike 4", labelProperty: "Bike link test 4" },

    { source: "Vehicles", target: "Truck" },

    { source: "Truck", target: "Truck 1" },
    { source: "Truck", target: "Truck 2" },
    { source: "Truck", target: "Truck 3" },
    { source: "Truck", target: "Truck 4" },
  ],
};
