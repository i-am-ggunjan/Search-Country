import CountryData from "../assets/CountryData";

const Search2 = () => {
  return (
    <section className="flex justify-center items-center text-center align-bottom bg-gradient-to-b from-green-900 via-green-400 to-blue-900 h-[100vh]">
      <article className="bg-slate-300 bg-opacity-40 p-[10px] w-[30vw] rounded-xl shadow-2xl hover:shadow-pink-900/100 ">
        <h1 className="mb-[30px] text-2xl text-teal-900 ">Search Country</h1>
        <form>
          <select className="w-[100%] py-1 text-center rounded-md text-slate-600">
            {CountryData.map((value) => {
              return (
                <option key={value.code} value={value.name}>
                  {value.name}
                </option>
              );
            })}
          </select>
        </form>
      </article>
    </section>
  );
};

export default Search2;
