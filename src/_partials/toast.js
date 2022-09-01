import { toast } from 'react-toastify';
const position = {
  tright: toast.POSITION.TOP_RIGHT,
  tleft: toast.POSITION.TOP_LEFT,
  tcenter: toast.POSITION.TOP_CENTER,
  bcenter: toast.POSITION.BOTTOM_CENTER,
  bleft: toast.POSITION.BOTTOM_LEFT,
  bright: toast.POSITION.BOTTOM_RIGHT
};
const config = {
  position: position.tright,
  role: 'alert'
};
class Toast {
  static position(text, config) {
    return config.status === 'done'
      ? toast.success(text, config)
      : toast.error(text, config);
  }
  static success(text) {
    return toast.success(text, config);
  }
  static error(text) {
    return toast.error(text, config);
  }
  static warn(text) {
    return toast.warn(text, config);
  }
  static info(text) {
    return toast.info(text, config);
  }
  static default(text) {
    return toast(text);
  }
}

export default Toast;
