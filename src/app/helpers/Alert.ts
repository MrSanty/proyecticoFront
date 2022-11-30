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

  static delete() {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    })
  }

}

export default Alert;