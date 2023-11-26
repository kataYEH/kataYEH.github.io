import React, { useState } from 'react';
import Modal from 'react-modal';
import "./DetailDialog.css"
const DetailDialog = () => {

  return (
    <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,.7)'
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      padding: '20px',
                      backgroundColor: '#e3edf7'
                    }
                  }}
            >
                <div>
                    <p>這是對話框內容</p>
                    <button onClick={handleCloseModal}>關閉對話框</button>
                </div>
            </Modal>
  )
}

export default DetailDialog