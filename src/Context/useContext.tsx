import { createContext, useContext, useState } from 'react'

type UseContextType = {
  headerSelectedOptions: string
  setShowScroll: any
  showSideBarButton: any
  showSidebar: boolean
  showContactModal: boolean
  showContactModalViewer: any
  closeContactModal: any
}

export const Context = createContext({} as UseContextType)

export function ContextProvider({ children }: any) {
  const [headerSelectedOptions, setHeaderSelectedOptions] = useState('ABOUT')
  const [showSidebar, setShowSideBar] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const setShowScroll = (data: string) => {
    setHeaderSelectedOptions(data)
  }
  const showSideBarButton = (data: any) => () => setShowSideBar(data)
  const showContactModalViewer = () => {
    setShowSideBar(false)
    setShowContactModal(!showContactModal)
  }
  const closeContactModal = (data: any) => setShowContactModal(data)
  return (
    <Context.Provider
      value={{
        headerSelectedOptions,
        setShowScroll,
        showSideBarButton,
        showSidebar,
        showContactModal,
        showContactModalViewer,
        closeContactModal,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useContextProvider = () => useContext(Context)
