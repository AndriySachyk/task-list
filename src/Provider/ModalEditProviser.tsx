import React, { createContext, useState, useContext, ReactNode } from 'react';

type ModalEditContextType = {
    idTask: string;
    handleCurrentIdTask: (id: string) => void;
    modalEdit:boolean ; 
    handleOpenModal: ()=>void; 
    handleCloseModal: ()=>void;
};

const ModalEditContext = createContext<ModalEditContextType | undefined>(undefined);

export const useModalEdit = () => {
  const context = useContext(ModalEditContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


type ModalEditProviderProps = {
    children: ReactNode;
  };

export const ModalEditProvider:React.FC<ModalEditProviderProps>  = ({ children }) => {
  const [idTask, setIdTask] = useState<string>('');
  const [modalEdit, setModalEdit] = useState<boolean>(false)
  
  const handleCurrentIdTask = (id: string) => {
    setIdTask(id);
  };

  const handleCloseModal = ()=>{
    setModalEdit(false)
  }

  const handleOpenModal = ()=>{
    setModalEdit(true)
  }



  const value = { idTask, handleCurrentIdTask, modalEdit , handleOpenModal, handleCloseModal };

  return <ModalEditContext.Provider value={value}>{children}</ModalEditContext.Provider>;
};
