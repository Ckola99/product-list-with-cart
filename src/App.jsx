import { useState } from "react";
import Item from "./Components/Item";
import Cart from "./Components/Cart";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-20 xl:gap-7">
			<Item />
			<Cart />
		</div>
	);
}

export default App;
