export const EventDescription = ({ description }) => {
  return (
    <div className="container">
      <div className="mt-24 mb-12">
        <h3 className="header mb-12">Event Description</h3>
        <p className="text-justify max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
};
