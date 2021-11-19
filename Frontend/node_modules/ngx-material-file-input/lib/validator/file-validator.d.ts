import { ValidatorFn } from '@angular/forms';
export declare namespace FileValidator {
    /**
     * Function to control content of files
     *
     * @param bytes max number of bytes allowed
     *
     * @returns
     */
    function maxContentSize(bytes: number): ValidatorFn;
}
