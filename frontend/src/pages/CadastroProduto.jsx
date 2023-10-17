import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";

const productTypes = [
  {
    name: "Blocos",
    unit: "und",
  },
  {
    name: "Areia/Pedra",
    unit: "kg",
  },
  {
    name: "Ferragem",
    unit: "m",
  },
  {
    name: "Madeira",
    unit: "m",
  },
];

export default function CadastroProduto() {
  // const [productType, setProductType] = useState();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState(0);
  const [sizeUnit, setSizeUnit] = useState("");

  const handleProductInsert = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/products", {
      name,
      quantity,
      size,
      sizeUnit,
    });

    window.location.reload();
  };

  return (
    <div className="">
      <Header />

      <form className="" onSubmit={handleProductInsert}>
        <div className="">
          <label htmlFor="">Tipo do Produto</label>
          <select id="undMedida" name="undMedida">
            {productTypes.map((pType) => (
              <option value={pType.unit}>{pType.name}</option>
            ))}
          </select>
        </div>

        <div className="">
          <label for="">Nome do Produto</label>
          <input
            className=""
            type="text"
            id="nome_produto"
            name="Nome do producto"
            placeholder="Digite o nome do produto"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="">
          <label for="quantidad">Quantidade:</label>
          <input
            className=""
            type="number"
            id="quantidade"
            name="quantidade"
            placeholder="Digite a quantidade"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="">
          <label for="medidas">Medidas:</label>
          <input
            className=""
            type="number"
            id="medidas"
            name="medidas"
            placeholder="Digite as medidas"
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <div className="">
          <label for="undMedida">Und de Medida:</label>
          <select
            id="undMedida"
            name="undMedida"
            onChange={(e) => setSizeUnit(e.target.value)}
          >
            <option value="und">Unidades</option>
            <option value="kg">Quilos</option>
            <option value="m">Metros</option>
          </select>
        </div>

        <button className="">Adicionar</button>
      </form>
    </div>
  );
}
