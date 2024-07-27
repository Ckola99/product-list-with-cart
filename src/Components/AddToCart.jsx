import addToCartImg from "../assets/images/icon-add-to-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
	addItem,
	removeItem,
} from "../features/AddToCartFeature/AddToCartSlice";
import { selectItems } from "../features/AddToCartFeature/AddToCartSlice";

const AddToCart = ({ item }) => {
	const dispatch = useDispatch();
	const itemsInCart = useSelector(selectItems);

	const handleAddToCart = () => {
		dispatch(addItem(item));
	};

	const handleRemoveFromCart = () => {
		dispatch(removeItem(item));
	};

	// Check if the current item is in the cart
	const itemInCart = itemsInCart.find(
		(cartItem) => cartItem.id === item.id
	);

	return (
		<div className=" flex items-center justify-center ">
			{itemInCart ? (
				<div className="bg-red-red rounded-full w-44 absolute bottom-[100px] p-2 flex items-center justify-center space-x-14">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="2"
						viewBox="0 0 10 2"
						className="border border-white p-1 rounded-full w-5 h-5 hover:cursor-pointer hover:fill-red-red hover:bg-white fill-white"
						onClick={handleRemoveFromCart}
					>
						<path d="M0 .375h10v1.25H0V.375Z" />
					</svg>
					<p className=" text-white">
						{itemInCart.quantity}
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="10"
						viewBox="0 0 10 10"
						className="border border-white p-1 rounded-full w-5 h-5 hover:cursor-pointer hover:fill-red-red fill-white hover:bg-white"
						onClick={handleAddToCart}
					>
						<path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
					</svg>
				</div>
			) : (
				<button
					className="group flex items-center justify-center rounded-full border border-rose-400 p-2 w-44 absolute bottom-[100px] z-10 bg-white text-center hover:border-red-red hover:text-red-red"
					onClick={handleAddToCart}
				>
					<img
						src={addToCartImg}
						alt="add to cart"
						className="mr-2 fill-green-50"
					/>
					<p className="font-semibold text-rose-900 group-hover:text-red-red">
						Add to Cart
					</p>
				</button>
			)}
		</div>
	);
};

export default AddToCart;
