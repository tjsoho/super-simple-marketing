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
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 
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
