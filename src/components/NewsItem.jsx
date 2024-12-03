import image from "../assets/news.jpg";

function NewsItem({ title, description, url, src }) {
  return (
    <>
      <div
        className="card"
        bg-dark
        my-3
        mx-3
        d-inline-block
        style={{
          maxWidth: "345px",
          display: "inline-block",
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "20px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px ",
        }}
      >
        <img
          src={src ? src : image}
          style={{ height: "200px", width: "100%" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 121)
              : "Der Wert der ältesten Kryptowährung stieg gestern Abend auf ein Rekordhoch, ein Bitcoin ko"}
          </p>
          <a href={url} className="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
