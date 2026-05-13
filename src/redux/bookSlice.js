import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";


// API FETCH
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",

  async () => {

    const urls = [

      {
        url: "https://openlibrary.org/subjects/fiction.json?limit=10",
        category: "Fiction",
      },

      {
        url: "https://openlibrary.org/subjects/nonfiction.json?limit=10",
        category: "Non-Fiction",
      },

      {
        url: "https://openlibrary.org/subjects/science_fiction.json?limit=10",
        category: "Sci-Fiction",
      },

    ];

    let allBooks = [];

    for (let i = 0; i < urls.length; i++) {

      const res = await fetch(urls[i].url);

      const data = await res.json();

      const formattedBooks = data.works.map((item, index) => ({

        id: `${i}-${index}`,

        title: item.title,

        author:
          item.authors?.[0]?.name || "Unknown",

        category: urls[i].category,

        description:
          item.subject
            ? item.subject.join(", ")
            : "No Description",

        cover:
          item.cover_id
            ? `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`
            : "https://via.placeholder.com/150",
        rating:
         item.ratings_average
         ? item.ratings_average.toFixed(1)
         : "4.0",

      }));

      allBooks = [...allBooks, ...formattedBooks];
    }

    return allBooks;
  }
);


// INITIAL STATE
const initialState = {

  books: [],

  loading: false,

};


// SLICE
const bookSlice = createSlice({

  name: "books",

  initialState,

  reducers: {

    // ADD NEW BOOK
    addBook: (state, action) => {

      state.books.unshift(action.payload);

    },

  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchBooks.pending, (state) => {

        state.loading = true;

      })

      .addCase(fetchBooks.fulfilled, (state, action) => {

        state.loading = false;

        state.books = action.payload;

      })

      .addCase(fetchBooks.rejected, (state) => {

        state.loading = false;

      });

  },

});


export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;