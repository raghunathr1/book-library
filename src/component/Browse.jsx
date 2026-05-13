import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Browse() {

  // Redux se books lena
  const book = useSelector((state) => state.books.books);

  const { category } = useParams();

  const [search, setSearch] = useState("");
  const [more, setMore] = useState({});

  function showMore(id) {
    setMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  let filteredBooks = category
    ? book.filter(
        (b) =>
          b.category?.toLowerCase() === category?.toLowerCase()
      )
    : book;

  filteredBooks = filteredBooks.filter(
    (b) =>
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.author?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav id="nav1">
        <h1>Browse Books</h1>

        <ul>
          <Link to="/browse/Fiction" className="link"> Fiction </Link>

          <Link to="/browse/Non-Fiction" className="link"> Non-Fiction </Link>

          <Link to="/browse/Sci-Fiction" className="link"> Sci-Fiction </Link>
        </ul>
      </nav>

      <br />

      <div id="in1">
        <input type="text" placeholder="Search by title or author" onChange={(e) => setSearch(e.target.value)} className="inp" />
      </div>

      <div className="book">

        {filteredBooks.length === 0 ? (
          <h2>No Books Found</h2>
        ) : (
          filteredBooks.map((item, index) => (
            <div key={index} id="book1">

              <h3>{item.title}</h3>

              {item.cover ? (
                <img src={item.cover} width="250px" height="150px" alt="book" />
              ) : (
                <img src="https://via.placeholder.com/250x150" alt="book"/>
              )}

              <br />

              <strong>{item.author}</strong>{" "} {item.category}

              <h4>⭐ {item.rating}</h4>
              <p>
                {more[index] ? item.description : item.description?.slice(0, 100)}
              </p>

              <button onClick={() => showMore(index)}>
                {more[index] ? "Show Less" : "Show More"}
              </button>

              <br />

              <Link to={`/book/${item.id}`} className="vd"> View Details </Link>

            </div>
          ))
        )}

      </div>
    </>
  );
}

export default Browse;