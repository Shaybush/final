import { useState, useEffect } from 'react';
import { getData as getTodo, changeData as changeTodo } from "../../Hooks/useFetchToDo.js";

function HomePage() {
	const [ todos, setTodos ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ filterState, setFilterState ] = useState(0);
	const [ searchState, setSearchState ] = useState('');
	
	useEffect( ()=> {
        async function getTodoOnLoad() {
            try{
				const todosList = await getTodo();
                setIsLoaded(true);
                setTodos(todosList);
            }
            catch(err){
                console.log(err);
            }
        }
        getTodoOnLoad();
	}, []);

	const setDone = (todo, isDone, i) => {
		console.log(todo, isDone, i);
		todo.isDone = isDone;
		changeTodo(todo, i);
	}

	function resetFilter() {
		setFilterState(0);
		setSearchState('');
	}

	return (
		<>
		{ isLoaded &&
		<div class="columns is-centered">
			<div class="column is-two-thirds">
				<nav class="panel">
					<p class="panel-heading">
						To do
					</p>
					<div class="panel-block">
						<p class="control has-icons-left">
							<input onChange={(e) => setSearchState(e.target.value)} value={ searchState } class="input" type="text" placeholder="Search"/>
							<span class="icon is-left">
							<i class="fas fa-search" aria-hidden="true"></i>
							</span>
						</p>
					</div>
					<p class="panel-tabs">
						<a onClick={() => setFilterState(0)} class={filterState === 0 ? `is-active` : ''}>All</a>
						<a onClick={() => setFilterState(1)} class={filterState === 1 ? `is-active` : ''}>Not Done</a>
						<a onClick={() => setFilterState(2)} class={filterState === 2 ? `is-active` : ''}>Done</a>
					</p>
					<div class="panel-block">
						<button onClick={ () => resetFilter() } class="button is-link is-outlined is-fullwidth">
							Reset all filters
						</button>
					</div>
					{ todos.reduce((acc, todo, i) => {
						if (
							(
								filterState === 0 
							|| (filterState === 1 && todo.isDone === false) 
							|| (filterState === 2 && todo.isDone === true)
							)
							&& (searchState.length === 0 || todo.title.search(searchState) > -1)
						)
						{
							acc.push(
								<label class="panel-block" key={ i }>
									<input onClick={ (e) => setDone(todo, e.target.checked, i) } type="checkbox" defaultChecked={ todo.isDone }/>
									{ todo.title }
								</label>
							)
						}
						return acc;
					}, [])}
				</nav>
		 	</div>
		</div>
		}
		</>
	);
}

export default HomePage;