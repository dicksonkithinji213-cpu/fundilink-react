import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProviderDetails() {
    const { id } = useParams();
    const [provider, setProvider] = useState(null);

    useEffect(() => {
         fetch(`http://localhost:3001/providers/${id}`)
         .then(response => response.json())
         .then (data => setProvider(data))
         .catch(error => console.error("Error fetching provider:", error));
    }, [id]);

    return (
        <div className="container mt-5">
         <h2>{provider?.name}</h2>
         <p>Service: {provider?.service}</p>
         <p>Location: {provider?.location}</p>
         <p>Price: KES {provider?.price}</p>
        </div>
    );

    }

    export default ProviderDetails;
