import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-ui/core'


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background: rgba(77, 77, 78, 0.5);
`

const ModalContent = styled.div`
  positiion: relative;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 20px;
  padding: 40px;
  background-color: white;
`

interface IModalProps {
  show: boolean,
  children: React.ReactChild,
  toggleModal: (...args: any) => void
}

function Modal ({ show, toggleModal, children }: IModalProps) {

  useEffect(() => {
    // @ts-ignore
    document.querySelector('body').style.overflow = show ? 'hidden' : ''
  }, [show])

  const handleClose = () => {
    toggleModal()
  }

  return ReactDOM.createPortal(
    show ?
      <>
        <ModalContainer>
          <ModalContent>
            <Button onClick={handleClose}>
              Close
            </Button>
            {children}
          </ModalContent>
        </ModalContainer>
      </> :
      null,
      //@ts-ignore
    document.getElementById('modal')
  )
}

export default Modal
