import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import "bootstrap";

function App() {
  // are set for pageination i.e prev/next
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  //  for using the api
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
          {
            headers: {
              "X-RapidAPI-Key":
                "f8e9da4253msh9c58fda99f465f3p1688eajsnc94f9413af28",
              "X-RapidAPI-Host":
                "corona-virus-world-and-india-data.p.rapidapi.com"
            }
          }
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // when the page is loading
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: Something went wrong.</div>;
  }
  // for next and prev order of links
  const records = data.countries_stat.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.countries_stat.length / recordsPerPage);
  // function to perform next and prev
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  // the return when app.js is called
  return (
    <div className="App">
      <h1>COVID-19 Data of World and India</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {records.map((country, index) => (
            <tr key={index}>
              <td>{country.country_name}</td>
              <td>{country.cases}</td>
              <td>{country.total_recovered}</td>
              <td>{country.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="pagination-container">
        <ul className="pagination">
          <li className="page">
            <a href="#" className="order_page" onClick={prevPage}>
              Prev
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="order_page" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
// export to index.js
export default App;
