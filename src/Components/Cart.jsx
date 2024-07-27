import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import { useSelector, useDispatch } from "react-redux";
import {
	selectItems,
	removeAll,
	selectTotalNumberOfItems,
} from "../features/AddToCartFeature/AddToCartSlice";


const Cart = ({ openModal }) => {
	const numberOfItems = useSelector(selectTotalNumberOfItems);
	const cart = useSelector(selectItems);
	const dispatch = useDispatch();

	// Calculate the total order amount
	const totalAmount = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className="bg-white p-5 lg:col-span-1 md:col-span-1 self-start rounded-lg">
			<h2 className="text-xl text-red-red font-bold mb-7">
				Your Cart (<span>{numberOfItems}</span>)
			</h2>
			{cart.length ? (
				<div>
					{cart.map((item) => (
						<div
							key={item.id}
							className="border-b relative mt-3"
						>
							<p className="font-bold text-[11.5px]">
								{item.name}
							</p>
							<p className="text-xs mb-4 mt-2">
								<span className="text-red-red font-bold mr-3">
									{
										item.quantity
									}
									x
								</span>
								<span className="mr-2 text-rose-500">
									@ $
									{item.price.toFixed(
										2
									)}
								</span>
								<span className="font-semibold text-rose-500">
									$
									{(
										item.price *
										item.quantity
									).toFixed(
										2
									)}
								</span>
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="10"
								className="hover:cursor-pointer hover:fill-rose-500 absolute right-0 top-5 border-rose-400 border-2 h-[18px] w-[18px] rounded-full p-0.5 fill-rose-400 hover:border-rose-500"
								viewBox="0 0 10 10"
								onClick={() =>
									dispatch(
										removeAll(
											item
										)
									)
								}
							>
								<path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
							</svg>
						</div>
					))}
					<div className="mt-5 text-xs text-rose-900 flex justify-between items-center">
						<p>Order Total</p>
						<span className="text-2xl font-bold">
							$
							{totalAmount.toFixed(2)}
						</span>
					</div>
					<div className="my-5 flex justify-center py-2 rounded-lg bg-rose-50">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="20"
							fill="none"
							viewBox="0 0 21 20"
							className="mr-2"
						>
							<path
								fill="#1EA575"
								d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
							/>
							<path
								fill="#1EA575"
								d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
							/>
						</svg>
						<p className="">
							This is a{" "}
							<span className="font-semibold">
								carbon-neutral
							</span>{" "}
							delivery
						</p>
					</div>
					<button
						onClick={openModal}
						className="bg-red-red w-full py-3 rounded-full text-white hover:bg-red-darker"
					>
						Confirm Order
					</button>
				</div>
			) : (
				<div className="flex flex-col text-center items-center mt-10">
					<img
						src={emptyCartImg}
						alt="empty cart pic"
						width={120}
						height={120}
						className="mb-7"
					/>
					<p className="text-rose-400 font-semibold">
						Your added items will appear
						here
					</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
