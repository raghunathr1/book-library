import { useEffect, useState } from "react"
import Home from "./Home"
import Browse from "./Browse";
import { useLocation } from "react-router-dom";
import Details from "./Details";

function Fetch() {

  const [book, setBook] = useState([]);
  const location = useLocation();

  async function getData() {

    try {

      let res1 = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10`
      );

      let res2 = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&maxResults=10`
      );

      let res3 = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:science-fiction&maxResults=10`
      );

      let data1 = await res1.json();
      let data2 = await res2.json();
      let data3 = await res3.json();

      console.log(data1);
      console.log(data2);
      console.log(data3);

      let fic = data1.items.map((b, i) => ({
        id: "f" + i,
        title: b.volumeInfo.title,
        author: b.volumeInfo.authors?.[0],
        cover: b.volumeInfo.imageLinks?.thumbnail,
        description: b.volumeInfo.description,
        rating: b.volumeInfo.averageRating || "No Rating",
        category: "Fiction"
      }));

      let nonfic = data2.items.map((b, i) => ({
        id: "n" + i,
        title: b.volumeInfo.title,
        author: b.volumeInfo.authors?.[0],
        cover: b.volumeInfo.imageLinks?.thumbnail,
        description: b.volumeInfo.description,
        rating: b.volumeInfo.averageRating || "No Rating",
        category: "Non-Fiction"
      }));

      let scific = data3.items.map((b, i) => ({
        id: "s" + i,
        title: b.volumeInfo.title,
        author: b.volumeInfo.authors?.[0],
        cover: b.volumeInfo.imageLinks?.thumbnail,
        description: b.volumeInfo.description,
        rating: b.volumeInfo.averageRating || "No Rating",
        category: "Sci-Fiction"
      }));

      setBook([...fic, ...nonfic, ...scific]);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <> 
        {
      location.pathname === "/"

      ?

      <Home book={book} />

      :

      location.pathname.includes("/book/")

      ?

      <Details book={book} />

      :

      <Browse book={book} />

    }
      
    </>
  )
}

export default Fetch;