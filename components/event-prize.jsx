export const EventPrize = ({ prizeData }) => {
  return (
    <div className="container">
      <div className="mt-24 mb-12">
        <h3 className="header mb-12">Prize Money</h3>

        <div className="mx-auto max-w-2xl">
          <div className="bg-highlight flex items-center w-full font-semibold p-3">
            <div className="flex-1">Position</div>
            <div className="flex-1">Prize</div>
          </div>

          {prizeData.map((data, index) => (
            <div className="flex items-center p-3 border-b" key={index}>
              <div className="flex-1">{data.label}</div>
              <div className="flex-1">{data.prize}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
