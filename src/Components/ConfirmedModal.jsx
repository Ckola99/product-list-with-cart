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
		<div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 transition-colors z-[10] mobile:items-end">
			<div className="bg-white p-6 rounded-lg shadow-lg w-[20rem] mobile:w-full mobile:h-[90vh]">
				<img
					src={checkImg}
					className="w-6 h-6 mb-3 mobile:w-11 mobile:h-11"
				/>
				<h2 className="text-[1.35rem] font-bold mobile:text-[2.65rem] mobile:leading-tight">
					Order{" "}
					<span className="block">Confirmed</span>
				</h2>
				<p className="text-[10.5px] text-rose-500 mb-4 mobile:text-xl mobile:mb-5">
					We hope you enjoy food!
				</p>
				<div className="bg-rose-50 rounded px-3 py-2">
					{itemsInCart.map((item) => (
						<div
							key={item.id}
							className="flex justify-between py-2 border-b border-b-gray items-center mobile:p-3"
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
									className="h-8 w-8 rounded mr-2 mobile:h-12 mobile:w-12 mobile:mr-4 "
								/>
								<div className="text-[8px] mobile:text-[14px] truncate max-w-[150px]">
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
							<p className="font-semibold text-[10px] mobile:text-[16px]">
								$
								{(
									item.price *
									item.quantity
								).toFixed(2)}
							</p>
						</div>
					))}
					<div className="flex justify-between items-center my-2 mobile:my-4 px-3">
						<p className="text-[9px] mobile:text-[14px]">
							Order Total
						</p>
						<p className="font-bold mobile:text-xl">
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
