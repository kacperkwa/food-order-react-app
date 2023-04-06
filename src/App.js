import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App(props) {
	const [isVisible, setIsVisible] = useState(false);
	const modalCartHandler = () => {
		setIsVisible(!isVisible);
	};
	return (
		<Fragment>
			{isVisible && <Cart onClick={modalCartHandler} />}
			<Header onClick={modalCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
