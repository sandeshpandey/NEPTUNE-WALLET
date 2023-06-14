import classNames from "classnames"

interface ModalProps {
    title?: string
    children: React.ReactNode
    isOpen: boolean
    onClose : () => void
    isConnected?: boolean
    onConnect: () => void
    onDisconnect: () => void
}
const Modal: React.FC<ModalProps> = ({title, children, isOpen, onClose, isConnected, onConnect, onDisconnect}) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if(isConnected){
        onDisconnect()
        onClose()
    }else{
        onConnect()
    }
  }
  return (
    <div className={classNames("relative z-10", {'hidden': !isOpen})} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className={classNames("fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity")}></div>
        <div onClick={onClose} className={classNames("fixed inset-0 z-10 overflow-y-auto")}>
            <div className={classNames("flex min-h-full items-center justify-center p-4 text-center")}>
                <div onClick={(e) => e.stopPropagation()} className={classNames("relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-4xl")}>
                    <div className={classNames("bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4")}>
                        <div className={classNames("sm:flex sm:items-start")}>
                            <div className={classNames("mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left")}>
                                {title && <h3 className={classNames("text-base font-semibold leading-6 text-gray-900")} id="modal-title">{title}</h3>}
                                <div className={classNames("mt-2")}>
                                    {children}   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames("bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6")}>
                        <button onClick={handleButtonClick} type="button" className={classNames("inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto", {
                            'bg-red-600 hover:bg-red-500': isConnected
                        })}>{isConnected ? 'Disconnect' : 'Connect'}</button>
                        <button type="button" onClick={onClose} className={classNames("mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto")}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default Modal