import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function New() {
  const [type, setType] = useState("t-shirt");
  const [color, setColor] = useState("hvid");
  const [size, setSize] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [owner, setOwner] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const product = { type, color, size, desc, price, owner };

    console.log(product);

    setIsPending(true);

    fetch("http://localhost:7000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    }).then(function () {
      setIsPending(false);
      navigate("/");
    });
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Set en vare til salg</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select
            required
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="t-shirt">t-shirt</option>
            <option value="hat">hat</option>
            <option value="sweater">sweater</option>
            <option value="bukser">bukser</option>
            <option value="kjole">kjole</option>
          </select>
        </label>
        <label>
          Farve:
          <select
            required
            value={color}
            onChange={(event) => setColor(event.target.value)}
          >
            <option value="sort">sort</option>
            <option value="hvid">hvid</option>
            <option value="blå">blå</option>
            <option value="gul">gul</option>
            <option value="rød">rød</option>
            <option value="grøn">grøn</option>
            <option value="lilla">orange</option>
            <option value="orange">orange</option>
            <option value="pink">pink</option>
            <option value="brun">brun</option>
            <option value="beige">beige</option>
            <option value="bordeaux">bordeaux</option>
            <option value="limegrøn">limegrøn</option>
            <option value="turkis">turkis</option>
            <option value="mørkegrå">mørkegrå</option>
            <option value="lysegrå">lysegrå</option>
          </select>
        </label>
        <label>
          Størrelse:
          <input
            value={size}
            onChange={(event) => setSize(event.target.value)}
            requiredtype="number"
            name=""
            id=""
          />
        </label>

        <label>
          Pris i DKK:
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
            type="number"
            name=""
            id=""
          />
        </label>

        <label>
          Beskriv varen:
          <textarea
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            required
          />
        </label>

        <label>
          Sælges af:{" "}
          <input
            value={owner}
            onChange={(event) => setOwner(event.target.value)}
            required
            type="text"
            name=""
            id=""
          />
        </label>

        {!isPending && (
          <button type="submit" value="Lav blog">
            Sæt varen til salg
          </button>
        )}
        {isPending && (
          <button type="submit" disabled value="Laver blog..">
            Sætter varen til salg...
          </button>
        )}
      </form>
    </main>
  );
}
