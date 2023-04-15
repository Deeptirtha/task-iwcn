import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [text, setText] = useState("");
  const [update, setUpdate] = useState(true);

  const addNote = () => {
    if (!text) {
      return alert("Please write something to add note");
    }
    if (text.length > 250) {
      return alert("You can write maximun 250 words");
    }
    let options = {};

    //making title if there is two line

    let arr = text.split("\n");
    if (arr.length > 1) {
      if (arr[0].length > 20) {
        return alert("Title can contain max 20 letter");
      }

      if (arr[0].length <= 20) {
        const [title, ...description] = arr;
        console.log(description.length)
        if (description.join(" ").trim().length<1) {
          return alert("Write something to add your note body");
        }

        options.title = title;
        options.description = description.join(" ");
      }
    } else {   //if there is single line making 1st word title

      let arr = text.split(" ");
      if (arr[0].length > 20) {
        return alert("Title can contain max 20 letter");
      }

      if (arr[0].length <= 20) {
        const [title, ...description] = arr;
        if (description.join(" ").trim().length<1) {
          return alert("Write atleast 2 word to make your note more useful");
        }
        options.title = title;
        options.description = description.join(" ");
      }
    }
    let time = new Date().toISOString().split("T");

    let dateTime = `${time[0]} ${time[1]}`;

    options.date = dateTime;

    axios
      .post("http://localhost:3001/notes", options)
      .then(() => {
        alert("Note Added succesfully");
        setText("");
        setUpdate(false);
      })
      .catch((err) => alert(err.message));
  };

  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    setUpdate(true);
    axios
      .get("http://localhost:3001/notes")
      .then((res) => {
        setAllNotes(res.data);
      })
      .catch((err) => alert(err.message));
  }, [update]);

  const deleteNote = (i) => {
    axios
      .delete(`http://localhost:3001/notes/${i}`)
      .then(() => {
        alert("Note Delete Succesfully");
        setUpdate(false);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="body">
      <div className="navbar">
        <span><i class="fa-solid fa-bars bar"/>Notes</span>
      </div>

      <div className="inputArea">
        <textarea
          value={text}
          placeholder="write your note...."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>

      <div className="notesBox">
        {allNotes.map((x, i) => {
          return (
            <div className="singleBox" key={i}>
              <h3>{x.title}</h3>
              <div>
                <p>{x.description}</p>
              </div>
              <span>{x.date}</span>
              <i
                onClick={() => deleteNote(x.id)}
                className="fa-solid fa-trash dlt"
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
