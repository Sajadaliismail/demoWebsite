export default function Vacancies() {
  return (
    <div
      className="md:h-[55vh] h-[80vh] text-white flex flex-col md:flex-row align-middle items-center py-14 md:px-14 md:gap-52"
      style={{
        backgroundImage: "url(/Vacancies.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <p className="text-3xl md:text-5xl mb-8">Let’s work Together</p>
        <p className="text-lg md:text-xl mb-8 leading-loose">
          Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
          tristique euismod rcu tristique nisl id nibh. viverra feugiat
          viverra.Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div>
        <button className="bg-white text-black text-2xl text-nowrap p-5 rounded-xl px-14">
          View Vacancies
        </button>
      </div>
    </div>
  );
}
