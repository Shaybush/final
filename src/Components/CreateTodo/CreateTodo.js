import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addNewTodo } from '../../Hooks/useFetchToDo';

function CreateTodo() {
	const [ title, setTitle ] = useState("");
	const [ titleError, setTitleError ] = useState(false);
	let navigate = useNavigate();
	function validate() {
		let valid = true;
		if (!title || title.length < 1){
			setTitleError("Todo must not be empty.");
			valid = false;
		}
		else setTitleError(false);
		return valid;
	}
	function sendForm(e) {
		e.preventDefault();
		if ( validate() ){
			const newTodo = { title, isDone: false };
			console.log('newTodo', newTodo);
			addNewTodo(newTodo);
			setTitle('');
			console.log('navigating');
			navigate('/');
		}
	}
	return (
		<>
		<div class="columns is-centered">
			<div class="column is-one-third">
				<form class="box">
					<div class="field">
						<div class="field">
							<label class="label">Title</label>
							<div class="control">
								<input onChange={ e => { setTitle(e.target.value) }} class={`input ${ titleError && 'is-danger'}`} type="text" placeholder="Enter your todo here"/>
							</div>
							{ titleError && <p class="help is-danger">{ titleError }</p> }
						</div>
					</div>
					<div class="field is-grouped">
						<div class="control">
							<button onClick={ (e) => { sendForm(e)}  } class="button is-link">Submit</button>
						</div>
						<div class="control">
							<Link to="/">
								<button class="button is-link is-light">
									Cancel
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
		</>
	);
}

export default CreateTodo;