import { AbstractControl, FormControl } from "@angular/forms";

export function noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}


// ! VALIDAR CON INPUT KEYPRESS

export function validarIdentificacion(identification) {
    let valido = false;
    let COEFICIENTES6 = [3, 2, 7, 6, 5, 4, 3, 2];
    let COEFICIENTES9 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let rucPub = [8];
    let rucPri = [9];
    let multi = 0;
    let residuo = 0;
    let novDig = 0;
    let decDig = 0;

    if (identification.length == 13) {
        let prov = parseInt(identification.substring(0, 2));
        let tercerDigito = parseInt(identification.substring(2, 3));
        let tresUltimos = (identification.substring(10, 13));
        let cuatroUlt = identification.substring(9, 13);

        if (prov >= 1 && prov <= 24) {
            if (tercerDigito < 6) { //Personas Naturales
                let ced = identification.substring(0, 10);

                if (validarCedula(ced) == true && tresUltimos == "001") {
                    valido = true;
                } //Fin if(cedula(ced) == true)
            } else if (tercerDigito == 6 && cuatroUlt == "0001") { //Empresas Publicas
                novDig = parseFloat(identification.substring(8, 9));

                for (let i = 0; i < 8; i++) {
                    rucPub[i] = parseInt(identification.substring(i, i + 1));
                    multi = multi + (rucPub[i] * COEFICIENTES6[i]);
                } //Fin for

                residuo = multi % 11;

                if (residuo == 0 && decDig == 0) {
                    valido = true;
                } else {
                    let res = 11 - residuo;

                    if (res == novDig) {
                        valido = true;
                    } else {
                        valido = false;
                    } //Fin if(res == novDig)
                } //Fin if if(residuo == 0 && decDig == 0)
            } else if (tercerDigito == 9 && tresUltimos == "001") { //Empresas Privadas
                decDig = parseFloat(identification.substring(9, 10));

                for (let i = 0; i < 9; i++) {
                    rucPri[i] = parseInt(identification.substring(i, i + 1));
                    multi = multi + (rucPri[i] * COEFICIENTES9[i]);
                } //Fin for

                residuo = multi % 11;

                if (residuo == 0 && decDig == 0) {
                    valido = true;
                } else {
                    let res = 11 - residuo;

                    if (res == decDig) {
                        valido = true;
                    } else {
                        valido = false;
                    } //Fin if(res == novDig)
                } //Fin if(residuo == 0 && decDig == 0)
            } else {
                valido = false;
            } //Fin if(tercerDigito == 6){
        } else {
            valido = false;
        } //Fin if(prov>=1 && prov<=24)
    } else if (identification.length == 10) {
        valido = validarCedula(identification);
    } else {
        valido = false;
    } //Fin if(ruc.length()==13)


    return valido;
}

export function validarCedula(cedula) {
    let ci = cedula.toString().split('');

    if (ci.length > 10 || ci.length < 10) {
        return false;
    }

    let digitoRegion = Number(ci[0] + ci[1]);
    if (digitoRegion < 1 || digitoRegion > 24) {
        return false;
    }

    let tercerDigito = Number(ci[2]);
    if (tercerDigito < 0 || tercerDigito > 6) {
        return false;
    }

    let suma = 0;
    let val = 0;
    for (let i = 0; i < 9; i++) {
        if (i & 1) {
            val = ci[i] * 1;
            if (val >= 10) {
                val = val - 9;
            }
        } else {
            val = ci[i] * 2;
            if (val >= 10) {
                val = val - 9;
            }
        }
        suma += val;
    }

    suma = suma % 10 ? 10 - suma % 10 : 0;

    if (suma === Number(ci[ci.length - 1])) {
        return true;
    } else {
        return false;
    }
}


// ! VALIDAR EN FORMULARIO

