import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { LoginFormContainer } from '../session/login_form_container';
import { SignupFormContainer } from '../session/signup_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'singup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
}
