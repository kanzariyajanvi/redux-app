import { useState } from "react";
import "./Manage.css";

export default function Manage() {
  const [products, setProducts] = useState([
    { id: 1, title: "Nike Shoes", category: "Fashion", price: 2500, stock: 20, brand: "Nike" },
    { id: 2, title: "Smart Watch", category: "Electronics", price: 5000, stock: 10, brand: "Boat" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
    brand: "",
  });

  const openAdd = () => {
    setForm({ title: "", category: "", price: "", stock: "", brand: "" });
    setEditId(null);
    setIsOpen(true);
  };

  const openEdit = (p) => {
    setForm(p);
    setEditId(p.id);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (editId) {
      setProducts(products.map(p => p.id === editId ? { ...form, id: editId } : p));
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container">

      <div className="header">
        <h2>Manage Products</h2>
        <button className="addBtn" onClick={openAdd}>+ Add Product</button>
      </div>

      <p className="total">Total Records: {products.length}</p>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{p.brand}</td>
                <td>₹{p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <button className="editBtn" onClick={() => openEdit(p)}>Edit</button>
                  <button className="deleteBtn" onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <h3>{editId ? "Edit Product" : "Add Product"}</h3>

            <input placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <input placeholder="Brand"
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
            />

            <input placeholder="Price"
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input placeholder="Stock"
              type="number"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
            />

            <div className="actions">
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>Cancel</button>
              <button className="saveBtn" onClick={handleSave}>
                {editId ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}