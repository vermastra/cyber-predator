import React from "react";

function Form(props) {
  return (
    <div>
      <form>
        <input
          placeholder="username"
          value={props.username}
          onChange={props.onChange}
          type="text"
        />
        <button type="button" onClick={props.connect}>
          connect
        </button>
      </form>
    </div>
  );
}

export default Form;
