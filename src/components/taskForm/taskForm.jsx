import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import style from './taskForm.module.css';

const TaskForm = ({onNewTask}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        onNewTask({
            id: nanoid(),
            ...data,
            isDone: false
        })
        reset();
    };

    return (<>
        <article>
            <h2>Ajouter une nouvelle tache</h2>
            <form className={style.formTask} onSubmit={handleSubmit(onSubmit)}>
            <div className={`${style.inputUser} ${style.inputName}`}>
                    <label htmlFor="">Nom</label>
                    <input type="text" {...register("name", {required:true})}/>
                </div>
                <div className={`${style.inputUser} ${style.inputDesc}`}>
                    <label htmlFor="">Description</label>
                    <input type="text" {...register("description")}/>
                </div>
                <div className={`${style.inputUser} ${style.inputPrio}`}>
                    <label htmlFor="">Priorité</label>
                    <select {...register("priority")}>
                        <option value="1">Haute</option>
                        <option value="2">Normal</option>
                        <option value="3">Basse</option>
                    </select>
                </div>
                <div className={style.onSubmit}>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
            <p>{errors.name && 'le Nom est requis'}</p>
        </article>
    </>);
}

TaskForm.defaultProps = {
    onNewTask: () => {}
};

TaskForm.propTypes = {
    onNewTask: PropTypes.func
};

export default TaskForm;