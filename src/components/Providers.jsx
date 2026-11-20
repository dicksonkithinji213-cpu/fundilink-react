
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Providers() {
  const [providers, setProviders] = useState([]);
  const [newPrice, setNewPrice] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/providers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch providers");
        }
        return response.json();
      })
      .then((data) => setProviders(data))
      .catch((error) =>
        console.error("Error fetching providers:", error)
      );
  }, []);

const handleDelete = (id) =>{
    fetch(`http://localhost:3001/providers/${id}`, {
        method: "DELETE",
    })
    .then((response) => {
        if(response.ok) {
           setProviders(providers.filter((provider) => providers.id !== id));
        }
    });
};
const handleUpdate = (id, newPrice) => {
    fetch(`http://localhost:3001/providers/${id}`, {
        method: "PATCH",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({ price: newPrice})
    })
    .then((response) => {
        if(response.ok) {
            setProviders((prevProviders) => prevProviders.map((provider) => provider.id === id ? { ...provider, price: newPrice } : provider));
        }
    })
    .catch((error)  => console.error("Error updating provider:", error));
};

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">
        Service Providers
      </h2>

      <div className="row g-4">
        {providers.map((provider) => (
          <div className="col-md-4" key={provider.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {provider.name}
                </h5>

                <p>Service: {provider.service}</p>
                <p>Location: {provider.location}</p>
                <p>Price: KES {provider.price}</p>
                <Link to={`/providers/${provider.id}`} className="btn btn-primary">Hire Now</Link>
                {/* <input type="number" className="form-control" value={newPrice[provider.id] || ""} onChange={(e) =>  setNewPrice({...newPrice,[provider.id]: e.target.value})}/> */}
                {/* <button className="btn btn-danger" onClick={() => handleDelete(provider.id)}>DELETE</button> */}
                {/* <button className="btn btn-primary" onClick={() => handleUpdate(provider.id, Number(newPrice[provider.id]))}>Update Price</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Providers;
