import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
export const GifContainer = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  if(isLoading) return <p>LOADING...</p>;

  return (
    <>
      <h3 className="text-center p-4 fs-2">{category}</h3>
      <div className="row">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
