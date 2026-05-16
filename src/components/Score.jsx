const Score = ({ newScore }) => {
  return (
    <div>
      <p className="text-center font-bold text-6xl">{newScore}</p>

      <h1 className="text-2xl font-semibold">Total Score</h1>
    </div>
  );
};

export default Score;
