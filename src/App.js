import { useState } from "react";
// eslint-disable-next-line no-lone-blocks
{
  /*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];*/
}
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((item) => item.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((item) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packinglist
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItems={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip🧡</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Packinglist({ items, onDeleteItem, onToggleItems }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
        {/*{initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}*/}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
        {""} {item.quantity} {item.description}
      </span>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>🥽You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /*<Item item1={item} />
The item1 prop is passed to the Item component. 
This is done using JSX attribute syntax, where item1={item} means that the 
value of the item variable from the current iteration of the loop is passed as a 
prop named item1 to the Item component.
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}*/
}
// eslint-disable-next-line no-lone-blocks
{
  /*In the provided code snippet, `(_, i)` is a destructuring pattern used in the context of the `Array.from()` function's callback. Let's break down the code to understand what's happening:

1. `Array.from({ length: 20 }, (_, i) => i + 1)`:
   - `Array.from()` is a method that creates a new array from an array-like or iterable object.
   - In this case, an object `{ length: 20 }` is provided as the first argument, which specifies the desired length of the new array (20 elements).
   - The second argument is a callback function that will be executed for each element in the newly created array.
   - The callback function takes two parameters: the current value (which is not used here and is represented by `_`) and the current index (represented by `i`).

2. `(_, i) => i + 1`:
   - This arrow function takes two parameters: the current value (ignored, represented by `_`) and the current index (`i`).
   - It simply returns the value of `i + 1`, effectively generating an array of numbers from 1 to 20.

3. `.map((num) => ...)`:
   - After generating the array of numbers from 1 to 20, the `.map()` function is used to transform each element of the array.
   - Here, each number (`num`) is transformed into an HTML `<option>` element with the value and text both set to the current number.

So, in summary, `(_, i)` is used to destructure the parameters of the callback function provided to `Array.from()`. The underscore (`_`) indicates that the value parameter is not being 
used within the callback function, and `i` represents the index of the current element being processed. The code generates an array of numbers from 1 to 20 and maps each number to an 
HTML `<option>` element within a `<select>` element.*/
}
// eslint-disable-next-line no-lone-blocks
{
  /*The `...items` syntax is called the "spread operator" in JavaScript. It's used to create a shallow copy of an array or object. In the context of your code, `...items` is used to create a 
  copy of the current `items` array before appending a new item to it.

Here's how it works:

1. `items` is the current state variable that holds an array of items.

2. `...items` takes the contents of the `items` array and spreads them into a new array. This new array contains all the elements from the `items` array.

3. `[...items, item]` is an array literal that combines the spread items with the `item` parameter. This effectively creates a new array that contains all the items from the original 
`items` array and adds the new `item` to the end of the array.

So, the purpose of `...items` in the code is to ensure that the original `items` array remains unchanged. It creates a new array with the existing items and adds the new item to that new 
array. This new array is then used to update the state with the updated list of items while preserving the immutability of the original state.*/
}
