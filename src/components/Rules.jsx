const Rules = () => {
  return (
    <div className="bg-gray-300 m-4 p-4 rounded-md">
      <h2 className="text-xl font-bold">How to play dice game</h2>
      <div className="font-semibold mt-3 pl-4">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get 5 points.
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </div>
    </div>
  );
};

export default Rules;
