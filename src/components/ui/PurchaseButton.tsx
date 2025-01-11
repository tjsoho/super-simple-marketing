import { useState } from "react";
import { PaymentModal } from "./PaymentModal";

interface PurchaseButtonProps {
  courseId: string;
  price: number;
}

export function PurchaseButton({ courseId, price }: PurchaseButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handlePurchase}
        className="bg-dark-teal text-white px-8 py-2 rounded-full text-xl font-bold border-2 border-white 
                   transition-colors duration-200"
        type="button"
      >
        Purchase for ${price}
      </button>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        courseId={courseId}
        price={price}
      />
    </>
  );
}
