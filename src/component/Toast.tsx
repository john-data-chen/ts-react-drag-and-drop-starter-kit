import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Toast() {
  return (
    <ToastContainer
      position="top-left"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
      limit={1}
      role="alert"
      aria-live="assertive"
    />
  )
}

export default Toast
