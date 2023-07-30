import React from 'react'

const Form: React.FC = () => {
  return (
    <form action="#" className="form" id="form">
      <label className="label">
        Name
        <input type="text" name="title" placeholder="Note name" className="input" value="" id="inputName" required
          minLength={5} />
      </label>

      <select id="select" className="select" name="category">
        <option value="task" selected>Task</option>
        <option value="random thoughts">Random Thoughts</option>
        <option value="idea">Idea</option>
        <option value="quote">Quote</option>
      </select>
      <label className="label">
        Content
        <input type="text" name="content" placeholder="Note content" className="input" value="" id="inputContent" required
          minLength={5} />
      </label>
      <label className="label" id="dateLabel">
        Dates
        <input type="date" name="date" className="input" id="inputDate" value="" />
      </label>
      <button type="submit" className="add-note__button" id="add-note__button">add note</button>
    </form>
  )
}

export { Form };