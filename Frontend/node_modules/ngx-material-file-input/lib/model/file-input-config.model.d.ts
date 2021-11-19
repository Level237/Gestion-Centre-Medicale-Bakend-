import { InjectionToken } from '@angular/core';
/**
 * Optional token to provide custom configuration to the module
 */
export declare const NGX_MAT_FILE_INPUT_CONFIG: InjectionToken<FileInputConfig>;
/**
 * Provide additional configuration to dynamically customize the module injection
 */
export declare class FileInputConfig {
    /**
     * Unit used with the ByteFormatPipe, default value is *Byte*.
     * The first letter is used for the short notation.
     */
    sizeUnit: string;
}
