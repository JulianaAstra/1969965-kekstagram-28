import { bigPictureModal, pictureCancelButton } from './gallery.js';
import { isEscapeKey } from './helpers/is-escape-key.js';

const closeModal = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureCancelButton.removeEventListener('click', onEscapeButtonClick);
  document.removeEventListener('keydown', onModalKeydown);
};

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onEscapeButtonClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

export { onModalKeydown, onEscapeButtonClick, closeModal };
