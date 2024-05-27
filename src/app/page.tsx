import MovieCard from "@/components/MovieCard";

const API_KEY = process.env.API_KEY;



async function Home({searchParams}) {

  const genre = searchParams.genre || 'fetchTrending';
  const movieFetch = (genre === 'fetchTopRated') ? "/movie/top_rated" : "/trending/all/week";
  const res = await fetch(`https://api.themoviedb.org/3${movieFetch}?api_key=${API_KEY}&language=en-US=`);
  const data = await res.json();
  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;

  console.log(results);


  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {
        results.map((result) => <MovieCard movie={result}/>)
      }
    </div>
  )
}

export default Home
