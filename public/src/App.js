import "./App.css";
import FormLyrics from './FormLyrics';
// import { text } from "express";

function App() {
return (
	<div className="App">
	<header className="App-header">
  <p>Sentiment Analyzer</p>
	</header>
  <main>

    <FormLyrics />
  </main>
	</div>
);
}

export default App;
