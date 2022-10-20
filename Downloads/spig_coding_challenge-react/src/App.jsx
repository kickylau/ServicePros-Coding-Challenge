import React, { useEffect, useState } from 'react'
import './App.css'
import BookTable from "./components/BookTable";
// import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const url = "/books";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        //console.log(json);
        setBooks(json.body);
      } catch (error) {
        //console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Kicky's Online Library</h1>
      {/* <ThemeProvider theme={this.getMuiTheme()}> */}
      <div className="card">
        <BookTable
          data={books}
        />
      </div>
      {/* </ThemeProvider> */}
    </div>
  )
}

export default App
