function TaskCard({ task }) {
  return (
    <article className="task-card">
      <div className="task-content">
        <h3>{task.title}</h3>
        <span className="category">{task.category}</span>
      </div>

      <span className="task-id">#{task.id}</span>
    </article>
  );
}

export default TaskCard;