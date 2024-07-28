import { useState } from "react";
import Item from "../components/Item";
import Cart from "../components/Cart";
import ConfirmedModal from "../components/ConfirmedModal";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../features/ModalFeature/ModalSlice';
import { selectState } from "../features/ModalFeature/ModalSlice";
import { clearCart } from "../features/AddToCartFeature/AddToCartSlice"

function App() {
	const isModalOpen = useSelector(selectState);
	const dispatch = useDispatch();

	const handleOpenModal = () => {
		dispatch(openModal());
	};

	const handleCloseModal = () => {
		dispatch(closeModal());
		dispatch(clearCart())
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-20 xl:gap-7 relative mobile:max-md:m-5 md:max-xl:m-10 md:max-xl:gap-10">
			<Item />
			<Cart openModal={handleOpenModal}/>
			<ConfirmedModal isOpen={isModalOpen} handleCloseModal={handleCloseModal}/>
		</div>
	);
}

export default App;
