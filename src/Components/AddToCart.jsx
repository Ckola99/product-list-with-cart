import addToCartImg from "../assets/images/icon-add-to-cart.svg";

const AddToCart = () => {
	return (
		<button className="group justify-self-center flex items-center justify-center rounded-full border border-rose-400 p-2 w-44 absolute bottom-[100px] z-10 bg-white text-center hover:border-red hover:text-red">
			<img
				src={addToCartImg}
				alt="add to cart"
				className="mr-2"
			/>
			<p className="font-semibold text-rose-900 group-hover:text-red">
				Add to Cart
			</p>
		</button>
	);
};

export default AddToCart;
