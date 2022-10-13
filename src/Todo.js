import React, { useState } from "react";

const Todo = () => {
  const [list, Setlist] = useState("");
  const [newlist, Setnewlist] = useState([]);

  const todo = (events) => {
    Setlist(events.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    Setnewlist((oldItems) => {
      return [...oldItems, list];
    });
    Setlist(" ");
  };
  const dlt = (id) => {
    const update = newlist.filter((elem, ind) => {
      return ind !== id;
    });
    Setnewlist(update);
  };

  return (
    <>
      <div className="main">
        <h1>THINGS TO DO</h1>
        <input
        className="inputbox"
          type="text"
          value={list}
          onChange={todo}
          placeholder="Add your items..."
        />
        &nbsp;
        <button onClick={submit} className="btn">
          Add
        </button>
        <ol>
          {newlist.map((itemval, id) => {
            return (
              <>
                <div className="Li">
                  <li>
                    {itemval}
                    <span className="dlt">
                      <button onClick={() => dlt(id)}>delete</button>
                    </span>
                  </li>
                </div>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
};
export default Todo;
