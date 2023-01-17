export const GifItem = ({ title, url }) => {
  return (
    <div className="col-md-6">
      <figure >
        <img src={url} alt={title} />
      </figure>
    </div>
  );
};
