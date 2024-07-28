import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../features/AddToCartFeature/AddToCartSlice";
import checkImg from "../assets/images/icon-order-confirmed.svg";

const ConfirmedModal = ({ isOpen, handleCloseModal }) => {
	const itemsInCart = useSelector(selectItems);
	const totalAmount = itemsInCart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return isOpen ? (
		<div className="fixed inset-0 flex md:justify-center md:items-center bg-gray-800 bg-opacity-50 transition-colors z-[10] mobile:items-end">
			<div className="bg-white p-6 rounded-lg shadow-lg md:w-[22rem] mobile:w-full mobile:max-md:h-[90vh] mobile:max-md:rounded-b-none">
				<img
					src={checkImg}
					className="lg:w-6 lg:h-6 mb-3 mobile:w-11 mobile:h-11"
				/>
				<h2 className="lg:text-[1.35rem] font-bold mobile:max-md:text-[2.65rem] mobile:max-md:leading-tight">
					Order{" "}
					<span className="mobile:max-md:block">Confirmed</span>
				</h2>
				<p className="lg:text-[10.5px] text-rose-500 lg:mb-4 mobile:max-md:text-xl mobile:max-md:mb-5">
					We hope you enjoy food!
				</p>
				<div className="bg-rose-50 rounded px-3 py-2">
					{itemsInCart.map((item) => (
						<div
							key={item.id}
							className="flex justify-between py-2 border-b border-b-gray items-center mobile:max-md:p-3"
						>
							<div className="flex items-center">
								<img
									src={
										item
											.image
											.thumbnail
									}
									alt={
										item.name
									}
									className="lg:h-8 lg:w-8 rounded lg:mr-2 mobile:max-md:h-12 mobile:max-md:w-12 mobile:max-md:mr-4 "
								/>
								<div className="lg:text-[8px] mobile:max-md:text-[14px] mobile:max-md:truncate mobile:max-md:max-w-[150px]">
									<p className="font-bold mb-1">
										{
											item.name
										}
									</p>
									<p>
										<span className="text-red-red font-bold mr-3">
											{
												item.quantity
											}

											x
										</span>
										<span className="text-rose-500">
											@$
											{item.price.toFixed(
												2
											)}
										</span>
									</p>
								</div>
							</div>
							<p className="font-semibold lg:text-[10px] mobile:max-md:text-[16px]">
								$
								{(
									item.price *
									item.quantity
								).toFixed(2)}
							</p>
						</div>
					))}
					<div className="flex justify-between items-center my-2 mobile:max-md:my-4 mobile:max-md:px-3">
						<p className="lg:text-[9px] mobile:max-md:text-[14px]">
							Order Total
						</p>
						<p className="font-bold mobile:max-md:text-xl">
							$
							{totalAmount.toFixed(2)}
						</p>
					</div>
				</div>
				<button
					onClick={handleCloseModal}
					className="bg-red-red w-full py-2 rounded-full text-white hover:bg-red-darker mt-5"
				>
					Start New Order
				</button>
			</div>
		</div>
	) : null;
};

export default ConfirmedModal;
