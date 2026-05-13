import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Details() {

  const { id } = useParams();

  const books = useSelector((state) => state.books.books);

  const singleBook = books.find((b) => b.id === id);


  if (!singleBook) {
    return (
      <>
        <h1>Book Not Found</h1>

        <button id="detBtn">
          <Link to="/browse">Back to Browse</Link>
        </button>
      </>
    );
  }

  return (
    <>
      <div id="details">
        <div className="bc">
          <h1 >Book Details</h1>
          <button id="backBtn"> <Link to="/browse">Back to Browse</Link> </button>
        </div>

        <br />
        <br />

        <h2>Book Title: {singleBook.title}</h2> 
        <h3>Author: {singleBook.author}</h3>

        <img src={singleBook.cover} width="250px" height="300px" alt="book"className="viewInfo" />

        <h4 className="vwInf">Category: {singleBook.category}</h4>

        <h4 className="vwInf"> Rating: {singleBook.rating} ⭐</h4>

        <p id="veDesc"> {singleBook.description}</p>

      </div>
    </>
  );
}

export default Details;