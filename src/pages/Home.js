import SearchBar from "../components/ui/SearchBar";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Welcome to library!</h1>
      {/* TODO: Nav bar */}
      {/* TODO: Move SearchBar into NavBar, and only expands on click */}
      <SearchBar />
      {/* TODO: Displaying the book */}
    </div>
  );
}

export default Home;
