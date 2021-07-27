class Intership {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  nameReturn() {
    return `I am ${this.firstname} ${this.lastname}`;
  }
  myage() {
    return `My age is ${this.age}`;
  }
}

let i1 = new Intership("Sibil", "Soren", 25);
let name1 = i1.myage();
console.log(name1);

class RestaurantManager {
  restaurantList = [
    {
      name: "Restaurant1",
      address: "Address1",
      city: "City1",
    },
    {
      name: "Restaurant2",
      address: "Address2",
      city: "City2",
    },
    {
      name: "Restaurant3",
      address: "Address3",
      city: "City3",
    },
    {
      name: "Restaurant4",
      address: "Address4",
      city: "City3",
    },
    {
      name: "Restaurant5",
      address: "Address5",
      city: "City2",
    },
    {
      name: "Restaurant6",
      address: "Address6",
      city: "City3",
    },
  ];

  printAllRestaurantName = () => {
    for (let i of this.restaurantList) {
      console.log(i.name);
    }
  };

  filterRestaurantByCity = (city) => {
    for (let i of this.restaurantList) {
      if (i.city.toLocaleLowerCase() === city.toLocaleLowerCase()) {
        console.log(i.name);
      }
    }
  };
}

let result = new RestaurantManager();
result.printAllRestaurantName();
console.log(`--------------`);
result.filterRestaurantByCity("CITY3");
