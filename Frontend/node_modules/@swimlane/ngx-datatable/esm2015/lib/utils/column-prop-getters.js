/**
 * Always returns the empty string ''
 */
export function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
export function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
export function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
export function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
export function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXByb3AtZ2V0dGVycy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9jb2x1bW4tcHJvcC1nZXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQjtJQUMvQixPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQXFCO0lBQ2pELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsT0FBTyxrQkFBa0IsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsaUJBQWlCO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1QixPQUFPLGVBQWUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsT0FBTyxrQkFBa0IsQ0FBQztTQUMzQjtLQUNGO0FBQ0gsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEdBQVUsRUFBRSxLQUFhO0lBQzFELElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNmLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxvQ0FBb0M7SUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ3pCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxHQUFRLEVBQUUsU0FBaUI7SUFDNUQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ2YsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDdEIsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFRLEVBQUUsSUFBWTtJQUNwRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1FBQ3pCLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFOUIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUIsMENBQTBDO1lBQzFDLElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQzthQUNYO1NBQ0Y7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZUNvbHVtblByb3AgfSBmcm9tICcuLi90eXBlcy90YWJsZS1jb2x1bW4udHlwZSc7XG5cbi8vIG1heWJlIHJlbmFtZSB0aGlzIGZpbGUgdG8gcHJvcC1nZXR0ZXJzLnRzXG5cbmV4cG9ydCB0eXBlIFZhbHVlR2V0dGVyID0gKG9iajogYW55LCBwcm9wOiBUYWJsZUNvbHVtblByb3ApID0+IGFueTtcblxuLyoqXG4gKiBBbHdheXMgcmV0dXJucyB0aGUgZW1wdHkgc3RyaW5nICcnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eVN0cmluZ0dldHRlcigpOiBzdHJpbmcge1xuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgZ2V0dGVyIGZ1bmN0aW9uIGZvciB0aGlzIGtpbmQgb2YgcHJvcC5cbiAqIElmIHByb3AgPT0gbnVsbCwgcmV0dXJucyB0aGUgZW1wdHlTdHJpbmdHZXR0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXR0ZXJGb3JQcm9wKHByb3A6IFRhYmxlQ29sdW1uUHJvcCk6IFZhbHVlR2V0dGVyIHtcbiAgaWYgKHByb3AgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbXB0eVN0cmluZ0dldHRlcjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJvcCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVtZXJpY0luZGV4R2V0dGVyO1xuICB9IGVsc2Uge1xuICAgIC8vIGRlZXAgb3Igc2ltcGxlXG4gICAgaWYgKHByb3AuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGRlZXBWYWx1ZUdldHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNoYWxsb3dWYWx1ZUdldHRlcjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBhdCB0aGlzIG51bWVyaWMgaW5kZXguXG4gKiBAcGFyYW0gcm93IGFycmF5IG9mIHZhbHVlc1xuICogQHBhcmFtIGluZGV4IG51bWVyaWMgaW5kZXhcbiAqIEByZXR1cm5zIGFueSBvciAnJyBpZiBpbnZhbGlkIGluZGV4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1lcmljSW5kZXhHZXR0ZXIocm93OiBhbnlbXSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gIGlmIChyb3cgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICAvLyBtaW1pYyBiZWhhdmlvciBvZiBkZWVwVmFsdWVHZXR0ZXJcbiAgaWYgKCFyb3cgfHwgaW5kZXggPT0gbnVsbCkge1xuICAgIHJldHVybiByb3c7XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9IHJvd1tpbmRleF07XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIGZpZWxkLlxuICogKG1vcmUgZWZmaWNpZW50IHRoYW4gZGVlcFZhbHVlR2V0dGVyKVxuICogQHBhcmFtIG9iaiBvYmplY3QgY29udGFpbmluZyB0aGUgZmllbGRcbiAqIEBwYXJhbSBmaWVsZE5hbWUgZmllbGQgbmFtZSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dWYWx1ZUdldHRlcihvYmo6IGFueSwgZmllbGROYW1lOiBzdHJpbmcpOiBhbnkge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKCFvYmogfHwgIWZpZWxkTmFtZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9IG9ialtmaWVsZE5hbWVdO1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGRlZXAgb2JqZWN0IGdpdmVuIGEgc3RyaW5nLiB6b29bJ2FuaW1hbC50eXBlJ11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBWYWx1ZUdldHRlcihvYmo6IGFueSwgcGF0aDogc3RyaW5nKTogYW55IHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICghb2JqIHx8ICFwYXRoKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIHBhdGggbWF0Y2hlcyBhIHJvb3QtbGV2ZWwgZmllbGRcbiAgLy8geyBcImEuYi5jXCI6IDEyMyB9XG4gIGxldCBjdXJyZW50ID0gb2JqW3BhdGhdO1xuICBpZiAoY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICBjdXJyZW50ID0gb2JqO1xuICBjb25zdCBzcGxpdCA9IHBhdGguc3BsaXQoJy4nKTtcblxuICBpZiAoc3BsaXQubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgY3VycmVudCA9IGN1cnJlbnRbc3BsaXRbaV1dO1xuXG4gICAgICAvLyBpZiBmb3VuZCB1bmRlZmluZWQsIHJldHVybiBlbXB0eSBzdHJpbmdcbiAgICAgIGlmIChjdXJyZW50ID09PSB1bmRlZmluZWQgfHwgY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG4iXX0=