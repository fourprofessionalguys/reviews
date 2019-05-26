import React from 'react';
import styled from 'styled-components';
import ReviewsModalBody from './reviewsModalBody.jsx';

const ModalInner = styled.div`
  display: ${props => props.isModalShowing ? "table-cell" : "none"};
  vertical-align: middle;
  background: white;
  position: absolute;
  z-index: 5;
  width: 568px;
  max-height: 95vh;
  padding: 10px 24px 0px 24px;
  margin: 4rem 0 0 27rem;
  overflow: auto;
  box-shadow: 0 0.01rem 0.8rem rgba(118,118,118,0.3);
`;

const ModalHeader = styled.div`
  font-size: 14px;
  margin: 1rem 0 1rem 0;
`;

const ModalBody = styled.div`
  width: 504;
  padding-bottom: 3rem;
  margin: auto;
`;

const CloseButton = styled.button`
  background: white;
  border: 1px solid white;
  padding: 20px;
  margin: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const SvgBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: ${props => props.isModalSelected ? "0 .1rem .5rem rgba(118,118,118,0)" : "0 .1rem .5rem rgba(118,118,118,0.5)"};
`;

const SvgButton = styled.svg`
  margin: 7px;
  width: 16px;
  height: 16px;
  display: block;
  fill: rgb(118, 118, 118);
`;




const ReviewModal = ({ isModalShowing, isModalSelected, selectModal, reviews, formatDate, toggleModal }) => {

  return (
    <ModalInner isModalShowing={isModalShowing} onClick={() => selectModal()}>
      <ModalHeader>
        <CloseButton id="closeButton" onClick={() => toggleModal()}>
          <SvgBox isModalSelected={isModalSelected}>
            <SvgButton viewBox=" 0 0 24 24">
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22">
              </path>
            </SvgButton>
          </SvgBox>
        </CloseButton>
      </ModalHeader>
      <ModalBody>
        <ReviewsModalBody reviews={reviews} formatDate={formatDate} />
      </ModalBody>
    </ModalInner>
  );
};

export default ReviewModal;