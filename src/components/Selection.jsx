const Selection = ({ onSelectHandle, onSelectNumber }) => {
  const values = ["1", "2", "3", "4", "5", "6"];

  const handleSelectNumber = (e) => {
    onSelectHandle(e.target.innerText);
  };

  return (
    <div>
      {onSelectNumber === 0 && (
        <h1 className="text-red-600 font-semibold mb-3">
          You need to select number first
        </h1>
      )}

      <div className="flex space-x-1 ">
        {values.map((value, index) => (
          <button
            className="border px-2.5 text-xl font-semibold cursor-pointer rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white"
            key={index}
            onClick={handleSelectNumber}
          >
            {value}
          </button>
        ))}
      </div>

      <h1 className="text-right mt-2 text-lg font-semibold">Select Number</h1>
    </div>
  );
};

export default Selection;
