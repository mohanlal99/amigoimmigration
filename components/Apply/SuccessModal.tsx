import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  message: string;
  error: boolean; // New prop to determine success or error state
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  username,
  message,
  error,
}) => {
  return (
    <Modal
      className="p-5"
      closeButton={false} // Disable close button to avoid premature closure
      isOpen={isOpen}
      placement="center"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader>
          <h2
            className={`text-xl font-bold text-center ${error ? "text-red-600" : "text-green-600"}`}
          >
            {error ? "Oops, Something Went Wrong!" : `Thank You, ${username}!`}
          </h2>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col items-center space-y-4">
            {/* Success or Error Icon */}
            {error ? (
              <XCircle className="text-red-500" size={64} />
            ) : (
              <CheckCircle className="text-green-500" size={64} />
            )}

            {/* Message */}
            <p className="text-center">{message}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          {error ? (
            <p className="text-sm text-center w-full">Please try again.</p>
          ) : (
            <p className="text-sm text-center w-full">
              Redirecting to home page...
            </p>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
