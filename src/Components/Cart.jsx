import emptyCartImg from "../assets/images/illustration-empty-cart.svg";

const Cart = ({ cart }) => {
	return (
		<div className="bg-white p-5 lg:col-span-1 md:col-span-1 self-start rounded-lg">
			<h2 className="text-xl text-red font-bold">Your Cart (0)</h2>
			<div className="flex flex-col text-center items-center mt-10">
				<img
					src={emptyCartImg}
					alt="empty cart pic"
					width={120}
					height={120}
					className="mb-7"
				/>
				<p className="text-rose-400 font-semibold">Your added items will appear here</p>
			</div>
		</div>
	);
};
export default Cart;
