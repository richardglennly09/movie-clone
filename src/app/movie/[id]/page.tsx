import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";

export default async function Movie({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const movie = await res.json();
  // const movie = data.result;

  return (
    <div className="grid grid-cols-2 m-10">
      <div>
        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
          alt="Failed to load image"
          className="rounded-md shadow-lg shadow-cyan-950 hover:opacity-70"
          width={500}
          height={700} />
      </div>

      <div>
        <h1 className=" font-semibold text-2xl truncate my-4">{movie.title || movie.name}</h1>
        <p className="text-sm ">{movie.overview}</p>
        <div className="flex justify-between items-center mt-5">
          <p className="text-sm">{movie.release_date}</p>
          <span className="text-sm flex items-center gap-2 justify-start mb-4 mt-3"><FaThumbsUp /> {movie.vote_count}</span>
        </div>

      </div>

    </div>
  )
}
