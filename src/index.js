import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Pan con aceite de oliva y romero",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomate y mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Spinacas",
    ingredients: "Tomate, mozarella, espinaca y queso ricotta",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza con Champiñones",
    ingredients: "Tomate, mozarella, champiñones y cebolla",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomate, mozarella y pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomate, mozarella, jamón, arágula y queso burrata",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>👩‍🍳 Menú 🍕</h2>
      <ul className="pizzas">
        {pizzaData.map((p) => {
          return <Pizza pizza={p} key={p.name} />;
        })}
      </ul>
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "AGOTADO" : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <ClosedMessage openHour={openHour} />
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>Estamos abiertos 🖐 hasta las {props.closeHour}:00</p>
      <button className="btn">Ordenar</button>
    </div>
  );
}

function ClosedMessage(props) {
  return (
    <div className="order">
      <p>Estamos cerrados 😴 hasta las {props.openHour}:00</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
