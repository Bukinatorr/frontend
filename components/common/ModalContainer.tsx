import ReactModal from 'react-modal';
import Modal from '@components/common/Modal';
import { useState } from 'react';

const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleClick}>모달 열기</button>
      <Modal isOpen={isOpen} />
    </>
  );
};

export default ModalContainer;
