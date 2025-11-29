import Drawer from "./Drawer";

const Modal = ({ showModal, setShowModal, selectedProduct, setSelectedProduct }) => {
    if (!showModal) return null;

    return (
        <div
            className={`fixed inset-0 bg-gray-400/50 z-[9998] flex items-center justify-center`}
            onClick={() => setShowModal(false)}
        >
            <Drawer selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Modal;