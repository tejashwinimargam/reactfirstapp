"use client";
import Image from "next/image";
import { useState } from 'react';

const user = {
  name: "Hedy Lamarr",
  imageUrl: "rama.jpg",
  imageSize: 100,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },

  { title: "Apple", isFruit: true, id: 3 },
];

export default function Home() {
  // Map the products array to create list items
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

    return (
    <div>
      <h1>welcome to my app2</h1>
      <button className="custom-button">I'm a button</button>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <ul>
      {listItems}
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      </ul>
    </div>
  );
}
 
function MyButton({ count, onClick }) {
  return (
    <ul>
    <button className="custom-button" onClick={onClick}>
      Clicked {count} times
    </button>
    </ul>
  );
}