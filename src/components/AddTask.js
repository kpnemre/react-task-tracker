import React, { useState, useCallback } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  },[onAdd,day,text,reminder]);

  console.log("AddTask: rendering");
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          required
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};
export default React.memo(AddTask);
