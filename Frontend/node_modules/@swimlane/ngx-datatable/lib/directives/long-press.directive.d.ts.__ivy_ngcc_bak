import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class LongPressDirective implements OnDestroy {
    pressEnabled: boolean;
    pressModel: any;
    duration: number;
    longPressStart: EventEmitter<any>;
    longPressing: EventEmitter<any>;
    longPressEnd: EventEmitter<any>;
    pressing: boolean;
    isLongPressing: boolean;
    timeout: any;
    mouseX: number;
    mouseY: number;
    subscription: Subscription;
    get press(): boolean;
    get isLongPress(): boolean;
    onMouseDown(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    loop(event: MouseEvent): void;
    endPress(): void;
    onMouseup(): void;
    ngOnDestroy(): void;
    private _destroySubscription;
}
