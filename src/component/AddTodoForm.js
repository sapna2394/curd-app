function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
      <form onSubmit={onAddFormSubmit}>
        <h2 className="head">TODO LIST</h2>
        <label htmlFor="todo"><i>CREATE TODO: </i></label>
        <input
          name="todo"type="text"placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />
      </form>
    );
  }   
export default AddTodoForm