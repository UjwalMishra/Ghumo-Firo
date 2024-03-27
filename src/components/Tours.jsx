import Card from "./Card";

function Tours({ tours, removetourHandler }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-black text-center text-[3rem] m-[6vh] rounded-xl p-[2vh] px-[3vw] font-bold border-8 border-blue-400 border-dashed">
          GHUMO FIRO
        </h1>
        <div className="grid grid-cols-3 justify-center items-start max-w-[1300px] mx-auto">
          {tours.map((tour) => {
            return (
              <Card
                key={tour.id}
                {...tour}
                removetourHandler={removetourHandler}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tours;
