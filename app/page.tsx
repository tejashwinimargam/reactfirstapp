import Image from "next/image";

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
      <ul>{listItems}</ul>
    </div>
  );
}

