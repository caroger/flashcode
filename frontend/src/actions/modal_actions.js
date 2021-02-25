export const OPEN_MODAL = 'OPEN MODEL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
