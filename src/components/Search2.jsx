import CountryData from "../assets/CountryData";

const Search2 = () => {
  return (
    <section>
      <article>
        <h1>Search Country</h1>
        <form>
          <select>
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