export function ciValidate(control: AbstractControl) {
    if (control.value?.length > 10 || control.value?.length < 10) {
        return { error: 'Identificación no válida' };
    } else {
        const ci = control.value?.split('');
        const digitoRegion = Number(ci[0] + ci[1]);
        if (digitoRegion < 1 || digitoRegion > 24) {
            return { error: 'Cédula no válida' };
        }
        const tercerDigito = Number(ci[2]);
        if (tercerDigito < 0 || tercerDigito > 6) {
            return { error: 'Cédula no válida' };
        }
        let suma = 0;
        let val = 0;
        for (let i = 0; i < 9; i++) {
            if (i & 1) {
                val = ci[i] * 1;
                if (val >= 10) {
                    val = val - 9;
                }
            } else {
                val = ci[i] * 2;
                if (val >= 10) {
                    val = val - 9;
                }
            }
            suma += val;
        }
        suma = suma % 10 ? 10 - suma % 10 : 0;
        if (suma === Number(ci[ci?.length - 1])) {
            return null;
        } else {
            return { error: 'Cédula no válida' };
        }
    }
}

export function validateIdentification(id: AbstractControl) {
    let valido: any = { error: 'RUC no válido' };;
    let COEFICIENTES6 = [3, 2, 7, 6, 5, 4, 3, 2];
    let COEFICIENTES9 = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let rucPub = [8];
    let rucPri = [9];
    let multi = 0;
    let residuo = 0;
    let novDig = 0;
    let decDig = 0;

    if (id.value?.length == 13) {
        let prov = parseInt(id.value?.substring(0, 2));
        let tercerDigito = parseInt(id.value?.substring(2, 3));
        let tresUltimos = (id.value?.substring(10, 13));
        let cuatroUlt = id.value?.substring(9, 13);

        if (prov >= 1 && prov <= 24) {
            if (tercerDigito < 6) { //Personas Naturales
                let ced = id.value?.substring(0, 10);

                if (validarCedula(ced) == true && tresUltimos == "001") {
                    valido = null;
                } //Fin if(cedula(ced) == true)
            } else if (tercerDigito == 6 && cuatroUlt == "0001") { //Empresas Publicas
                novDig = parseFloat(id.value?.substring(8, 9));

                for (let i = 0; i < 8; i++) {
                    rucPub[i] = parseInt(id.value?.substring(i, i + 1));
                    multi = multi + (rucPub[i] * COEFICIENTES6[i]);
                } //Fin for

                residuo = multi % 11;

                if (residuo == 0 && decDig == 0) {
                    valido = null;
                } else {
                    let res = 11 - residuo;

                    if (res == novDig) {
                        // rucCorrecto = true;
                        valido = null;
                    } else {
                        // rucCorrecto = false;
                        valido = { error: 'RUC no válido' };
                    } //Fin if(res == novDig)
                } //Fin if if(residuo == 0 && decDig == 0)
            } else if (tercerDigito == 9 && tresUltimos == "001") { //Empresas Privadas
                decDig = parseFloat(id.value?.substring(9, 10));

                for (let i = 0; i < 9; i++) {
                    rucPri[i] = parseInt(id.value?.substring(i, i + 1));
                    multi = multi + (rucPri[i] * COEFICIENTES9[i]);
                } //Fin for

                residuo = multi % 11;

                if (residuo == 0 && decDig == 0) {
                    valido = null;
                } else {
                    let res = 11 - residuo;

                    if (res == decDig) {
                        // rucCorrecto = true;
                        valido = null;
                    } else {
                        // rucCorrecto = false;
                        valido = { error: 'RUC no válido' };
                    } //Fin if(res == novDig)
                } //Fin if(residuo == 0 && decDig == 0)
            } else {
                valido = { error: 'RUC no válido' };
            } //Fin if(tercerDigito == 6){
        } else {
            valido = { error: 'RUC no válido' };
        } //Fin if(prov>=1 && prov<=24)
    } else if (id.value?.length == 10) {
        valido = ciValidate(id);
    } else {
        valido = { error: 'Identificación no válida' };
    }


    return valido;
}