import { ElementRef, AfterViewInit, Renderer2, TemplateRef } from '@angular/core';
import { PlacementTypes } from './position';
import { StyleTypes } from './style.type';
export declare class TooltipContentComponent implements AfterViewInit {
    element: ElementRef;
    private renderer;
    private platformId;
    host: ElementRef;
    showCaret: boolean;
    type: StyleTypes;
    placement: PlacementTypes;
    alignment: PlacementTypes;
    spacing: number;
    cssClass: string;
    title: string;
    template: TemplateRef<any>;
    context: any;
    caretElm: ElementRef;
    get cssClasses(): string;
    constructor(element: ElementRef, renderer: Renderer2, platformId: any);
    ngAfterViewInit(): void;
    position(): void;
    positionContent(nativeElm: HTMLElement, hostDim: DOMRect, elmDim: DOMRect): void;
    positionCaret(hostDim: DOMRect, elmDim: DOMRect): void;
    checkFlip(hostDim: DOMRect, elmDim: DOMRect): void;
    onWindowResize(): void;
}
