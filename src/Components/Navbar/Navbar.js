import Styles from './Navbar.Module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//using bulma
function Navbar() {
	return (
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-menu">
				<div class="navbar-brand">
					<a class="navbar-item" href="https://www.youtube.com/watch?v=msSc7Mv0QHY">
						<img src="/bull1.png"/>
					</a>
				</div>
				<div class="navbar-end">
					<a class="navbar-item">
						<Link to="/">Home</Link>
					</a>
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-primary">
								<strong>
									<Link to="/new">New Todo</Link>
								</strong>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;