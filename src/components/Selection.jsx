const Selection = () => {
  const values = ["1", "2", "3", "4", "5", "6"];

  return (
    <div>
      <div className="flex space-x-1 ">
        {values.map((value) => (
          <button className="border px-2.5 text-xl font-semibold cursor-pointer rounded-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">
            {value}
          </button>
        ))}
      </div>

      <h1 className="text-right mt-2 text-lg font-semibold">Select Number</h1>
    </div>
  );
};

export default Selection;
