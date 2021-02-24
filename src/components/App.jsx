import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNote] = useState([]);

    function addNotes(inputNotes) {
      setNote((prevVal) => {
        return [...prevVal, inputNotes];
      });
    }

    function deleteNote(id) {
        setNote(prevVal => {
            return (notes.filter((item, index) => {
                return index !==id;
            }));
        });
    }
  
    return (
      <div>
        <Header />
        <CreateArea onAdd={addNotes} />
        {notes.map((noteItem, index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
        })}
        <Footer />
      </div>
    );
  
}

export default App;