import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [inputNotes, setNotes] = useState({
    title: "",
    content: ""
  });

  const [isOpened, setOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitAdd(event) {
    props.onAdd(inputNotes);
    event.preventDefault();
    setNotes({
        title: "",
        content: ""
    });
  }

  function handleClick() {
    setOpen(true);
  }


  return (
    <div>
      <form className="create-note">
        {isOpened &&
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNotes.title}
        />}
        
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isOpened ? "3" : "1"}
          value={inputNotes.content}
          onClick={handleClick}
        />
        <Zoom in={isOpened}>
          <Fab onClick={submitAdd}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
