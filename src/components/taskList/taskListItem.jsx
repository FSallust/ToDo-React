import PropTypes from 'prop-types';
import style from './taskListItem.module.css';

const TaskListItem = (props) => {
    const {id, name, description, priority, isDone} = props;
    const {onFinish, onDelete} = props;

    return (<>
        <section className={`${style.task} ${isDone ? style.isDone : ''}`}>
            <div className={style.taskInfo}>
                <h3>{name} {priority === '1' && <span className={style.urgent}>(Urgent)</span>}</h3>
                <p>{description}</p>
            </div>
            <div className={style.taskAction}>
                <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </section>
    </>);
}

TaskListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired,
};

export default TaskListItem;