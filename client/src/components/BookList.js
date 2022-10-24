import React,{useState,useEffect} from 'react';
import axios from 'axios';
const BookList = () => {
  const [_id,setIdbook] = useState('')
  const [booksList,setBooksList] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/books/getAll').then((response)=>{
      setBooksList(response.data)
    })
  },[])
  
  
  const deleteBook = (id) => {
    axios.delete(`http://localhost:4000/books/${id}`).then((response)=>{
      setIdbook(response.data);
    },_id)
    
  
  }
  const updateBook = (id) => {
    axios.put(`http://localhost:4000/books/${id}`).then((response)=>{
        setIdbook(response.data);
      },_id)
    
  }
  return (
    <div className="BookList">
     <h1>BOOK FINDER APP</h1>
     <div className='form'>
      <h2>Books List:</h2>
      {booksList.map((val) => {
      return (
        <center>
          <div className='card'>
            <h4>
              ID:{val._id}
              <br></br>
      Title: {val.title}
      <br></br>
      Author: {val.author}
      <br></br>
      Created At: {val.createdAt}</h4>
      </div>
      <button onClick={()=>deleteBook(val.idbook)}>delete</button>
      <input type='text' id='update title'/>
      <input type='text' id='update auther'/>
      <input type='text' id='update cretaedAt'/>
      <button onClick={updateBook}>update</button>
      </center>)   
    })}
    </div>
     </div>
     
  );
}
export default BookList;