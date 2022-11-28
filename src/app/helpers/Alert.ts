import Swal from "sweetalert2"

class Alert {

  constructor() { }

  static error(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    })
  }

  static success(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    })
  }

}

export default Alert;