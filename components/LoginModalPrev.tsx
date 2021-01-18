import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import FirebaseAuth from "./FirebaseAuth";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const LoginModal = ({ onClose, isOpen }: Props) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please login to continue</ModalHeader>
          <ModalBody>
            <FirebaseAuth />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
