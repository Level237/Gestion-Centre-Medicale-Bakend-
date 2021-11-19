import { camelCase, deCamelCase } from './camel-case';
import { id } from './id';
import { getterForProp } from './column-prop-getters';
/**
 * Sets the column defaults
 */
export function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
export function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
export function translateTemplates(templates) {
    const result = [];
    for (const temp of templates) {
        const col = {};
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9jb2x1bW4taGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSXREOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQXNCO0lBQ3RELElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQiw0Q0FBNEM7SUFDNUMsNkNBQTZDO0lBQzdDLGtEQUFrRDtJQUNsRCxJQUFJLGVBQWUsR0FBWSxLQUFLLENBQUM7SUFFckMsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNwQjtRQUVELHdEQUF3RDtRQUN4RCx5QkFBeUI7UUFDekIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNqRCxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUN6QixNQUFNLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIs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QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxDYXNlLCBkZUNhbWVsQ2FzZSB9IGZyb20gJy4vY2FtZWwtY2FzZSc7XG5pbXBvcnQgeyBpZCB9IGZyb20gJy4vaWQnO1xuaW1wb3J0IHsgZ2V0dGVyRm9yUHJvcCB9IGZyb20gJy4vY29sdW1uLXByb3AtZ2V0dGVycyc7XG5pbXBvcnQgeyBUYWJsZUNvbHVtbiB9IGZyb20gJy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29sdW1ucy9jb2x1bW4uZGlyZWN0aXZlJztcblxuLyoqXG4gKiBTZXRzIHRoZSBjb2x1bW4gZGVmYXVsdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbHVtbkRlZmF1bHRzKGNvbHVtbnM6IFRhYmxlQ29sdW1uW10pIHtcbiAgaWYgKCFjb2x1bW5zKSByZXR1cm47XG5cbiAgLy8gT25seSBvbmUgY29sdW1uIHNob3VsZCBob2xkIHRoZSB0cmVlIHZpZXdcbiAgLy8gVGh1cyBpZiBtdWx0aXBsZSBjb2x1bW5zIGFyZSBwcm92aWRlZCB3aXRoXG4gIC8vIGlzVHJlZUNvbHVtbiBhcyB0cnVlIHdlIHRha2Ugb25seSB0aGUgZmlyc3Qgb25lXG4gIGxldCB0cmVlQ29sdW1uRm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XG4gICAgaWYgKCFjb2x1bW4uJCRpZCkge1xuICAgICAgY29sdW1uLiQkaWQgPSBpZCgpO1xuICAgIH1cblxuICAgIC8vIHByb3AgY2FuIGJlIG51bWVyaWM7IHplcm8gaXMgdmFsaWQgbm90IGEgbWlzc2luZyBwcm9wXG4gICAgLy8gdHJhbnNsYXRlIG5hbWUgPT4gcHJvcFxuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChjb2x1bW4ucHJvcCkgJiYgY29sdW1uLm5hbWUpIHtcbiAgICAgIGNvbHVtbi5wcm9wID0gY2FtZWxDYXNlKGNvbHVtbi5uYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbHVtbi4kJHZhbHVlR2V0dGVyKSB7XG4gICAgICBjb2x1bW4uJCR2YWx1ZUdldHRlciA9IGdldHRlckZvclByb3AoY29sdW1uLnByb3ApO1xuICAgIH1cblxuICAgIC8vIGZvcm1hdCBwcm9wcyBpZiBubyBuYW1lIHBhc3NlZFxuICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoY29sdW1uLnByb3ApICYmIGlzTnVsbE9yVW5kZWZpbmVkKGNvbHVtbi5uYW1lKSkge1xuICAgICAgY29sdW1uLm5hbWUgPSBkZUNhbWVsQ2FzZShTdHJpbmcoY29sdW1uLnByb3ApKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoY29sdW1uLnByb3ApICYmIGlzTnVsbE9yVW5kZWZpbmVkKGNvbHVtbi5uYW1lKSkge1xuICAgICAgY29sdW1uLm5hbWUgPSAnJzsgLy8gRml4ZXMgSUUgYW5kIEVkZ2UgZGlzcGxheWluZyBgbnVsbGBcbiAgICB9XG5cbiAgICBpZiAoIWNvbHVtbi5oYXNPd25Qcm9wZXJ0eSgncmVzaXplYWJsZScpKSB7XG4gICAgICBjb2x1bW4ucmVzaXplYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFjb2x1bW4uaGFzT3duUHJvcGVydHkoJ3NvcnRhYmxlJykpIHtcbiAgICAgIGNvbHVtbi5zb3J0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFjb2x1bW4uaGFzT3duUHJvcGVydHkoJ2RyYWdnYWJsZScpKSB7XG4gICAgICBjb2x1bW4uZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbHVtbi5oYXNPd25Qcm9wZXJ0eSgnY2FuQXV0b1Jlc2l6ZScpKSB7XG4gICAgICBjb2x1bW4uY2FuQXV0b1Jlc2l6ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFjb2x1bW4uaGFzT3duUHJvcGVydHkoJ3dpZHRoJykpIHtcbiAgICAgIGNvbHVtbi53aWR0aCA9IDE1MDtcbiAgICB9XG5cbiAgICBpZiAoIWNvbHVtbi5oYXNPd25Qcm9wZXJ0eSgnaXNUcmVlQ29sdW1uJykpIHtcbiAgICAgIGNvbHVtbi5pc1RyZWVDb2x1bW4gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbHVtbi5pc1RyZWVDb2x1bW4gJiYgIXRyZWVDb2x1bW5Gb3VuZCkge1xuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgY29sdW1uIHdpdGggaXNUcmVlQ29sdW1uIGlzIHRydWUgZm91bmRcbiAgICAgICAgLy8gd2UgbWFyayB0aGF0IHRyZWVDb3VsbW4gaXMgZm91bmRcbiAgICAgICAgdHJlZUNvbHVtbkZvdW5kID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFmdGVyIHRoYXQgaXNUcmVlQ29sdW1uIHByb3BlcnR5IGZvciBhbnkgb3RoZXIgY29sdW1uXG4gICAgICAgIC8vIHdpbGwgYmUgc2V0IGFzIGZhbHNlXG4gICAgICAgIGNvbHVtbi5pc1RyZWVDb2x1bW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkPFQ+KHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZhbHVlIGlzIG51bGwgfCB1bmRlZmluZWQge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRlbXBsYXRlcyBkZWZpbml0aW9ucyB0byBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVUZW1wbGF0ZXModGVtcGxhdGVzOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmVbXSk6IGFueVtdIHtcbiAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHRlbXAgb2YgdGVtcGxhdGVzKSB7XG4gICAgY29uc3QgY29sOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVtcCk7XG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHByb3BzKSB7XG4gICAgICBjb2xbcHJvcF0gPSB0ZW1wW3Byb3BdO1xuICAgIH1cblxuICAgIGlmICh0ZW1wLmhlYWRlclRlbXBsYXRlKSB7XG4gICAgICBjb2wuaGVhZGVyVGVtcGxhdGUgPSB0ZW1wLmhlYWRlclRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmICh0ZW1wLmNlbGxUZW1wbGF0ZSkge1xuICAgICAgY29sLmNlbGxUZW1wbGF0ZSA9IHRlbXAuY2VsbFRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmICh0ZW1wLnN1bW1hcnlGdW5jKSB7XG4gICAgICBjb2wuc3VtbWFyeUZ1bmMgPSB0ZW1wLnN1bW1hcnlGdW5jO1xuICAgIH1cblxuICAgIGlmICh0ZW1wLnN1bW1hcnlUZW1wbGF0ZSkge1xuICAgICAgY29sLnN1bW1hcnlUZW1wbGF0ZSA9IHRlbXAuc3VtbWFyeVRlbXBsYXRlO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKGNvbCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19