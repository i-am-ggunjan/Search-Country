import { Component } from "react";
import CountryData from "../assets/CountryData.json";

class Search3 extends Component {
  constructor() {
    super();
    this.state = {
      country_data: CountryData,
    };
  }

  render() {
    return (
      <>
        <section>
          <article>
            <h2>Search Country</h2>
            <form>
              <select>
                {this.state.country_data.map((value) => {
                  return <option key={value.code}>{value.name}</option>;
                })}
              </select>
            </form>
            {/* <div>
              {this.state.country_data.map((value) => {
                return <p>{value.name}</p>;
              })}
            </div> */}
          </article>
        </section>
      </>
    );
  }
}

export default Search3;
