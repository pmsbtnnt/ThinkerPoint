import React, { useState } from "react";

function CreateArea(props) {
  const [inputNotes, setNotes] = useState({
    title: "",
    content: ""
  });

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

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNotes.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={inputNotes.content}
        />
        <button onClick={submitAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
