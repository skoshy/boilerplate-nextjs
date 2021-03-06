import { useRef, PropsWithChildren } from 'react';
import styled from 'styled-components';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { IS_BROWSER } from 'src/constants';

/**
 * Initializes React Modal whenever it's included in a page
 */
const setUpReactModal = (() => {
  let initialized = false;

  return () => {
    if (IS_BROWSER && !initialized) {
      const nextRoot = document.getElementById('__next');
      if (nextRoot) {
        // set the root doc element to next root
        // this enforces aria-hidden on it when modal is shown
        ReactModal.setAppElement(nextRoot);
      }
      // remove default styles, as we do this ourselves
      ReactModal.defaultStyles = {};

      initialized = true;
    }
  };
})();

type ModalWithoutExtraProps = (props: PropsWithChildren<ReactModalProps>) => JSX.Element;

interface ModalExtraProps {
  originalClassName: string;
}

const _Modal = ({
  shouldCloseOnOverlayClick = true,
  originalClassName = '',
  className = '',
  portalClassName = '',
  ...props
}: PropsWithChildren<ReactModalProps & ModalExtraProps>) => {
  useRef(setUpReactModal()); // ensure react modal is set up appropriately

  return (
    <ReactModal
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      portalClassName={`${className} ${portalClassName}`}
      className={originalClassName}
      {...props}
    />
  );
}

export const Modal = styled(_Modal as ModalWithoutExtraProps).attrs(props => ({
  ...props,
  closeTimeoutMS: props.closeTimeoutMS ?? 200,
  originalClassName: props.className,
}))`
  .ReactModal__Overlay {
    transition-duration: ${props => props.closeTimeoutMS}ms;
  }

  .ReactModal__Content {
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;
