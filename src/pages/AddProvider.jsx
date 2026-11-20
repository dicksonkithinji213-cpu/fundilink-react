import { useState } from "react";

function AddProvider() {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProvider = { name, service, location, price: Number(price) };
        fetch("http://localhost:3001/providers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProvider),
        })

        .then((response) => response.json())
        .then((data) => {
            console.log("Provider registered:", data);
            alert("Registration successful!");
        })
        .catch((error) => {
            console.error("Registration failed:", error);
            alert("Registration failed");
            });
        };



  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Join FundiLink</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Service Offered</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Plumbing"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Nairobi"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price (KES)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            required
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Join us
        </button>
      </form>
    </div>
  );

};

export default AddProvider;