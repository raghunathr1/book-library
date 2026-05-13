import { useEffect, useState } from "react";

import { useDispatch, useSelector,} from "react-redux";

import { fetchBooks } from "../redux/bookSlice";

import { Link } from "react-router-dom";

function Home() {

  const dispatch = useDispatch();

  const { books, loading } = useSelector(
    (state) => state.books
  );

  const [more, setMore] = useState({});

  function showMore(id) {

    setMore((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

  }

  useEffect(() => {

    if (books.length === 0) {

      dispatch(fetchBooks());

    }

  }, []);

  return (
    <>

      <h1 className="bc">Book Collection</h1>

      <div className="book">

        {loading ? (
        <h2>Loading...</h2>
        ) : (
          books.map((item) => (
            <div key={item.id} id="book1">
              <h3>{item.title}</h3>

              <img src={item.cover} width="150px" height="200px" alt="book" />
              <br />
               <strong>{item.author}</strong>{" "} {item.category}

              <h4>⭐ {item.rating}</h4>

              <p>

                {more[item.id] ? item.description : item.description?.slice(0, 100)}

              </p>

              <button onClick={() => showMore(item.id)}>

                {more[item.id] ? "Show Less" : "Show More"}

              </button>

              <br />
              <br />

              <Link to={`/book/${item.id}`} className="vd"> View Details </Link>

            </div>

          ))

        )}

      </div>

    </>
  );
}

export default Home;