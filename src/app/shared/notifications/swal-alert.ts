import Swal from "sweetalert2";
import { finishLoading } from '../loading/loader';

export enum SWEET_TYPE_ICON {
    SUCCESS = 'assets/img/bee/bees/successfull.png',
    QUESTION = 'assets/img/bee/bees/question.png',
    ERROR = 'assets/img/bee/bees/ofline.png',
    ERRORS = 'assets/img/bee/bee_error.png',
    TRANSFER = 'assets/img/bee/bees/tickets.png',
}

export enum SWEET_TYPE_BUTTON {
    INFO = '#11CDEF',
    SUCCESS = '#F6C042',
    WARNING = '#FB6340',
    QUESTION = '#172B4D',
    ERROR = '#FF2D00',
}

export enum SWEET_TYPE_TITLE {
    INFO = 'Información',
    SUCCESS = 'Éxito',
    WARNING = 'Alerta',
    QUESTION = 'Consulta',
    ERROR = 'Error',
}

export function notification(imageUrl = SWEET_TYPE_ICON.SUCCESS, title = SWEET_TYPE_TITLE.INFO, text: string, confirmButtonColor = SWEET_TYPE_BUTTON.SUCCESS, confirmButtonText: string = 'OK') {
    finishLoading();
    Swal.fire(
        {
            imageUrl,
            imageHeight: 150,
            title,
            text,
            confirmButtonText,
            confirmButtonColor,
            showConfirmButton: true,
            allowOutsideClick: false,
        }

    )
}

export async function notificationOptions(
    title: string, html: string, width: number | string, confirmButtonText: string = '',
    cancelButtonText: string = '') {
    return await Swal.fire({
        title,
        imageUrl: 'assets/img/bee/bee-question.png',
        imageHeight: 150,
        html,
        width: `${width}px`,
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonColor: '#010101',
        confirmButtonColor: '#FFCB04',
        confirmButtonText,
        cancelButtonText

    }).then((result) => {
        if (result.value) {
            return true;
        } else if (result.dismiss.toString() === 'cancel') {
            return false;
        }
    });
}

export function notificationLogin() {
    Swal.fire({
        position: 'top-end',
        imageUrl: 'assets/img/bee/bees/successfull.png',
        imageHeight: 85,
        title: 'Ha iniciado sesión correctamente',
        showConfirmButton: false,
        timer: 850
    })
}


