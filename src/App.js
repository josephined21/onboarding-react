import "./App.css";
import SpyNameGenerator from "./SpyNameGenerator/SpyNameGenerator";

// Image attribution: https://pixabay.com/illustrations/cartoon-donuts-donut-chocolate-4764725/

function App() {
  return (
    <div id="main">
      <div className="column">
        {/* Here's where all the magic happens! */}
        <SpyNameGenerator />
      </div>
    </div>
  );
}

export default App;
