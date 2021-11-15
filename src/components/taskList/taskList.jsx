import PropTypes from 'prop-types';
import style from './taskList.module.css';
import TaskListItem from './taskListItem'

const TaskList = (props) => {
    const {tasks, onTaskDelete, onTaskFinish} = props;

    const tasksJSX = tasks.map(
        t => <TaskListItem key={t.id} {...t} onFinish={onTaskFinish} onDelete = {onTaskDelete}/>
    )

    return (<>
        <article className={style.listeApp}>
            <h2>La liste des taches</h2>
            <div className={style.listContent}>
                {tasksJSX}
            </div>
        </article>
    </>);
}

TaskList.defaultProps = {
    tasks: [],
    onTaskDelete: () => {},
    onTaskFinish: () => {}
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})),
    onTaskDelete: PropTypes.func,
    onTaskFinish: PropTypes.func
};

export default TaskList;