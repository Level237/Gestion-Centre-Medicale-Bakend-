import { InjectionToken, EventEmitter, Directive, NgZone, Renderer2, ElementRef, KeyValueDiffers, Inject, PLATFORM_ID, Optional, Input, Output, Component, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import Dropzone from 'dropzone';

const DROPZONE_CONFIG = new InjectionToken('DROPZONE_CONFIG');
const DropzoneEvents = [
    'error',
    'success',
    'sending',
    'canceled',
    'complete',
    'processing',
    'drop',
    'dragStart',
    'dragEnd',
    'dragEnter',
    'dragOver',
    'dragLeave',
    'thumbnail',
    'addedFile',
    'addedFiles',
    'removedFile',
    'uploadProgress',
    'maxFilesReached',
    'maxFilesExceeded',
    'errorMultiple',
    'successMultiple',
    'sendingMultiple',
    'canceledMultiple',
    'completeMultiple',
    'processingMultiple',
    'reset',
    'queueComplete',
    'totalUploadProgress'
];
class DropzoneConfig {
    constructor(config = {}) {
        this.assign(config);
    }
    assign(config = {}, target) {
        target = target || this;
        for (const key in config) {
            if (config[key] != null && !(Array.isArray(config[key])) &&
                typeof config[key] === 'object' && !(config[key] instanceof HTMLElement)) {
                target[key] = {};
                this.assign(config[key], target[key]);
            }
            else {
                target[key] = config[key];
            }
        }
    }
}

class DropzoneDirective {
    constructor(zone, renderer, elementRef, differs, platformId, defaults) {
        this.zone = zone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.differs = differs;
        this.platformId = platformId;
        this.defaults = defaults;
        this.configDiff = null;
        this.disabled = false;
        this.DZ_INIT = new EventEmitter();
        this.DZ_ERROR = new EventEmitter();
        this.DZ_SUCCESS = new EventEmitter();
        this.DZ_SENDING = new EventEmitter();
        this.DZ_CANCELED = new EventEmitter();
        this.DZ_COMPLETE = new EventEmitter();
        this.DZ_PROCESSING = new EventEmitter();
        this.DZ_DROP = new EventEmitter();
        this.DZ_DRAGSTART = new EventEmitter();
        this.DZ_DRAGEND = new EventEmitter();
        this.DZ_DRAGENTER = new EventEmitter();
        this.DZ_DRAGOVER = new EventEmitter();
        this.DZ_DRAGLEAVE = new EventEmitter();
        this.DZ_THUMBNAIL = new EventEmitter();
        this.DZ_ADDEDFILE = new EventEmitter();
        this.DZ_ADDEDFILES = new EventEmitter();
        this.DZ_REMOVEDFILE = new EventEmitter();
        this.DZ_UPLOADPROGRESS = new EventEmitter();
        this.DZ_MAXFILESREACHED = new EventEmitter();
        this.DZ_MAXFILESEXCEEDED = new EventEmitter();
        this.DZ_ERRORMULTIPLE = new EventEmitter();
        this.DZ_SUCCESSMULTIPLE = new EventEmitter();
        this.DZ_SENDINGMULTIPLE = new EventEmitter();
        this.DZ_CANCELEDMULTIPLE = new EventEmitter();
        this.DZ_COMPLETEMULTIPLE = new EventEmitter();
        this.DZ_PROCESSINGMULTIPLE = new EventEmitter();
        this.DZ_RESET = new EventEmitter();
        this.DZ_QUEUECOMPLETE = new EventEmitter();
        this.DZ_TOTALUPLOADPROGRESS = new EventEmitter();
        const dz = Dropzone;
        dz.autoDiscover = false;
    }
    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        const params = new DropzoneConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        this.renderer.addClass(this.elementRef.nativeElement, (params.maxFiles === 1) ? 'dz-single' : 'dz-multiple');
        this.renderer.removeClass(this.elementRef.nativeElement, (params.maxFiles === 1) ? 'dz-multiple' : 'dz-single');
        this.zone.runOutsideAngular(() => {
            this.instance = new Dropzone(this.elementRef.nativeElement, params);
        });
        if (this.disabled) {
            this.instance.disable();
        }
        if (this.DZ_INIT.observers.length) {
            this.zone.run(() => {
                this.DZ_INIT.emit(this.instance);
            });
        }
        // Add auto reset handling for events
        this.instance.on('success', () => {
            if (params.autoReset != null) {
                setTimeout(() => this.reset(), params.autoReset);
            }
        });
        this.instance.on('error', () => {
            if (params.errorReset != null) {
                setTimeout(() => this.reset(), params.errorReset);
            }
        });
        this.instance.on('canceled', () => {
            if (params.cancelReset != null) {
                setTimeout(() => this.reset(), params.cancelReset);
            }
        });
        // Add native Dropzone event handling
        DropzoneEvents.forEach((eventName) => {
            this.instance.on(eventName.toLowerCase(), (...args) => {
                args = (args.length === 1) ? args[0] : args;
                const output = `DZ_${eventName.toUpperCase()}`;
                const emitter = this[output];
                if (emitter.observers.length > 0) {
                    this.zone.run(() => {
                        emitter.emit(args);
                    });
                }
            });
        });
        if (!this.configDiff) {
            this.configDiff = this.differs.find(this.config || {}).create();
            this.configDiff.diff(this.config || {});
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance.destroy();
            });
            this.instance = null;
        }
    }
    ngDoCheck() {
        if (!this.disabled && this.configDiff) {
            const changes = this.configDiff.diff(this.config || {});
            if (changes && this.instance) {
                this.ngOnDestroy();
                this.ngOnInit();
            }
        }
    }
    ngOnChanges(changes) {
        if (this.instance && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(() => {
                        this.instance.enable();
                    });
                }
                else if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(() => {
                        this.instance.disable();
                    });
                }
            }
        }
    }
    dropzone() {
        return this.instance;
    }
    reset(cancel) {
        if (this.instance) {
            this.zone.runOutsideAngular(() => {
                this.instance.removeAllFiles(cancel);
            });
        }
    }
}
DropzoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dropzone]',
                exportAs: 'ngxDropzone'
            },] }
];
DropzoneDirective.ctorParameters = () => [
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: KeyValueDiffers },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DROPZONE_CONFIG,] }] }
];
DropzoneDirective.propDecorators = {
    disabled: [{ type: Input }],
    config: [{ type: Input, args: ['dropzone',] }],
    DZ_INIT: [{ type: Output, args: ['init',] }],
    DZ_ERROR: [{ type: Output, args: ['error',] }],
    DZ_SUCCESS: [{ type: Output, args: ['success',] }],
    DZ_SENDING: [{ type: Output, args: ['sending',] }],
    DZ_CANCELED: [{ type: Output, args: ['canceled',] }],
    DZ_COMPLETE: [{ type: Output, args: ['complete',] }],
    DZ_PROCESSING: [{ type: Output, args: ['processing',] }],
    DZ_DROP: [{ type: Output, args: ['drop',] }],
    DZ_DRAGSTART: [{ type: Output, args: ['dragStart',] }],
    DZ_DRAGEND: [{ type: Output, args: ['dragEnd',] }],
    DZ_DRAGENTER: [{ type: Output, args: ['dragEnter',] }],
    DZ_DRAGOVER: [{ type: Output, args: ['dragOver',] }],
    DZ_DRAGLEAVE: [{ type: Output, args: ['dragLeave',] }],
    DZ_THUMBNAIL: [{ type: Output, args: ['thumbnail',] }],
    DZ_ADDEDFILE: [{ type: Output, args: ['addedFile',] }],
    DZ_ADDEDFILES: [{ type: Output, args: ['addedFiles',] }],
    DZ_REMOVEDFILE: [{ type: Output, args: ['removedFile',] }],
    DZ_UPLOADPROGRESS: [{ type: Output, args: ['uploadProgress',] }],
    DZ_MAXFILESREACHED: [{ type: Output, args: ['maxFilesReached',] }],
    DZ_MAXFILESEXCEEDED: [{ type: Output, args: ['maxFilesExceeded',] }],
    DZ_ERRORMULTIPLE: [{ type: Output, args: ['errorMultiple',] }],
    DZ_SUCCESSMULTIPLE: [{ type: Output, args: ['successMultiple',] }],
    DZ_SENDINGMULTIPLE: [{ type: Output, args: ['sendingMultiple',] }],
    DZ_CANCELEDMULTIPLE: [{ type: Output, args: ['canceledMultiple',] }],
    DZ_COMPLETEMULTIPLE: [{ type: Output, args: ['completeMultiple',] }],
    DZ_PROCESSINGMULTIPLE: [{ type: Output, args: ['processingMultiple',] }],
    DZ_RESET: [{ type: Output, args: ['reset',] }],
    DZ_QUEUECOMPLETE: [{ type: Output, args: ['queueComplete',] }],
    DZ_TOTALUPLOADPROGRESS: [{ type: Output, args: ['totalUploadProgress',] }]
};

class DropzoneComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.disabled = false;
        this.message = 'Click or drag files to upload';
        this.placeholder = '';
        this.useDropzoneClass = true;
        this.DZ_INIT = new EventEmitter();
        this.DZ_ERROR = new EventEmitter();
        this.DZ_SUCCESS = new EventEmitter();
        this.DZ_SENDING = new EventEmitter();
        this.DZ_CANCELED = new EventEmitter();
        this.DZ_COMPLETE = new EventEmitter();
        this.DZ_PROCESSING = new EventEmitter();
        this.DZ_DROP = new EventEmitter();
        this.DZ_DRAGSTART = new EventEmitter();
        this.DZ_DRAGEND = new EventEmitter();
        this.DZ_DRAGENTER = new EventEmitter();
        this.DZ_DRAGOVER = new EventEmitter();
        this.DZ_DRAGLEAVE = new EventEmitter();
        this.DZ_THUMBNAIL = new EventEmitter();
        this.DZ_ADDEDFILE = new EventEmitter();
        this.DZ_ADDEDFILES = new EventEmitter();
        this.DZ_REMOVEDFILE = new EventEmitter();
        this.DZ_UPLOADPROGRESS = new EventEmitter();
        this.DZ_MAXFILESREACHED = new EventEmitter();
        this.DZ_MAXFILESEXCEEDED = new EventEmitter();
        this.DZ_ERRORMULTIPLE = new EventEmitter();
        this.DZ_SUCCESSMULTIPLE = new EventEmitter();
        this.DZ_SENDINGMULTIPLE = new EventEmitter();
        this.DZ_CANCELEDMULTIPLE = new EventEmitter();
        this.DZ_COMPLETEMULTIPLE = new EventEmitter();
        this.DZ_PROCESSINGMULTIPLE = new EventEmitter();
        this.DZ_RESET = new EventEmitter();
        this.DZ_QUEUECOMPLETE = new EventEmitter();
        this.DZ_TOTALUPLOADPROGRESS = new EventEmitter();
    }
    ngOnInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        window.setTimeout(() => {
            DropzoneEvents.forEach((eventName) => {
                if (this.directiveRef) {
                    const output = `DZ_${eventName.toUpperCase()}`;
                    const directiveOutput = output;
                    const componentOutput = output;
                    this.directiveRef[directiveOutput] = this[componentOutput];
                }
            });
        }, 0);
    }
    getPlaceholder() {
        return 'url(' + encodeURI(this.placeholder) + ')';
    }
}
DropzoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropzone',
                exportAs: 'ngxDropzone',
                template: "<div class=\"dz-wrapper\" [class.dropzone]=\"useDropzoneClass\" [dropzone]=\"config\" [disabled]=\"disabled\" (init)=\"DZ_INIT.emit($event)\">\n  <div class=\"dz-message\" [class.disabled]=\"disabled\" [class.dz-placeholder]=\"placeholder\">\n    <div class=\"dz-text\" [innerHTML]=\"config?.dictDefaultMessage || message\"></div>\n\n    <div *ngIf=\"placeholder\" class=\"dz-image\" [style.background-image]=\"getPlaceholder()\"></div>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["dropzone{display:block;height:auto;width:100%}dropzone[fxflex]{display:flex;flex-direction:inherit;min-height:0;min-width:0}dropzone[fxflex]>.dropzone.dz-wrapper{-webkit-box-flex:1;flex:1 1 auto;min-height:0;min-width:0}dropzone[fxlayout]{-webkit-box-align:inherit;-webkit-box-pack:inherit;align-content:inherit;align-items:inherit;justify-content:inherit}dropzone[fxlayout]>.dropzone.dz-wrapper.dz-single{-webkit-box-align:center;-webkit-box-pack:center;align-content:center;align-items:center;display:flex;flex-direction:column;justify-content:center}dropzone[fxlayout]>.dropzone.dz-wrapper.dz-multiple{-webkit-box-align:flex-start;-webkit-box-pack:flex-start;align-content:flex-start;align-items:flex-start;display:flex;flex-flow:row wrap;justify-content:space-between}dropzone>.dropzone.dz-wrapper{background:transparent;border:none;color:#666;max-height:100%;min-height:0;overflow:auto;padding:0;position:relative;width:100%}dropzone>.dropzone.dz-wrapper .dz-message{background-color:#eee;border:2px dashed #aaa;display:inline-block;margin:8px;max-height:100%;max-width:calc(100% - 16px);min-height:40px;min-width:calc(100% - 16px);overflow:auto;position:relative;width:calc(100% - 16px)}dropzone>.dropzone.dz-wrapper .dz-message .dz-text{padding:8px 16px;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:100%}dropzone>.dropzone.dz-wrapper .dz-message .dz-image{background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;width:100%}dropzone>.dropzone.dz-wrapper .dz-message.disabled{cursor:not-allowed}dropzone>.dropzone.dz-wrapper .dz-message.disabled .dz-text{opacity:.5}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder{border-color:rgba(#aaa,0)}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder .dz-text{background-color:rgba(#fff,.5);font-weight:700;left:10%;opacity:0;position:absolute;right:10%;top:0;transform:translateY(-50%);transition:filter .25s ease-in-out,opacity .25s ease-in-out,border-color .25s ease-in-out;z-index:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled){border-color:#aaa}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-text{opacity:1}dropzone>.dropzone.dz-wrapper .dz-message.dz-placeholder:hover:not(.disabled) .dz-image{filter:blur(8px)}dropzone>.dropzone.dz-wrapper .dz-preview{margin:8px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-details{padding:24px}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress{border:1px solid #aaa;border-radius:4px;margin-left:-40%;width:80%}dropzone>.dropzone.dz-wrapper .dz-preview .dz-progress .dz-upload{background-color:#666}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;width:100%}dropzone>.dropzone.dz-wrapper .dz-preview .dz-filename span:hover{overflow:visible;white-space:normal;word-wrap:break-word}dropzone>.dropzone.dz-wrapper.dz-single .dz-message{height:100%;width:100%}dropzone>.dropzone.dz-wrapper.dz-single.dz-started .dz-message{display:none}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview{height:100%;width:calc(100% - 16px)}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image{border-radius:0;height:100%;width:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-preview .dz-image img{display:block;height:auto;margin:0;width:100%}dropzone>.dropzone.dz-wrapper.dz-single .dz-error-message{left:50%;top:50%;transform:translateX(-50%) translateY(100%)}dropzone>.dropzone.dz-wrapper.dz-multiple.dz-started .dz-message{display:inline-block}", "@-webkit-keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;transform:translateY(40px)}30%,70%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;transform:translateY(40px)}30%{opacity:1;transform:translateY(0)}}@-webkit-keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.1)}20%{transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{background:#fff;border:2px solid rgba(0,0,0,.3);min-height:150px;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{margin:2em 0;text-align:center}.dropzone .dz-message .dz-button{background:none;border:none;color:inherit;cursor:pointer;font:inherit;outline:inherit;padding:0}.dropzone .dz-preview{display:inline-block;margin:16px;min-height:100px;position:relative;vertical-align:top}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{background:#999;background:linear-gradient(180deg,#eee,#ddd);border-radius:20px}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{border:none;cursor:pointer;display:block;font-size:14px;text-align:center}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{color:rgba(0,0,0,.9);font-size:13px;left:0;line-height:150%;max-width:100%;min-width:100%;opacity:0;padding:2em 1em;position:absolute;text-align:center;top:0;z-index:20}.dropzone .dz-preview .dz-details .dz-size{font-size:16px;margin-bottom:1em}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{background-color:hsla(0,0%,100%,.8);border:1px solid hsla(0,0%,78.4%,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:hsla(0,0%,100%,.4);border-radius:3px;padding:0 .4em}.dropzone .dz-preview:hover .dz-image img{filter:blur(8px);transform:scale(1.05)}.dropzone .dz-preview .dz-image{border-radius:20px;display:block;height:120px;overflow:hidden;position:relative;width:120px;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1);opacity:1}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{display:block;left:50%;margin-left:-27px;margin-top:-27px;opacity:0;pointer-events:none;position:absolute;top:50%;z-index:500}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;height:54px;width:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{-webkit-transform:scale(1);background:hsla(0,0%,100%,.9);border-radius:8px;height:16px;left:50%;margin-left:-40px;margin-top:-8px;opacity:1;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:80px;z-index:1000}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(180deg,#666,#444);bottom:0;left:0;position:absolute;top:0;transition:width .3s ease-in-out;width:0}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{background:#be2626;background:linear-gradient(180deg,#be2626,#a92222);border-radius:8px;color:#fff;display:block;display:none;font-size:13px;left:-10px;opacity:0;padding:.5em 1.2em;pointer-events:none;position:absolute;top:130px;transition:opacity .3s ease;width:140px;z-index:1000}.dropzone .dz-preview .dz-error-message:after{border-bottom:6px solid #be2626;border-left:6px solid transparent;border-right:6px solid transparent;content:\"\";height:0;left:64px;position:absolute;top:-6px;width:0}"]
            },] }
];
DropzoneComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
DropzoneComponent.propDecorators = {
    disabled: [{ type: Input }],
    config: [{ type: Input }],
    message: [{ type: Input }],
    placeholder: [{ type: Input }],
    useDropzoneClass: [{ type: Input }],
    DZ_INIT: [{ type: Output, args: ['init',] }],
    DZ_ERROR: [{ type: Output, args: ['error',] }],
    DZ_SUCCESS: [{ type: Output, args: ['success',] }],
    DZ_SENDING: [{ type: Output, args: ['sending',] }],
    DZ_CANCELED: [{ type: Output, args: ['canceled',] }],
    DZ_COMPLETE: [{ type: Output, args: ['complete',] }],
    DZ_PROCESSING: [{ type: Output, args: ['processing',] }],
    DZ_DROP: [{ type: Output, args: ['drop',] }],
    DZ_DRAGSTART: [{ type: Output, args: ['dragStart',] }],
    DZ_DRAGEND: [{ type: Output, args: ['dragEnd',] }],
    DZ_DRAGENTER: [{ type: Output, args: ['dragEnter',] }],
    DZ_DRAGOVER: [{ type: Output, args: ['dragOver',] }],
    DZ_DRAGLEAVE: [{ type: Output, args: ['dragLeave',] }],
    DZ_THUMBNAIL: [{ type: Output, args: ['thumbnail',] }],
    DZ_ADDEDFILE: [{ type: Output, args: ['addedFile',] }],
    DZ_ADDEDFILES: [{ type: Output, args: ['addedFiles',] }],
    DZ_REMOVEDFILE: [{ type: Output, args: ['removedFile',] }],
    DZ_UPLOADPROGRESS: [{ type: Output, args: ['uploadProgress',] }],
    DZ_MAXFILESREACHED: [{ type: Output, args: ['maxFilesReached',] }],
    DZ_MAXFILESEXCEEDED: [{ type: Output, args: ['maxFilesExceeded',] }],
    DZ_ERRORMULTIPLE: [{ type: Output, args: ['errorMultiple',] }],
    DZ_SUCCESSMULTIPLE: [{ type: Output, args: ['successMultiple',] }],
    DZ_SENDINGMULTIPLE: [{ type: Output, args: ['sendingMultiple',] }],
    DZ_CANCELEDMULTIPLE: [{ type: Output, args: ['canceledMultiple',] }],
    DZ_COMPLETEMULTIPLE: [{ type: Output, args: ['completeMultiple',] }],
    DZ_PROCESSINGMULTIPLE: [{ type: Output, args: ['processingMultiple',] }],
    DZ_RESET: [{ type: Output, args: ['reset',] }],
    DZ_QUEUECOMPLETE: [{ type: Output, args: ['queueComplete',] }],
    DZ_TOTALUPLOADPROGRESS: [{ type: Output, args: ['totalUploadProgress',] }],
    directiveRef: [{ type: ViewChild, args: [DropzoneDirective, { static: true },] }]
};

class DropzoneModule {
}
DropzoneModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [DropzoneComponent, DropzoneDirective],
                exports: [CommonModule, DropzoneComponent, DropzoneDirective]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DROPZONE_CONFIG, DropzoneComponent, DropzoneConfig, DropzoneDirective, DropzoneModule };
//# sourceMappingURL=ngx-dropzone-wrapper.js.map
