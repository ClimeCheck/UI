function AirStreamCards({ continent, AirStreamData }) {
  return (
    <div>
      <div className="card-2">
        <p>{continent}</p>
        <div className="grid grid-cols-2">
          {AirStreamData.map(({ name, value }, key) => {
            <div key={key}>
              <p>{name}</p>
              <h1>{value}</h1>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default AirStreamCards;
