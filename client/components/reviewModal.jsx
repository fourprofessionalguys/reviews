import React from 'react';
import styled from 'styled-components';
import ReviewsModalBody from './reviewsModalBody.jsx';

const ModalInner = styled.div`
  display: ${props => props.showModal ? "table-cell" : "none"};
  vertical-align: middle;
  background: white;
  position: absolute;
  z-index: 5;
  width: 568px;
  max-height: 85vh;
    padding: 10px 32px 0px 32px;
  margin: 0 25% 5% 25%;
  overflow: auto;
  box-shadow: 0 0.01rem 0.8rem rgba(0,0,0,0.3);
`;

const ModalHeader = styled.div`
  font-size: 14px;
  margin-bottom: 1rem;
`;

const ModalBody = styled.div`
  width: 504;
  padding-bottom: 3rem;
  margin: auto;
`;

const SvgButton = styled.svg`
  width: 16px;
  height: 16px;
  background: white;
`;

const CloseButton = styled.button`
  background: white;
  border: 1px solid white;
  padding: 20px;
  margin: -20px;
`;


const ReviewModal = ({ showModal, reviews, formatDate, handleShow }) => {

  return (
    <ModalInner showModal={showModal}>
      <ModalHeader>
        <CloseButton onClick={() => handleShow()}>
          <SvgButton viewBox=" 0 0 24 24">
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22">
            </path>
          </SvgButton>
        </CloseButton>
      </ModalHeader>
      <ModalBody>
        <ReviewsModalBody reviews={reviews} formatDate={formatDate} />
      </ModalBody>
    </ModalInner>
  );
};

export default ReviewModal;