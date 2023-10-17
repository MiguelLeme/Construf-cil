import { pool } from "../database/connection.js";

export async function getProducts() {
  const res = await pool.query("SELECT * FROM products");
  return res.rows;
}

export async function addProduct(name, quantity, size, sizeUnit) {
  const res = await pool.query(
    "INSERT INTO products (name, quantity, size, sizeUnit) values ($1, $2, $3, $4)",
    [name, quantity, size, sizeUnit]
  );
  return res.rows;
}

export async function updateProduct(id, name, quantity, size, sizeUnit) {
  const res = await pool.query(
    "UPDATE products SET name = $1, quantity = $2, size = $3, sizeUnit = $4 WHERE id = $5",
    [name, quantity, size, sizeUnit, id]
  );
  return res.rows;
}

export async function deleteProduct(id) {
  const res = await pool.query("DELETE FROM products WHERE id = $1", [id]);
  return res.rows;
}
