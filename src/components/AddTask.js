function AddTask() {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control form-control-check'>
        <label>Set reminder</label>
        <input type='checkbox' placeholder='Add Task' />
      </div>

      <input type='submit' className='btn btn-block' value='Save Task' />
    </form>
  );
}

export default AddTask;
