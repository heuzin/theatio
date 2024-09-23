import Results from "@/components/Results";
import { Movies } from "@/Models/Movies";

interface HomeProps {
  searchParams: { genre: string };
}

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results: Movies[] = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
