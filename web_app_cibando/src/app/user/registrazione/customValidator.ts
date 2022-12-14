import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {

  static confrontaPassword(source:string, target:string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
           const sourceCtrl = control.get(source);
           const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value ? {combacia:true} : null;
    };
  }
}
