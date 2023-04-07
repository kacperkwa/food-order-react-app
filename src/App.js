import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App(props) {
	const [isVisible, setIsVisible] = useState(false);
	const modalCartHandler = () => {
		setIsVisible(!isVisible);
	};
	return (
		<CartProvider>
			{isVisible && <Cart onClick={modalCartHandler} />}
			<Header onClick={modalCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
