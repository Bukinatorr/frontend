import ReactModal from 'react-modal';

interface Props {
  isOpen: boolean;
  ariaLabel?: string;
};

ReactModal.setAppElement('body');

const Modal = ({ isOpen, ariaLabel = "알림" }: Props) => {
  return (
    <ReactModal 
      isOpen={isOpen}
      contentLabel={ariaLabel}
    >
      <div>Modal 입니다.</div>
    </ReactModal>
  );
};

export default Modal;