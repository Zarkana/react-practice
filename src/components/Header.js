import Button from "./Button"

const Header = ({ title, showAddTask, onToggleShowAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {showAddTask ? (
        <Button color="black" text="Close" onClick={onToggleShowAddTask} />
      ) : (
        <Button color="green" text="Add" onClick={onToggleShowAddTask} />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

export default Header
