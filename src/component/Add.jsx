import { useState } from "react";

import { useDispatch } from "react-redux";

import { addBook } from "../redux/bookSlice";

import { useNavigate } from "react-router-dom";

function Add() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({

    title: "",

    cover: "",

    author: "",

    rating: "",

    description: "",

    category: "",

  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    if ( !form.title || !form.cover || !form.author || !form.rating || !form.description || !form.category ) {

      setError("All fields are required");

      return;

    }

    if (form.rating < 0 || form.rating > 5) {

      setError("Rating must be between 0 and 5");

      return;

    }

    dispatch(

      addBook({

        ...form,

        id: Date.now(),

      })

    );

  
    navigate("/browse");

  };



  return (

    <div id="addBook">

      <h1 className="bc">Add Book</h1>

      <form onSubmit={handleSubmit} id="form">

        <input type="text" name="title" placeholder="Book Title" className='bTitle'  onChange={handleChange} />

        <input type="text" name="author" placeholder="Author Name" className='bTitle' onChange={handleChange} />
        <br />
        <br />
        <input type="text" name="cover" placeholder="Cover Image URL" className='bTitle' onChange={handleChange} />     

        <input type="number" name="rating" placeholder="Rating (0-5)" step="0.1" min="0" max="5" className='bTitle' onChange={handleChange} />
        <br />
        <br />

        <textarea name="description" placeholder="Book Description" rows="5" cols="30" id="desc" onChange={handleChange} className="input"/>

        <select name="category" className='bTitle' id="sel" onChange={handleChange} >

          <option value=""> Select Category </option>

          <option value="Fiction"> Fiction </option>

          <option value="Non-Fiction"> Non-Fiction </option>

          <option value="Sci-Fiction"> Sci-Fiction </option>

        </select>


        <br />
        <br />
        {error && (
          <p style={{ color: "red" }}> {error} </p>
        )}

        <button type="submit" id="subBtn"> Add Book </button>
        <br />
      </form>

    </div>

  );
}

export default Add;