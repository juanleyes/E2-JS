const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.

const pizzaImpar = (pizzas) => {
  pizzas.forEach((pizza) => {
    if (pizza.id % 2 !== 0) {
      console.log(`La ${pizza.nombre} tiene el id impar ${pizza.id}.`);
    }
  });
};

//pizzaImpar(pizzas);

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzaMenorA600 = (pizzas) => {
  pizzas.filter((pizza) => {
    if (pizza.precio < 600) {
      console.log(
        `Si hay una pizza que vale menos de 600 pesos, esta es la ${pizza.nombre} que cuesta ${pizza.precio}.`
      );
    }
  });
};

//pizzaMenorA600(pizzas);

//c) El nombre de cada pizza con su respectivo precio.

const mostrarPizzas = (pizzas) => {
  pizzas.forEach((pizza) => {
    console.log(
      `La pizza se llama ${pizza.nombre} y cuesta ${pizza.precio} pesos.`
    );
  });
};

//mostrarPizzas(pizzas);

//d) Todos los ingredientes de cada pizza.

const ingredientesPizza = (pizzas) => {
  pizzas.forEach((pizza) => {
    console.log(
      `La ${pizza.nombre} tiene estos ingredientes: ${pizza.ingredientes}.`
    );
  });
};

//ingredientesPizza(pizzas);
