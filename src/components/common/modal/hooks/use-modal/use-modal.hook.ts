import { useCallback } from 'react';

type TUseModalProps = {
  onClose: () => void;
};

const useModal = ({ onClose }: TUseModalProps) => {
  const handleOutsideClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleDisableContentContainerClick = useCallback((ev: Event) => {
    ev.stopPropagation();
  }, []);

  return {
    handleOutsideClick,
    handleDisableContentContainerClick,
  };
};

export { useModal };
