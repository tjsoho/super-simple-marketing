import { useState } from "react";
import { PaymentModal } from "./PaymentModal";

interface PurchaseButtonProps {
  courseId: string;
  price: number;
  title?: string;
  size?: "small" | "large";
}

export function PurchaseButton({
  courseId,
  price,
  title = "Purchase for $47",
  size = "small",
}: PurchaseButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const buttonStyles =
    size === "large" ? "px-12 py-4 text-2xl" : "px-8 py-2 text-xl";

  return (
    <>
      <button
        onClick={handlePurchase}
        className={`bg-dark-teal text-white rounded-full font-bold border-2 border-white 
                   transition-colors duration-200 ${buttonStyles}`}
        type="button"
      >
        {title}
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
