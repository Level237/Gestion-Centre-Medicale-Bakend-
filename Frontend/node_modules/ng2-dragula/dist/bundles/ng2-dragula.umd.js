(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('dragula'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng2-dragula', ['exports', 'dragula', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['ng2-dragula'] = {}),global.dragula,global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,dragulaExpt,core,rxjs,operators) { 'use strict';

    var dragulaExpt__default = 'default' in dragulaExpt ? dragulaExpt['default'] : dragulaExpt;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Group = (function () {
        function Group(name, drake, options) {
            this.name = name;
            this.drake = drake;
            this.options = options;
            this.initEvents = false;
        }
        return Group;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var EventTypes = {
        Cancel: "cancel",
        Cloned: "cloned",
        Drag: "drag",
        DragEnd: "dragend",
        Drop: "drop",
        Out: "out",
        Over: "over",
        Remove: "remove",
        Shadow: "shadow",
        DropModel: "dropModel",
        RemoveModel: "removeModel",
    };
    /** @type {?} */
    var AllEvents = Object.keys(EventTypes).map(function (k) { return (EventTypes[(k)]); });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var dragula = dragulaExpt__default || dragulaExpt;
    var DrakeFactory = (function () {
        function DrakeFactory(build) {
            if (build === void 0) {
                build = dragula;
            }
            this.build = build;
        }
        return DrakeFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var filterEvent = function (eventType, filterDragType, projector) {
        return function (input) {
            return input.pipe(operators.filter(function (_a) {
                var event = _a.event, name = _a.name;
                return event === eventType
                    && (filterDragType === undefined || name === filterDragType);
            }), operators.map(function (_a) {
                var name = _a.name, args = _a.args;
                return projector(name, args);
            }));
        };
    };
    /** @type {?} */
    var elContainerSourceProjector = function (name, _a) {
        var _b = __read(_a, 3), el = _b[0], container = _b[1], source = _b[2];
        return ({ name: name, el: el, container: container, source: source });
    };
    var DragulaService = (function () {
        function DragulaService(drakeFactory) {
            if (drakeFactory === void 0) {
                drakeFactory = null;
            }
            var _this = this;
            this.drakeFactory = drakeFactory;
            this.dispatch$ = new rxjs.Subject();
            this.drag = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, function (name, _a) {
                    var _b = __read(_a, 2), el = _b[0], source = _b[1];
                    return ({ name: name, el: el, source: source });
                }));
            };
            this.dragend = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, function (name, _a) {
                    var _b = __read(_a, 1), el = _b[0];
                    return ({ name: name, el: el });
                }));
            };
            this.drop = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, function (name, _a) {
                    var _b = __read(_a, 4), el = _b[0], target = _b[1], source = _b[2], sibling = _b[3];
                    return { name: name, el: el, target: target, source: source, sibling: sibling };
                }));
            };
            this.elContainerSource = function (eventType) {
                return function (groupName) {
                    return _this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
                };
            };
            this.cancel = this.elContainerSource(EventTypes.Cancel);
            this.remove = this.elContainerSource(EventTypes.Remove);
            this.shadow = this.elContainerSource(EventTypes.Shadow);
            this.over = this.elContainerSource(EventTypes.Over);
            this.out = this.elContainerSource(EventTypes.Out);
            this.cloned = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, function (name, _a) {
                    var _b = __read(_a, 3), clone = _b[0], original = _b[1], cloneType = _b[2];
                    return { name: name, clone: clone, original: original, cloneType: cloneType };
                }));
            };
            this.dropModel = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, function (name, _a) {
                    var _b = __read(_a, 9), el = _b[0], target = _b[1], source = _b[2], sibling = _b[3], item = _b[4], sourceModel = _b[5], targetModel = _b[6], sourceIndex = _b[7], targetIndex = _b[8];
                    return { name: name, el: el, target: target, source: source, sibling: sibling, item: item, sourceModel: sourceModel, targetModel: targetModel, sourceIndex: sourceIndex, targetIndex: targetIndex };
                }));
            };
            this.removeModel = function (groupName) {
                return _this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, function (name, _a) {
                    var _b = __read(_a, 6), el = _b[0], container = _b[1], source = _b[2], item = _b[3], sourceModel = _b[4], sourceIndex = _b[5];
                    return { name: name, el: el, container: container, source: source, item: item, sourceModel: sourceModel, sourceIndex: sourceIndex };
                }));
            };
            this.groups = {};
            if (this.drakeFactory === null) {
                this.drakeFactory = new DrakeFactory();
            }
        }
        /**
         * Public mainly for testing purposes. Prefer `createGroup()`.
         * @param {?} group
         * @return {?}
         */
        DragulaService.prototype.add = /**
         * Public mainly for testing purposes. Prefer `createGroup()`.
         * @param {?} group
         * @return {?}
         */
            function (group) {
                /** @type {?} */
                var existingGroup = this.find(group.name);
                if (existingGroup) {
                    throw new Error('Group named: "' + group.name + '" already exists.');
                }
                this.groups[group.name] = group;
                this.handleModels(group);
                this.setupEvents(group);
                return group;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        DragulaService.prototype.find = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.groups[name];
            };
        /**
         * @param {?} name
         * @return {?}
         */
        DragulaService.prototype.destroy = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var group = this.find(name);
                if (!group) {
                    return;
                }
                group.drake && group.drake.destroy();
                delete this.groups[name];
            };
        /**
         * Creates a group with the specified name and options.
         *
         * Note: formerly known as `setOptions`
         * @template T
         * @param {?} name
         * @param {?} options
         * @return {?}
         */
        DragulaService.prototype.createGroup = /**
         * Creates a group with the specified name and options.
         *
         * Note: formerly known as `setOptions`
         * @template T
         * @param {?} name
         * @param {?} options
         * @return {?}
         */
            function (name, options) {
                return this.add(new Group(name, this.drakeFactory.build([], options), options));
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        DragulaService.prototype.handleModels = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var _this = this;
                var name = _a.name, drake = _a.drake, options = _a.options;
                /** @type {?} */
                var dragElm;
                /** @type {?} */
                var dragIndex;
                /** @type {?} */
                var dropIndex;
                drake.on('remove', function (el, container, source) {
                    if (!drake.models) {
                        return;
                    }
                    /** @type {?} */
                    var sourceModel = drake.models[drake.containers.indexOf(source)];
                    sourceModel = sourceModel.slice(0);
                    /** @type {?} */
                    var item = sourceModel.splice(dragIndex, 1)[0];
                    // console.log('REMOVE');
                    // console.log(sourceModel);
                    // console.log('REMOVE');
                    // console.log(sourceModel);
                    _this.dispatch$.next({
                        event: EventTypes.RemoveModel,
                        name: name,
                        args: [el, container, source, item, sourceModel, dragIndex]
                    });
                });
                drake.on('drag', function (el, source) {
                    if (!drake.models) {
                        return;
                    }
                    dragElm = el;
                    dragIndex = _this.domIndexOf(el, source);
                });
                drake.on('drop', function (dropElm, target, source, sibling) {
                    if (!drake.models || !target) {
                        return;
                    }
                    dropIndex = _this.domIndexOf(dropElm, target);
                    /** @type {?} */
                    var sourceModel = drake.models[drake.containers.indexOf(source)];
                    /** @type {?} */
                    var targetModel = drake.models[drake.containers.indexOf(target)];
                    /** @type {?} */
                    var item;
                    if (target === source) {
                        sourceModel = sourceModel.slice(0);
                        item = sourceModel.splice(dragIndex, 1)[0];
                        sourceModel.splice(dropIndex, 0, item);
                        // this was true before we cloned and updated sourceModel,
                        // but targetModel still has the old value
                        targetModel = sourceModel;
                    }
                    else {
                        /** @type {?} */
                        var isCopying = dragElm !== dropElm;
                        item = sourceModel[dragIndex];
                        if (isCopying) {
                            if (!options.copyItem) {
                                throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                            }
                            item = options.copyItem(item);
                        }
                        if (!isCopying) {
                            sourceModel = sourceModel.slice(0);
                            sourceModel.splice(dragIndex, 1);
                        }
                        targetModel = targetModel.slice(0);
                        targetModel.splice(dropIndex, 0, item);
                        if (isCopying) {
                            try {
                                target.removeChild(dropElm);
                            }
                            catch (e) { }
                        }
                    }
                    _this.dispatch$.next({
                        event: EventTypes.DropModel,
                        name: name,
                        args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
                    });
                });
            };
        /**
         * @param {?} group
         * @return {?}
         */
        DragulaService.prototype.setupEvents = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                var _this = this;
                if (group.initEvents) {
                    return;
                }
                group.initEvents = true;
                /** @type {?} */
                var name = group.name;
                /** @type {?} */
                var emitter = function (event) {
                    group.drake.on(event, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        _this.dispatch$.next({ event: event, name: name, args: args });
                    });
                };
                AllEvents.forEach(emitter);
            };
        /**
         * @param {?} child
         * @param {?} parent
         * @return {?}
         */
        DragulaService.prototype.domIndexOf = /**
         * @param {?} child
         * @param {?} parent
         * @return {?}
         */
            function (child, parent) {
                return Array.prototype.indexOf.call(parent.children, child);
            };
        DragulaService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DragulaService.ctorParameters = function () {
            return [
                { type: DrakeFactory, decorators: [{ type: core.Optional }] }
            ];
        };
        return DragulaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragulaDirective = (function () {
        function DragulaDirective(el, dragulaService) {
            this.el = el;
            this.dragulaService = dragulaService;
            this.dragulaModelChange = new core.EventEmitter();
        }
        Object.defineProperty(DragulaDirective.prototype, "container", {
            get: /**
             * @return {?}
             */ function () {
                return this.el && this.el.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        DragulaDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes && changes.dragula) {
                    var _a = changes.dragula, prev = _a.previousValue, current = _a.currentValue, firstChange = _a.firstChange;
                    /** @type {?} */
                    var hadPreviousValue = !!prev;
                    /** @type {?} */
                    var hasNewValue = !!current;
                    // something -> null       =>  teardown only
                    // something -> something  =>  teardown, then setup
                    //      null -> something  =>  setup only
                    //
                    //      null -> null (precluded by fact of change being present)
                    if (hadPreviousValue) {
                        this.teardown(prev);
                    }
                    if (hasNewValue) {
                        this.setup();
                    }
                }
                else if (changes && changes.dragulaModel) {
                    var _b = changes.dragulaModel, prev = _b.previousValue, current = _b.currentValue, firstChange = _b.firstChange;
                    var drake = this.group.drake;
                    if (this.dragula && drake) {
                        drake.models = drake.models || [];
                        /** @type {?} */
                        var prevIndex = drake.models.indexOf(prev);
                        if (prevIndex !== -1) {
                            // delete the previous
                            drake.models.splice(prevIndex, 1);
                            // maybe insert a new one at the same spot
                            if (!!current) {
                                drake.models.splice(prevIndex, 0, current);
                            }
                        }
                        else if (!!current) {
                            // no previous one to remove; just push this one.
                            drake.models.push(current);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        DragulaDirective.prototype.setup = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var checkModel = function (group) {
                    if (_this.dragulaModel) {
                        if (group.drake.models) {
                            group.drake.models.push(_this.dragulaModel);
                        }
                        else {
                            group.drake.models = [_this.dragulaModel];
                        }
                    }
                };
                /** @type {?} */
                var group = this.dragulaService.find(this.dragula);
                if (!group) {
                    /** @type {?} */
                    var options = {};
                    group = this.dragulaService.createGroup(this.dragula, options);
                }
                // ensure model and container element are pushed
                checkModel(group);
                group.drake.containers.push(this.container);
                this.subscribe(this.dragula);
                this.group = group;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        DragulaDirective.prototype.subscribe = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                var _this = this;
                this.subs = new rxjs.Subscription();
                this.subs.add(this.dragulaService
                    .dropModel(name)
                    .subscribe(function (_a) {
                    var source = _a.source, target = _a.target, sourceModel = _a.sourceModel, targetModel = _a.targetModel;
                    if (source === _this.el.nativeElement) {
                        _this.dragulaModelChange.emit(sourceModel);
                    }
                    else if (target === _this.el.nativeElement) {
                        _this.dragulaModelChange.emit(targetModel);
                    }
                }));
                this.subs.add(this.dragulaService
                    .removeModel(name)
                    .subscribe(function (_a) {
                    var source = _a.source, sourceModel = _a.sourceModel;
                    if (source === _this.el.nativeElement) {
                        _this.dragulaModelChange.emit(sourceModel);
                    }
                }));
            };
        /**
         * @param {?} groupName
         * @return {?}
         */
        DragulaDirective.prototype.teardown = /**
         * @param {?} groupName
         * @return {?}
         */
            function (groupName) {
                if (this.subs) {
                    this.subs.unsubscribe();
                }
                /** @type {?} */
                var group = this.dragulaService.find(groupName);
                if (group) {
                    /** @type {?} */
                    var itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);
                    if (itemToRemove !== -1) {
                        group.drake.containers.splice(itemToRemove, 1);
                    }
                    if (this.dragulaModel && group.drake && group.drake.models) {
                        /** @type {?} */
                        var modelIndex = group.drake.models.indexOf(this.dragulaModel);
                        if (modelIndex !== -1) {
                            group.drake.models.splice(modelIndex, 1);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        DragulaDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.teardown(this.dragula);
            };
        DragulaDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[dragula]' },] }
        ];
        /** @nocollapse */
        DragulaDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragulaService }
            ];
        };
        DragulaDirective.propDecorators = {
            dragula: [{ type: core.Input }],
            dragulaModel: [{ type: core.Input }],
            dragulaModelChange: [{ type: core.Output }]
        };
        return DragulaDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragulaModule = (function () {
        function DragulaModule() {
        }
        /**
         * @return {?}
         */
        DragulaModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DragulaModule,
                    providers: [DragulaService]
                };
            };
        DragulaModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [DragulaDirective],
                        declarations: [DragulaDirective],
                    },] }
        ];
        return DragulaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @type {?} */
    var MockDrakeFactory = new DrakeFactory(function (containers, options) {
        return new MockDrake(containers, options);
    });
    /**
     * You can use MockDrake to simulate Drake events.
     *
     * The three methods that actually do anything are `on(event, listener)`,
     * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
     * events, and if you injected MockDrake properly with MockDrakeFactory or
     * mocked the DragulaService.find() method, then you can make ng2-dragula think
     * drags and drops are happening.
     *
     * Caveats:
     *
     * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
     * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
     *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
     * 3. None of the other methods do anything.
     *    That's ok, because ng2-dragula doesn't use them.
     */
    var /**
     * You can use MockDrake to simulate Drake events.
     *
     * The three methods that actually do anything are `on(event, listener)`,
     * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
     * events, and if you injected MockDrake properly with MockDrakeFactory or
     * mocked the DragulaService.find() method, then you can make ng2-dragula think
     * drags and drops are happening.
     *
     * Caveats:
     *
     * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
     * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
     *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
     * 3. None of the other methods do anything.
     *    That's ok, because ng2-dragula doesn't use them.
     */ MockDrake = (function () {
        /**
         * @param containers A list of container elements.
         * @param options These will NOT be used. At all.
         * @param models Nonstandard, but useful for testing using `new MockDrake()` directly.
         *               Note, default value is undefined, like a real Drake. Don't change that.
         */
        function MockDrake(containers, options, models) {
            if (containers === void 0) {
                containers = [];
            }
            if (options === void 0) {
                options = {};
            }
            this.containers = containers;
            this.options = options;
            this.models = models;
            /* Doesn't represent anything meaningful. */
            this.dragging = false;
            this.emitter$ = new rxjs.Subject();
            this.subs = new rxjs.Subscription();
        }
        /* Does nothing useful. */
        /**
         * @param {?} item
         * @return {?}
         */
        MockDrake.prototype.start = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.dragging = true;
            };
        /* Does nothing useful. */
        /**
         * @return {?}
         */
        MockDrake.prototype.end = /**
         * @return {?}
         */
            function () {
                this.dragging = false;
            };
        /**
         * @param {?=} revert
         * @return {?}
         */
        MockDrake.prototype.cancel = /**
         * @param {?=} revert
         * @return {?}
         */
            function (revert) {
                this.dragging = false;
            };
        /* Does nothing useful. */
        /**
         * @return {?}
         */
        MockDrake.prototype.remove = /**
         * @return {?}
         */
            function () {
                this.dragging = false;
            };
        /**
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */
        MockDrake.prototype.on = /**
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */
            function (event, callback) {
                this.subs.add(this.emitter$
                    .pipe(operators.filter(function (_a) {
                    var eventType = _a.eventType;
                    return eventType === event;
                }))
                    .subscribe(function (_a) {
                    var args = _a.args;
                    callback.apply(void 0, __spread(args));
                }));
            };
        /**
         * @return {?}
         */
        MockDrake.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.subs.unsubscribe();
            };
        /**
         * This is the most useful method. You can use it to manually fire events that would normally
         * be fired by a real drake.
         *
         * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
         * DragulaService uses to implement [dragulaModel].
         *
         * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
         *
         * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
         */
        /**
         * This is the most useful method. You can use it to manually fire events that would normally
         * be fired by a real drake.
         *
         * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
         * DragulaService uses to implement [dragulaModel].
         *
         * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
         *
         * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
         * @param {?} eventType
         * @param {...?} args
         * @return {?}
         */
        MockDrake.prototype.emit = /**
         * This is the most useful method. You can use it to manually fire events that would normally
         * be fired by a real drake.
         *
         * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
         * DragulaService uses to implement [dragulaModel].
         *
         * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
         *
         * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
         * @param {?} eventType
         * @param {...?} args
         * @return {?}
         */
            function (eventType) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                this.emitter$.next({ eventType: eventType, args: args });
            };
        return MockDrake;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.DragulaDirective = DragulaDirective;
    exports.DragulaService = DragulaService;
    exports.DragulaModule = DragulaModule;
    exports.dragula = dragula;
    exports.DrakeFactory = DrakeFactory;
    exports.Group = Group;
    exports.EventTypes = EventTypes;
    exports.MockDrake = MockDrake;
    exports.MockDrakeFactory = MockDrakeFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyYWd1bGEudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmcyLWRyYWd1bGEvR3JvdXAudHMiLCJuZzovL25nMi1kcmFndWxhL0V2ZW50VHlwZXMudHMiLCJuZzovL25nMi1kcmFndWxhL0RyYWtlRmFjdG9yeS50cyIsIm5nOi8vbmcyLWRyYWd1bGEvY29tcG9uZW50cy9kcmFndWxhLnNlcnZpY2UudHMiLCJuZzovL25nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5kaXJlY3RpdmUudHMiLCJuZzovL25nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5tb2R1bGUudHMiLCJuZzovL25nMi1kcmFndWxhL01vY2tEcmFrZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERyYWtlV2l0aE1vZGVscyB9IGZyb20gXCIuL0RyYWtlV2l0aE1vZGVsc1wiO1xuaW1wb3J0IHsgRHJhZ3VsYU9wdGlvbnMgfSBmcm9tIFwiLi9EcmFndWxhT3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICBwdWJsaWMgaW5pdEV2ZW50czogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkcmFrZTogRHJha2VXaXRoTW9kZWxzLFxuICAgIHB1YmxpYyBvcHRpb25zOiBEcmFndWxhT3B0aW9uc1xuICApIHt9XG59XG4iLCJleHBvcnQgZW51bSBFdmVudFR5cGVzIHtcbiAgICBDYW5jZWwgPSBcImNhbmNlbFwiLFxuICAgIENsb25lZCA9IFwiY2xvbmVkXCIsXG4gICAgRHJhZyA9IFwiZHJhZ1wiLFxuICAgIERyYWdFbmQgPSBcImRyYWdlbmRcIixcbiAgICBEcm9wID0gXCJkcm9wXCIsXG4gICAgT3V0ID0gXCJvdXRcIixcbiAgICBPdmVyID0gXCJvdmVyXCIsXG4gICAgUmVtb3ZlID0gXCJyZW1vdmVcIixcbiAgICBTaGFkb3cgPSBcInNoYWRvd1wiLFxuICAgIERyb3BNb2RlbCA9IFwiZHJvcE1vZGVsXCIsXG4gICAgUmVtb3ZlTW9kZWwgPSBcInJlbW92ZU1vZGVsXCIsXG59XG5cbmV4cG9ydCBjb25zdCBBbGxFdmVudHM6IEV2ZW50VHlwZXNbXSA9IE9iamVjdC5rZXlzKEV2ZW50VHlwZXMpLm1hcChrID0+IEV2ZW50VHlwZXNbayBhcyBhbnldIGFzIEV2ZW50VHlwZXMpO1xuXG5cbiIsImltcG9ydCB7IERyYWd1bGFPcHRpb25zIH0gZnJvbSAnLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgKiBhcyBkcmFndWxhRXhwdCBmcm9tICdkcmFndWxhJztcbmV4cG9ydCBjb25zdCBkcmFndWxhOiAoY29udGFpbmVycz86IGFueSwgb3B0aW9ucz86IGFueSkgPT4gYW55ID0gKGRyYWd1bGFFeHB0IGFzIGFueSkuZGVmYXVsdCB8fCBkcmFndWxhRXhwdDtcblxuZXhwb3J0IHR5cGUgRHJha2VCdWlsZGVyID0gKGNvbnRhaW5lcnM6IGFueVtdLCBvcHRpb25zOiBEcmFndWxhT3B0aW9ucykgPT4gRHJha2VXaXRoTW9kZWxzO1xuXG5leHBvcnQgY2xhc3MgRHJha2VGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBidWlsZDogRHJha2VCdWlsZGVyID0gZHJhZ3VsYSkge31cbn1cblxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vR3JvdXAnO1xuaW1wb3J0IHsgRHJhZ3VsYU9wdGlvbnMgfSBmcm9tICcuLi9EcmFndWxhT3B0aW9ucyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEV2ZW50VHlwZXMsIEFsbEV2ZW50cyB9IGZyb20gJy4uL0V2ZW50VHlwZXMnO1xuaW1wb3J0IHsgRHJha2VGYWN0b3J5IH0gZnJvbSAnLi4vRHJha2VGYWN0b3J5JztcblxudHlwZSBGaWx0ZXJQcm9qZWN0b3I8VCBleHRlbmRzIHsgbmFtZTogc3RyaW5nOyB9PiA9IChuYW1lOiBzdHJpbmcsIGFyZ3M6IGFueVtdKSA9PiBUO1xudHlwZSBEaXNwYXRjaCA9IHsgZXZlbnQ6IEV2ZW50VHlwZXM7IG5hbWU6IHN0cmluZzsgYXJnczogYW55W107IH07XG5cbmNvbnN0IGZpbHRlckV2ZW50ID0gPFQgZXh0ZW5kcyB7IG5hbWU6IHN0cmluZzsgfT4oXG4gIGV2ZW50VHlwZTogRXZlbnRUeXBlcyxcbiAgZmlsdGVyRHJhZ1R5cGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgcHJvamVjdG9yOiBGaWx0ZXJQcm9qZWN0b3I8VD5cbikgPT4gKGlucHV0OiBPYnNlcnZhYmxlPERpc3BhdGNoPik6IE9ic2VydmFibGU8VD4gPT4ge1xuICByZXR1cm4gaW5wdXQucGlwZShcbiAgICBmaWx0ZXIoKHsgZXZlbnQsIG5hbWUgfSkgPT4ge1xuICAgICAgcmV0dXJuIGV2ZW50ID09PSBldmVudFR5cGVcbiAgICAgICAgICAmJiAoZmlsdGVyRHJhZ1R5cGUgPT09IHVuZGVmaW5lZCB8fCBuYW1lID09PSBmaWx0ZXJEcmFnVHlwZSk7XG4gICAgfSksXG4gICAgbWFwKCh7IG5hbWUsIGFyZ3MgfSkgPT4gcHJvamVjdG9yKG5hbWUsIGFyZ3MpKVxuICApO1xufVxuXG5jb25zdCBlbENvbnRhaW5lclNvdXJjZVByb2plY3RvciA9XG4gIChuYW1lOiBzdHJpbmcsIFtlbCwgY29udGFpbmVyLCBzb3VyY2VdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudF0pID0+XG4gICAgKHsgbmFtZSwgZWwsIGNvbnRhaW5lciwgc291cmNlIH0pO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ3VsYVNlcnZpY2Uge1xuXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhI2RyYWtlb24tZXZlbnRzICovXG5cbiAgcHJpdmF0ZSBkaXNwYXRjaCQgPSBuZXcgU3ViamVjdDxEaXNwYXRjaD4oKTtcblxuICBwdWJsaWMgZHJhZyA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyYWcsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW2VsLCBzb3VyY2VdOiBbRWxlbWVudCwgRWxlbWVudF0pID0+ICh7IG5hbWUsIGVsLCBzb3VyY2UgfSlcbiAgICApXG4gICk7XG5cbiAgcHVibGljIGRyYWdlbmQgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5EcmFnRW5kLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtlbF06IFtFbGVtZW50XSkgPT4gKHsgbmFtZSwgZWwgfSlcbiAgICApXG4gICk7XG5cbiAgcHVibGljIGRyb3AgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5Ecm9wLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtcbiAgICAgICAgZWwsIHRhcmdldCwgc291cmNlLCBzaWJsaW5nXG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudF0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgZWwsIHRhcmdldCwgc291cmNlLCBzaWJsaW5nIH07XG4gICAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgZWxDb250YWluZXJTb3VyY2UgPVxuICAgIChldmVudFR5cGU6IEV2ZW50VHlwZXMpID0+XG4gICAgKGdyb3VwTmFtZT86IHN0cmluZykgPT5cbiAgICB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgICAgZmlsdGVyRXZlbnQoZXZlbnRUeXBlLCBncm91cE5hbWUsIGVsQ29udGFpbmVyU291cmNlUHJvamVjdG9yKVxuICAgICk7XG5cbiAgcHVibGljIGNhbmNlbCA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5DYW5jZWwpO1xuICBwdWJsaWMgcmVtb3ZlID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLlJlbW92ZSk7XG4gIHB1YmxpYyBzaGFkb3cgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuU2hhZG93KTtcbiAgcHVibGljIG92ZXIgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuT3Zlcik7XG4gIHB1YmxpYyBvdXQgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuT3V0KTtcblxuICBwdWJsaWMgY2xvbmVkID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuQ2xvbmVkLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtcbiAgICAgICAgY2xvbmUsIG9yaWdpbmFsLCBjbG9uZVR5cGVcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCAnbWlycm9yJyB8ICdjb3B5J10pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgY2xvbmUsIG9yaWdpbmFsLCBjbG9uZVR5cGUgfVxuICAgICAgfSlcbiAgKTtcblxuICBwdWJsaWMgZHJvcE1vZGVsID0gPFQgPSBhbnk+KGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJvcE1vZGVsLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtcbiAgICAgICAgZWwsIHRhcmdldCwgc291cmNlLCBzaWJsaW5nLCBpdGVtLCBzb3VyY2VNb2RlbCwgdGFyZ2V0TW9kZWwsIHNvdXJjZUluZGV4LCB0YXJnZXRJbmRleFxuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIFQsIFRbXSwgVFtdLCBudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgZWwsIHRhcmdldCwgc291cmNlLCBzaWJsaW5nLCBpdGVtLCBzb3VyY2VNb2RlbCwgdGFyZ2V0TW9kZWwsIHNvdXJjZUluZGV4LCB0YXJnZXRJbmRleCB9XG4gICAgICB9KVxuICApO1xuXG4gIHB1YmxpYyByZW1vdmVNb2RlbCA9IDxUID0gYW55Pihncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLlJlbW92ZU1vZGVsLFxuICAgICAgZ3JvdXBOYW1lLFxuICAgICAgKG5hbWUsIFtcbiAgICAgICAgZWwsIGNvbnRhaW5lciwgc291cmNlLCBpdGVtLCBzb3VyY2VNb2RlbCwgc291cmNlSW5kZXhcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBULCBUW10sIG51bWJlcl0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgZWwsIGNvbnRhaW5lciwgc291cmNlLCBpdGVtLCBzb3VyY2VNb2RlbCwgc291cmNlSW5kZXggfVxuICAgICAgfVxuICAgIClcbiAgKTtcblxuICBwcml2YXRlIGdyb3VwczogeyBbazogc3RyaW5nXTogR3JvdXAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yIChAT3B0aW9uYWwoKSBwcml2YXRlIGRyYWtlRmFjdG9yeTogRHJha2VGYWN0b3J5ID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmRyYWtlRmFjdG9yeSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kcmFrZUZhY3RvcnkgPSBuZXcgRHJha2VGYWN0b3J5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFB1YmxpYyBtYWlubHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuIFByZWZlciBgY3JlYXRlR3JvdXAoKWAuICovXG4gIHB1YmxpYyBhZGQoZ3JvdXA6IEdyb3VwKTogR3JvdXAge1xuICAgIGxldCBleGlzdGluZ0dyb3VwID0gdGhpcy5maW5kKGdyb3VwLm5hbWUpO1xuICAgIGlmIChleGlzdGluZ0dyb3VwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dyb3VwIG5hbWVkOiBcIicgKyBncm91cC5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzLicpO1xuICAgIH1cbiAgICB0aGlzLmdyb3Vwc1tncm91cC5uYW1lXSA9IGdyb3VwO1xuICAgIHRoaXMuaGFuZGxlTW9kZWxzKGdyb3VwKTtcbiAgICB0aGlzLnNldHVwRXZlbnRzKGdyb3VwKTtcbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cblxuICBwdWJsaWMgZmluZChuYW1lOiBzdHJpbmcpOiBHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXBzW25hbWVdO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGdyb3VwID0gdGhpcy5maW5kKG5hbWUpO1xuICAgIGlmICghZ3JvdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JvdXAuZHJha2UgJiYgZ3JvdXAuZHJha2UuZGVzdHJveSgpO1xuICAgIGRlbGV0ZSB0aGlzLmdyb3Vwc1tuYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZ3JvdXAgd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIG9wdGlvbnMuXG4gICAqXG4gICAqIE5vdGU6IGZvcm1lcmx5IGtub3duIGFzIGBzZXRPcHRpb25zYFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUdyb3VwPFQgPSBhbnk+KG5hbWU6IHN0cmluZywgb3B0aW9uczogRHJhZ3VsYU9wdGlvbnM8VD4pOiBHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG5ldyBHcm91cChcbiAgICAgIG5hbWUsXG4gICAgICB0aGlzLmRyYWtlRmFjdG9yeS5idWlsZChbXSwgb3B0aW9ucyksXG4gICAgICBvcHRpb25zXG4gICAgKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vZGVscyh7IG5hbWUsIGRyYWtlLCBvcHRpb25zIH06IEdyb3VwKTogdm9pZCB7XG4gICAgbGV0IGRyYWdFbG06IGFueTtcbiAgICBsZXQgZHJhZ0luZGV4OiBudW1iZXI7XG4gICAgbGV0IGRyb3BJbmRleDogbnVtYmVyO1xuICAgIGRyYWtlLm9uKCdyZW1vdmUnLCAoZWw6IGFueSwgY29udGFpbmVyOiBhbnksIHNvdXJjZTogYW55KSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgc291cmNlTW9kZWwgPSBzb3VyY2VNb2RlbC5zbGljZSgwKTsgLy8gY2xvbmUgaXRcbiAgICAgIGNvbnN0IGl0ZW0gPSBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKVswXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdSRU1PVkUnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNvdXJjZU1vZGVsKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2gkLm5leHQoe1xuICAgICAgICBldmVudDogRXZlbnRUeXBlcy5SZW1vdmVNb2RlbCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYXJnczogWyBlbCwgY29udGFpbmVyLCBzb3VyY2UsIGl0ZW0sIHNvdXJjZU1vZGVsLCBkcmFnSW5kZXggXVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2RyYWcnLCAoZWw6IGFueSwgc291cmNlOiBhbnkpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyYWdFbG0gPSBlbDtcbiAgICAgIGRyYWdJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihlbCwgc291cmNlKTtcbiAgICB9KTtcbiAgICBkcmFrZS5vbignZHJvcCcsIChkcm9wRWxtOiBhbnksIHRhcmdldDogRWxlbWVudCwgc291cmNlOiBFbGVtZW50LCBzaWJsaW5nPzogRWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMgfHwgIXRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcm9wSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZHJvcEVsbSwgdGFyZ2V0KTtcbiAgICAgIGxldCBzb3VyY2VNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2Yoc291cmNlKV07XG4gICAgICBsZXQgdGFyZ2V0TW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHRhcmdldCldO1xuICAgICAgLy8gY29uc29sZS5sb2coJ0RST1AnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNvdXJjZU1vZGVsKTtcbiAgICAgIGxldCBpdGVtOiBhbnk7XG4gICAgICBpZiAodGFyZ2V0ID09PSBzb3VyY2UpIHtcbiAgICAgICAgc291cmNlTW9kZWwgPSBzb3VyY2VNb2RlbC5zbGljZSgwKVxuICAgICAgICBpdGVtID0gc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSlbMF07XG4gICAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcm9wSW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICAvLyB0aGlzIHdhcyB0cnVlIGJlZm9yZSB3ZSBjbG9uZWQgYW5kIHVwZGF0ZWQgc291cmNlTW9kZWwsXG4gICAgICAgIC8vIGJ1dCB0YXJnZXRNb2RlbCBzdGlsbCBoYXMgdGhlIG9sZCB2YWx1ZVxuICAgICAgICB0YXJnZXRNb2RlbCA9IHNvdXJjZU1vZGVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGlzQ29weWluZyA9IGRyYWdFbG0gIT09IGRyb3BFbG07XG4gICAgICAgIGl0ZW0gPSBzb3VyY2VNb2RlbFtkcmFnSW5kZXhdO1xuICAgICAgICBpZiAoaXNDb3B5aW5nKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmNvcHlJdGVtKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJZiB5b3UgaGF2ZSBlbmFibGVkIGBjb3B5YCBvbiBhIGdyb3VwLCB5b3UgbXVzdCBwcm92aWRlIGEgYGNvcHlJdGVtYCBmdW5jdGlvbi5cIilcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbSA9IG9wdGlvbnMuY29weUl0ZW0oaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzQ29weWluZykge1xuICAgICAgICAgIHNvdXJjZU1vZGVsID0gc291cmNlTW9kZWwuc2xpY2UoMClcbiAgICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRNb2RlbCA9IHRhcmdldE1vZGVsLnNsaWNlKDApXG4gICAgICAgIHRhcmdldE1vZGVsLnNwbGljZShkcm9wSW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICBpZiAoaXNDb3B5aW5nKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZChkcm9wRWxtKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BhdGNoJC5uZXh0KHtcbiAgICAgICAgZXZlbnQ6IEV2ZW50VHlwZXMuRHJvcE1vZGVsLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhcmdzOiBbIGRyb3BFbG0sIHRhcmdldCwgc291cmNlLCBzaWJsaW5nLCBpdGVtLCBzb3VyY2VNb2RlbCwgdGFyZ2V0TW9kZWwsIGRyYWdJbmRleCwgZHJvcEluZGV4IF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cEV2ZW50cyhncm91cDogR3JvdXApOiB2b2lkIHtcbiAgICBpZiAoZ3JvdXAuaW5pdEV2ZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBncm91cC5pbml0RXZlbnRzID0gdHJ1ZTtcbiAgICBjb25zdCBuYW1lID0gZ3JvdXAubmFtZTtcbiAgICBsZXQgdGhhdDogYW55ID0gdGhpcztcbiAgICBsZXQgZW1pdHRlciA9IChldmVudDogRXZlbnRUeXBlcykgPT4ge1xuICAgICAgZ3JvdXAuZHJha2Uub24oZXZlbnQsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BhdGNoJC5uZXh0KHsgZXZlbnQsIG5hbWUsIGFyZ3MgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIEFsbEV2ZW50cy5mb3JFYWNoKGVtaXR0ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBkb21JbmRleE9mKGNoaWxkOiBhbnksIHBhcmVudDogYW55KTogYW55IHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sIGNoaWxkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2UsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL2RyYWd1bGEuc2VydmljZSc7XG5pbXBvcnQgeyBEcmFrZVdpdGhNb2RlbHMgfSBmcm9tICcuLi9EcmFrZVdpdGhNb2RlbHMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL0dyb3VwJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZHJhZ3VsYV0nfSlcbmV4cG9ydCBjbGFzcyBEcmFndWxhRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgZHJhZ3VsYTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZHJhZ3VsYU1vZGVsOiBhbnlbXTtcbiAgQE91dHB1dCgpIHB1YmxpYyBkcmFndWxhTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZ2V0IGNvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWwgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG4gIHByaXZhdGUgZ3JvdXA6IEdyb3VwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGRyYWd1bGFTZXJ2aWNlOiBEcmFndWxhU2VydmljZSkge1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtkcmFndWxhPzogU2ltcGxlQ2hhbmdlLCBkcmFndWxhTW9kZWw/OiBTaW1wbGVDaGFuZ2V9KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5kcmFndWxhKSB7XG4gICAgICBjb25zdCB7IHByZXZpb3VzVmFsdWU6IHByZXYsIGN1cnJlbnRWYWx1ZTogY3VycmVudCwgZmlyc3RDaGFuZ2UgfSA9IGNoYW5nZXMuZHJhZ3VsYTtcbiAgICAgIGxldCBoYWRQcmV2aW91c1ZhbHVlID0gISFwcmV2O1xuICAgICAgbGV0IGhhc05ld1ZhbHVlID0gISFjdXJyZW50O1xuICAgICAgLy8gc29tZXRoaW5nIC0+IG51bGwgICAgICAgPT4gIHRlYXJkb3duIG9ubHlcbiAgICAgIC8vIHNvbWV0aGluZyAtPiBzb21ldGhpbmcgID0+ICB0ZWFyZG93biwgdGhlbiBzZXR1cFxuICAgICAgLy8gICAgICBudWxsIC0+IHNvbWV0aGluZyAgPT4gIHNldHVwIG9ubHlcbiAgICAgIC8vXG4gICAgICAvLyAgICAgIG51bGwgLT4gbnVsbCAocHJlY2x1ZGVkIGJ5IGZhY3Qgb2YgY2hhbmdlIGJlaW5nIHByZXNlbnQpXG4gICAgICBpZiAoaGFkUHJldmlvdXNWYWx1ZSkge1xuICAgICAgICB0aGlzLnRlYXJkb3duKHByZXYpO1xuICAgICAgfVxuICAgICAgaWYgKGhhc05ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgIC8vIHRoaXMgY29kZSBvbmx5IHJ1bnMgd2hlbiB5b3UncmUgbm90IGNoYW5naW5nIHRoZSBncm91cCBuYW1lXG4gICAgICAvLyBiZWNhdXNlIGlmIHlvdSdyZSBjaGFuZ2luZyB0aGUgZ3JvdXAgbmFtZSwgeW91J2xsIGJlIGRvaW5nIHNldHVwIG9yIHRlYXJkb3duXG4gICAgICAvLyBpdCBhbHNvIG9ubHkgcnVucyBpZiB0aGVyZSBpcyBhIGdyb3VwIG5hbWUgdG8gYXR0YWNoIHRvLlxuICAgICAgY29uc3QgeyBwcmV2aW91c1ZhbHVlOiBwcmV2LCBjdXJyZW50VmFsdWU6IGN1cnJlbnQsIGZpcnN0Q2hhbmdlIH0gPSBjaGFuZ2VzLmRyYWd1bGFNb2RlbDtcbiAgICAgIGNvbnN0IHsgZHJha2UgfSA9IHRoaXMuZ3JvdXA7XG4gICAgICBpZiAodGhpcy5kcmFndWxhICYmIGRyYWtlKSB7XG4gICAgICAgIGRyYWtlLm1vZGVscyA9IGRyYWtlLm1vZGVscyB8fCBbXTtcbiAgICAgICAgbGV0IHByZXZJbmRleCA9IGRyYWtlLm1vZGVscy5pbmRleE9mKHByZXYpO1xuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgcHJldmlvdXNcbiAgICAgICAgICBkcmFrZS5tb2RlbHMuc3BsaWNlKHByZXZJbmRleCwgMSk7XG4gICAgICAgICAgLy8gbWF5YmUgaW5zZXJ0IGEgbmV3IG9uZSBhdCB0aGUgc2FtZSBzcG90XG4gICAgICAgICAgaWYgKCEhY3VycmVudCkge1xuICAgICAgICAgICAgZHJha2UubW9kZWxzLnNwbGljZShwcmV2SW5kZXgsIDAsIGN1cnJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghIWN1cnJlbnQpIHtcbiAgICAgICAgICAvLyBubyBwcmV2aW91cyBvbmUgdG8gcmVtb3ZlOyBqdXN0IHB1c2ggdGhpcyBvbmUuXG4gICAgICAgICAgZHJha2UubW9kZWxzLnB1c2goY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjYWxsIG5nT25Jbml0ICdzZXR1cCcgYmVjYXVzZSB3ZSB3YW50IHRvIGNhbGwgaXQgaW4gbmdPbkNoYW5nZXNcbiAgLy8gYW5kIGl0IHdvdWxkIG90aGVyd2lzZSBydW4gdHdpY2VcbiAgcHVibGljIHNldHVwKCk6IHZvaWQge1xuICAgIGxldCBjaGVja01vZGVsID0gKGdyb3VwOiBHcm91cCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ3VsYU1vZGVsKSB7XG4gICAgICAgIGlmIChncm91cC5kcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMucHVzaCh0aGlzLmRyYWd1bGFNb2RlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ3JvdXAuZHJha2UubW9kZWxzID0gW3RoaXMuZHJhZ3VsYU1vZGVsXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBmaW5kIG9yIGNyZWF0ZSBhIGdyb3VwXG4gICAgbGV0IGdyb3VwID0gdGhpcy5kcmFndWxhU2VydmljZS5maW5kKHRoaXMuZHJhZ3VsYSk7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGdyb3VwID0gdGhpcy5kcmFndWxhU2VydmljZS5jcmVhdGVHcm91cCh0aGlzLmRyYWd1bGEsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGVuc3VyZSBtb2RlbCBhbmQgY29udGFpbmVyIGVsZW1lbnQgYXJlIHB1c2hlZFxuICAgIGNoZWNrTW9kZWwoZ3JvdXApO1xuICAgIGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMucHVzaCh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5zdWJzY3JpYmUodGhpcy5kcmFndWxhKTtcblxuICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgfVxuXG4gIHB1YmxpYyBzdWJzY3JpYmUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zdWJzID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICB0aGlzLmRyYWd1bGFTZXJ2aWNlXG4gICAgICAuZHJvcE1vZGVsKG5hbWUpXG4gICAgICAuc3Vic2NyaWJlKCh7IHNvdXJjZSwgdGFyZ2V0LCBzb3VyY2VNb2RlbCwgdGFyZ2V0TW9kZWwgfSkgPT4ge1xuICAgICAgICBpZiAoc291cmNlID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZS5lbWl0KHNvdXJjZU1vZGVsKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQodGFyZ2V0TW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzLmFkZChcbiAgICAgIHRoaXMuZHJhZ3VsYVNlcnZpY2VcbiAgICAgIC5yZW1vdmVNb2RlbChuYW1lKVxuICAgICAgLnN1YnNjcmliZSgoeyBzb3VyY2UsIHNvdXJjZU1vZGVsIH0pID0+IHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdChzb3VyY2VNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB0ZWFyZG93bihncm91cE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnMpIHtcbiAgICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBjb25zdCBncm91cCA9IHRoaXMuZHJhZ3VsYVNlcnZpY2UuZmluZChncm91cE5hbWUpO1xuICAgIGlmIChncm91cCkge1xuICAgICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gZ3JvdXAuZHJha2UuY29udGFpbmVycy5pbmRleE9mKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICBpZiAoaXRlbVRvUmVtb3ZlICE9PSAtMSkge1xuICAgICAgICBncm91cC5kcmFrZS5jb250YWluZXJzLnNwbGljZShpdGVtVG9SZW1vdmUsIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZHJhZ3VsYU1vZGVsICYmIGdyb3VwLmRyYWtlICYmIGdyb3VwLmRyYWtlLm1vZGVscykge1xuICAgICAgICBsZXQgbW9kZWxJbmRleCA9IGdyb3VwLmRyYWtlLm1vZGVscy5pbmRleE9mKHRoaXMuZHJhZ3VsYU1vZGVsKTtcbiAgICAgICAgaWYgKG1vZGVsSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgZ3JvdXAuZHJha2UubW9kZWxzLnNwbGljZShtb2RlbEluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRlYXJkb3duKHRoaXMuZHJhZ3VsYSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWd1bGFEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWd1bGEuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi9kcmFndWxhLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbRHJhZ3VsYURpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW0RyYWd1bGFEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFndWxhTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEcmFndWxhTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbRHJhZ3VsYVNlcnZpY2VdXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERyYWtlV2l0aE1vZGVscyB9IGZyb20gJy4vRHJha2VXaXRoTW9kZWxzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEV2ZW50VHlwZXMgfSBmcm9tICcuL0V2ZW50VHlwZXMnO1xuaW1wb3J0IHsgRHJhZ3VsYU9wdGlvbnMgfSBmcm9tICcuL0RyYWd1bGFPcHRpb25zJztcbmltcG9ydCB7IERyYWtlRmFjdG9yeSB9IGZyb20gJy4vRHJha2VGYWN0b3J5JztcblxuZXhwb3J0IGNvbnN0IE1vY2tEcmFrZUZhY3RvcnkgPSBuZXcgRHJha2VGYWN0b3J5KChjb250YWluZXJzLCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBuZXcgTW9ja0RyYWtlKGNvbnRhaW5lcnMsIG9wdGlvbnMpO1xufSk7XG5cbi8qKiBZb3UgY2FuIHVzZSBNb2NrRHJha2UgdG8gc2ltdWxhdGUgRHJha2UgZXZlbnRzLlxuICpcbiAqIFRoZSB0aHJlZSBtZXRob2RzIHRoYXQgYWN0dWFsbHkgZG8gYW55dGhpbmcgYXJlIGBvbihldmVudCwgbGlzdGVuZXIpYCxcbiAqIGBkZXN0cm95KClgLCBhbmQgYSBuZXcgbWV0aG9kLCBgZW1pdCgpYC4gVXNlIGBlbWl0KClgIHRvIG1hbnVhbGx5IGVtaXQgRHJha2VcbiAqIGV2ZW50cywgYW5kIGlmIHlvdSBpbmplY3RlZCBNb2NrRHJha2UgcHJvcGVybHkgd2l0aCBNb2NrRHJha2VGYWN0b3J5IG9yXG4gKiBtb2NrZWQgdGhlIERyYWd1bGFTZXJ2aWNlLmZpbmQoKSBtZXRob2QsIHRoZW4geW91IGNhbiBtYWtlIG5nMi1kcmFndWxhIHRoaW5rXG4gKiBkcmFncyBhbmQgZHJvcHMgYXJlIGhhcHBlbmluZy5cbiAqXG4gKiBDYXZlYXRzOlxuICpcbiAqIDEuIFlPVSBNVVNUIE1BS0UgVEhFIERPTSBDSEFOR0VTIFlPVVJTRUxGLlxuICogMi4gUkVQRUFUOiBZT1UgTVVTVCBNQUtFIFRIRSBET00gQ0hBTkdFUyBZT1VSU0VMRi5cbiAqICAgIFRoYXQgbWVhbnMgYHNvdXJjZS5yZW1vdmVDaGlsZChlbClgLCBhbmQgYHRhcmdldC5pbnNlcnRCZWZvcmUoZWwpYC5cbiAqIDMuIE5vbmUgb2YgdGhlIG90aGVyIG1ldGhvZHMgZG8gYW55dGhpbmcuXG4gKiAgICBUaGF0J3Mgb2ssIGJlY2F1c2UgbmcyLWRyYWd1bGEgZG9lc24ndCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tEcmFrZSBpbXBsZW1lbnRzIERyYWtlV2l0aE1vZGVscyB7XG4gIC8qKlxuICAgKiBAcGFyYW0gY29udGFpbmVycyBBIGxpc3Qgb2YgY29udGFpbmVyIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBUaGVzZSB3aWxsIE5PVCBiZSB1c2VkLiBBdCBhbGwuXG4gICAqIEBwYXJhbSBtb2RlbHMgTm9uc3RhbmRhcmQsIGJ1dCB1c2VmdWwgZm9yIHRlc3RpbmcgdXNpbmcgYG5ldyBNb2NrRHJha2UoKWAgZGlyZWN0bHkuXG4gICAqICAgICAgICAgICAgICAgTm90ZSwgZGVmYXVsdCB2YWx1ZSBpcyB1bmRlZmluZWQsIGxpa2UgYSByZWFsIERyYWtlLiBEb24ndCBjaGFuZ2UgdGhhdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb250YWluZXJzOiBFbGVtZW50W10gPSBbXSxcbiAgICBwdWJsaWMgb3B0aW9uczogRHJhZ3VsYU9wdGlvbnMgPSB7fSxcbiAgICBwdWJsaWMgbW9kZWxzPzogYW55W11bXVxuICApIHt9XG5cbiAgLyogRG9lc24ndCByZXByZXNlbnQgYW55dGhpbmcgbWVhbmluZ2Z1bC4gKi9cbiAgZHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiBEb2VzIG5vdGhpbmcgdXNlZnVsLiAqL1xuICBzdGFydChpdGVtOiBFbGVtZW50KTogYW55IHtcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuICAvKiBEb2VzIG5vdGhpbmcgdXNlZnVsLiAqL1xuICBlbmQoKTogYW55IHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cbiAgLyogRG9lcyBub3RoaW5nIHVzZWZ1bC4gKi9cbiAgY2FuY2VsKHJldmVydDogYm9vbGVhbik6IGFueTtcbiAgY2FuY2VsKCk6IGFueTtcbiAgY2FuY2VsKHJldmVydD86IGFueSkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuICAvKiBEb2VzIG5vdGhpbmcgdXNlZnVsLiAqL1xuICByZW1vdmUoKTogYW55IHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICAvLyBCYXNpYyBidXQgZnVsbHkgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIHNoaW1cbiAgcHJpdmF0ZSBlbWl0dGVyJCA9IG5ldyBTdWJqZWN0PHsgZXZlbnRUeXBlOiBFdmVudFR5cGVzLCBhcmdzOiBhbnlbXSB9PigpO1xuXG4gIHByaXZhdGUgc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiBhbnkge1xuICAgIHRoaXMuc3Vicy5hZGQodGhpcy5lbWl0dGVyJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyBldmVudFR5cGUgfSkgPT4gZXZlbnRUeXBlID09PSBldmVudClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHsgYXJncyB9KSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfSkpO1xuICB9XG5cbiAgZGVzdHJveSgpOiBhbnkge1xuICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIG1vc3QgdXNlZnVsIG1ldGhvZC4gWW91IGNhbiB1c2UgaXQgdG8gbWFudWFsbHkgZmlyZSBldmVudHMgdGhhdCB3b3VsZCBub3JtYWxseVxuICAgKiBiZSBmaXJlZCBieSBhIHJlYWwgZHJha2UuXG4gICAqXG4gICAqIFlvdSdyZSBsaWtlbHkgbW9zdCBpbnRlcmVzdGVkIGluIGZpcmluZyBgZHJhZ2AsIGByZW1vdmVgIGFuZCBgZHJvcGAsIHRoZSB0aHJlZSBldmVudHNcbiAgICogRHJhZ3VsYVNlcnZpY2UgdXNlcyB0byBpbXBsZW1lbnQgW2RyYWd1bGFNb2RlbF0uXG4gICAqXG4gICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYmV2YWNxdWEvZHJhZ3VsYSNkcmFrZW9uLWV2ZW50cyBmb3Igd2hhdCB5b3Ugc2hvdWxkIGVtaXQgKGFuZCBpbiB3aGF0IG9yZGVyKS5cbiAgICpcbiAgICogKE5vdGUgYWxzbywgZmlyaW5nIGRyb3BNb2RlbCBhbmQgcmVtb3ZlTW9kZWwgd29uJ3Qgd29yay4gWW91IHdvdWxkIGhhdmUgdG8gbW9jayBEcmFndWxhU2VydmljZSBmb3IgdGhhdC4pXG4gICAqL1xuICBlbWl0KGV2ZW50VHlwZTogRXZlbnRUeXBlcywgLi4uYXJnczogYW55W10pIHtcbiAgICB0aGlzLmVtaXR0ZXIkLm5leHQoeyBldmVudFR5cGUsIGFyZ3MgfSlcbiAgfVxuXG59XG4iXSwibmFtZXMiOlsiKChkcmFndWxhRXhwdCkpLmRlZmF1bHQiLCJmaWx0ZXIiLCJtYXAiLCJTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIk9wdGlvbmFsIiwiRXZlbnRFbWl0dGVyIiwiU3Vic2NyaXB0aW9uIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0Esb0JBdUd1QixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUk7WUFDQSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJO2dCQUFFLEVBQUUsQ0FBQyxJQUFJLENB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