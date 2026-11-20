
function ServiceCard({ name, description, imageUrl }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold mb-2">
            {name}
          </h5>

          <p className="card-text text-muted">
            {description}
          </p>

          <a
            href="#contact"
            className="btn btn-primary mt-auto"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
