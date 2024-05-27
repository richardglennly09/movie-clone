import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"

function MovieCard({ movie }) {
    return (
        <Link href={`/movie/${movie.id}`} className="group shadow-md shadow-gray-500 rounded-lg">
            <div key={movie.id} className="flex flex-col bg-gray-300 p-2 rounded-lg hover:bg-gray-700 hover:text-white">
                    <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} 
                        alt="Failed to load image" 
                        className="rounded-t-md"
                        width={500} 
                        height={700}/>
                
                <span className="text-xs flex items-center gap-2 justify-start mb-4 mt-3"><AiFillStar color="yellow" /> {movie.vote_count}</span>
                <h2 className=" font-semibold text-lg truncate">{movie.title || movie.name}</h2>
                <p className="text-sm line-clamp-2 ">{movie.overview}</p>

            </div>
        </Link>
    )
}

export default MovieCard
