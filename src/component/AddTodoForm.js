function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange
}) {
  return (
    <>
      <h2 className="head">TODO LIST</h2>
      <form onSubmit={onAddFormSubmit}>
        <label htmlFor="todo"><i>CREATE TODO: </i></label>
        <input
          name="todo" type="text" placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />
      </form>
    </>
  );
}
export default AddTodoForm