export const EventTimeLine = ({ timeLineData }) => {
  return (
    <div className="container">
      <div className="mt-24 mb-12">
        <h3 className="header mb-12">Timeline</h3>

        <div className="mx-auto max-w-2xl">
          <div className="bg-highlight flex items-center w-full font-semibold p-3">
            <div className="flex-1">Event</div>
            <div className="flex-1">Location</div>
            <div className="flex-1">Date & Time</div>
          </div>

          {timeLineData.map((data, index) => (
            <div className="flex items-center p-3 border-b" key={index}>
              <div className="flex-1">{data.event}</div>
              <div className="flex-1">{data.location}</div>
              <div className="flex-1">{data.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
