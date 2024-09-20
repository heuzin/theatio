import { Movies } from "@/Models/Movies";

interface ResultsProps {
  results: Movies[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Results;
