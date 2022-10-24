import React, {useState}from 'react'
import axios from 'axios';
const AddBook = () => {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [createdAt,setCreatedAt] = useState('');
  const [booksList,setBooksList] = useState([]);
  const addBook = () =>{
    axios.post("http://localhost:4000/books/add",{
      title: title,
      author: author,
      createdAt: createdAt
    })
      setBooksList(
        [...booksList,{title: title,author: author,createdAt:createdAt}]
        )
  }
  return (
    <div className='form'>
       <label>Tiltle:</label>
     <input type='text' name='title' onChange={(e)=>{
      setTitle(e.target.value)}}/>
      <label>Author:</label>
     <input type='text' name='author' onChange={(e)=>{
      setAuthor(e.target.value)}}/>
      <label>Created At:</label>
     <input type='text' name='createdAt' onChange={(e)=>{
      setCreatedAt(e.target.value)}}/>
     <button onClick={addBook}>Add Book</button>
    </div>
  )
}
export default AddBook;