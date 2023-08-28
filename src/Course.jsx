function Course({ image, title, category, price, description }) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">
            {category}--
            {price}
          </p>
        </div>

        <div className="content">{description}</div>
      </div>
    </>
  );
}

export default Course;
