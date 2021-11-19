import { getterForProp } from './column-prop-getters';
import { SortType } from '../types/sort.type';
import { SortDirection } from '../types/sort-direction.type';
/**
 * Gets the next sort direction
 */
export function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
export function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
export function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    const rowToIndexMap = new Map();
    rows.forEach((row, index) => rowToIndexMap.set(row, index));
    const temp = [...rows];
    const cols = columns.reduce((obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    const cachedDirs = dirs.map(dir => {
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            const propA = valueGetter(rowA, prop);
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9zb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTdEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxRQUFrQixFQUFFLE9BQXNCO0lBQ3BFLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDaEMsSUFBSSxPQUFPLEtBQUssYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUNqQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDM0I7YUFBTTtZQUNMLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQztTQUMxQjtLQUNGO1NBQU07UUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxPQUFPLEtBQUssYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUN4QyxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDM0I7YUFBTSxJQUFJLE9BQU8sS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsbURBQW1EO1FBQ25ELE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtJQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssV0FBVztRQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFdBQVc7UUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFO1FBQzFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztLQUNyQjtTQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN2RiwwQ0FBMEM7UUFDMUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pEO1NBQU07UUFDTCwrQ0FBK0M7UUFDL0MsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzdDO0lBRUQsbUJBQW1CO0lBQ25CLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBVyxFQUFFLE9BQWMsRUFBRSxJQUFtQjtJQUN2RSxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRXhEOzs7T0FHRztJQUNILE1BQU0sYUFBYSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7SUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFNUQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDdkMsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDMUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCwrQ0FBK0M7SUFDL0Msd0RBQXdEO0lBQ3hELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDaEMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPO1lBQ0wsSUFBSTtZQUNKLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZQUNaLFdBQVcsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCO1NBQzNDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQVMsRUFBRSxJQUFTO1FBQzdDLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQ2xDLHdEQUF3RDtZQUN4RCxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLFNBQVMsQ0FBQztZQUN4Qyx1RUFBdUU7WUFDdkUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXRDLHlDQUF5QztZQUN6QyxvREFBb0Q7WUFDcEQsdURBQXVEO1lBQ3ZELHlEQUF5RDtZQUN6RCxtRUFBbUU7WUFDbkUsd0VBQXdFO1lBQ3hFLDRDQUE0QztZQUM1QyxNQUFNLFVBQVUsR0FDZCxTQUFTLENBQUMsR0FBRyxLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNsQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztnQkFDOUQsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXBFLGlFQUFpRTtZQUNqRSxJQUFJLFVBQVUsS0FBSyxDQUFDO2dCQUFFLE9BQU8sVUFBVSxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEU7O1dBRUc7UUFDSCxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXR0ZXJGb3JQcm9wIH0gZnJvbSAnLi9jb2x1bW4tcHJvcC1nZXR0ZXJzJztcbmltcG9ydCB7IFNvcnRUeXBlIH0gZnJvbSAnLi4vdHlwZXMvc29ydC50eXBlJztcbmltcG9ydCB7IFNvcnREaXJlY3Rpb24gfSBmcm9tICcuLi90eXBlcy9zb3J0LWRpcmVjdGlvbi50eXBlJztcbmltcG9ydCB7IFNvcnRQcm9wRGlyIH0gZnJvbSAnLi4vdHlwZXMvc29ydC1wcm9wLWRpci50eXBlJztcbi8qKlxuICogR2V0cyB0aGUgbmV4dCBzb3J0IGRpcmVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dFNvcnREaXIoc29ydFR5cGU6IFNvcnRUeXBlLCBjdXJyZW50OiBTb3J0RGlyZWN0aW9uKTogU29ydERpcmVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gIGlmIChzb3J0VHlwZSA9PT0gU29ydFR5cGUuc2luZ2xlKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IFNvcnREaXJlY3Rpb24uYXNjKSB7XG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5kZXNjO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gU29ydERpcmVjdGlvbi5hc2M7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghY3VycmVudCkge1xuICAgICAgcmV0dXJuIFNvcnREaXJlY3Rpb24uYXNjO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gU29ydERpcmVjdGlvbi5hc2MpIHtcbiAgICAgIHJldHVybiBTb3J0RGlyZWN0aW9uLmRlc2M7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBTb3J0RGlyZWN0aW9uLmRlc2MpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIGF2b2lkIFRTNzAzMDogTm90IGFsbCBjb2RlIHBhdGhzIHJldHVybiBhIHZhbHVlLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gZnVlbGQtdWkgb24gNi8yMTZcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9GdWVsSW50ZXJhY3RpdmUvZnVlbC11aS90cmVlL21hc3Rlci9zcmMvcGlwZXMvT3JkZXJCeVxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJCeUNvbXBhcmF0b3IoYTogYW55LCBiOiBhbnkpOiBudW1iZXIge1xuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcpIGEgPSAwO1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcpIGIgPSAwO1xuICBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBpZiAoYSA8IGIpIHJldHVybiAtMTtcbiAgICBpZiAoYSA+IGIpIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGlzTmFOKHBhcnNlRmxvYXQoYSkpIHx8ICFpc0Zpbml0ZShhKSB8fCBpc05hTihwYXJzZUZsb2F0KGIpKSB8fCAhaXNGaW5pdGUoYikpIHtcbiAgICAvLyBDb252ZXJ0IHRvIHN0cmluZyBpbiBjYXNlIG9mIGE9MCBvciBiPTBcbiAgICBhID0gU3RyaW5nKGEpO1xuICAgIGIgPSBTdHJpbmcoYik7XG4gICAgLy8gSXNuJ3QgYSBudW1iZXIgc28gbG93ZXJjYXNlIHRoZSBzdHJpbmcgdG8gcHJvcGVybHkgY29tcGFyZVxuICAgIGlmIChhLnRvTG93ZXJDYXNlKCkgPCBiLnRvTG93ZXJDYXNlKCkpIHJldHVybiAtMTtcbiAgICBpZiAoYS50b0xvd2VyQ2FzZSgpID4gYi50b0xvd2VyQ2FzZSgpKSByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQYXJzZSBzdHJpbmdzIGFzIG51bWJlcnMgdG8gY29tcGFyZSBwcm9wZXJseVxuICAgIGlmIChwYXJzZUZsb2F0KGEpIDwgcGFyc2VGbG9hdChiKSkgcmV0dXJuIC0xO1xuICAgIGlmIChwYXJzZUZsb2F0KGEpID4gcGFyc2VGbG9hdChiKSkgcmV0dXJuIDE7XG4gIH1cblxuICAvLyBlcXVhbCBlYWNoIG90aGVyXG4gIHJldHVybiAwO1xufVxuXG4vKipcbiAqIGNyZWF0ZXMgYSBzaGFsbG93IGNvcHkgb2YgdGhlIGByb3dzYCBpbnB1dCBhbmQgcmV0dXJucyB0aGUgc29ydGVkIGNvcHkuIHRoaXMgZnVuY3Rpb25cbiAqIGRvZXMgbm90IHNvcnQgdGhlIGByb3dzYCBhcmd1bWVudCBpbiBwbGFjZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFJvd3Mocm93czogYW55W10sIGNvbHVtbnM6IGFueVtdLCBkaXJzOiBTb3J0UHJvcERpcltdKTogYW55W10ge1xuICBpZiAoIXJvd3MpIHJldHVybiBbXTtcbiAgaWYgKCFkaXJzIHx8ICFkaXJzLmxlbmd0aCB8fCAhY29sdW1ucykgcmV0dXJuIFsuLi5yb3dzXTtcblxuICAvKipcbiAgICogcmVjb3JkIHRoZSByb3cgb3JkZXJpbmcgb2YgcmVzdWx0cyBmcm9tIHByaW9yIHNvcnQgb3BlcmF0aW9ucyAoaWYgYXBwbGljYWJsZSlcbiAgICogdGhpcyBpcyBuZWNlc3NhcnkgdG8gZ3VhcmFudGVlIHN0YWJsZSBzb3J0aW5nIGJlaGF2aW9yXG4gICAqL1xuICBjb25zdCByb3dUb0luZGV4TWFwID0gbmV3IE1hcDxhbnksIG51bWJlcj4oKTtcbiAgcm93cy5mb3JFYWNoKChyb3csIGluZGV4KSA9PiByb3dUb0luZGV4TWFwLnNldChyb3csIGluZGV4KSk7XG5cbiAgY29uc3QgdGVtcCA9IFsuLi5yb3dzXTtcbiAgY29uc3QgY29scyA9IGNvbHVtbnMucmVkdWNlKChvYmosIGNvbCkgPT4ge1xuICAgIGlmIChjb2wuY29tcGFyYXRvciAmJiB0eXBlb2YgY29sLmNvbXBhcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9ialtjb2wucHJvcF0gPSBjb2wuY29tcGFyYXRvcjtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG4gIC8vIGNhY2hlIHZhbHVlR2V0dGVyIGFuZCBjb21wYXJlRm4gc28gdGhhdCB0aGV5XG4gIC8vIGRvIG5vdCBuZWVkIHRvIGJlIGxvb2tlZC11cCBpbiB0aGUgc29ydCBmdW5jdGlvbiBib2R5XG4gIGNvbnN0IGNhY2hlZERpcnMgPSBkaXJzLm1hcChkaXIgPT4ge1xuICAgIGNvbnN0IHByb3AgPSBkaXIucHJvcDtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcCxcbiAgICAgIGRpcjogZGlyLmRpcixcbiAgICAgIHZhbHVlR2V0dGVyOiBnZXR0ZXJGb3JQcm9wKHByb3ApLFxuICAgICAgY29tcGFyZUZuOiBjb2xzW3Byb3BdIHx8IG9yZGVyQnlDb21wYXJhdG9yXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRlbXAuc29ydChmdW5jdGlvbiAocm93QTogYW55LCByb3dCOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGNhY2hlZERpciBvZiBjYWNoZWREaXJzKSB7XG4gICAgICAvLyBHZXQgcHJvcGVydHkgYW5kIHZhbHVlZ2V0dGVycyBmb3IgY29sdW1uIHRvIGJlIHNvcnRlZFxuICAgICAgY29uc3QgeyBwcm9wLCB2YWx1ZUdldHRlciB9ID0gY2FjaGVkRGlyO1xuICAgICAgLy8gR2V0IEEgYW5kIEIgY2VsbCB2YWx1ZXMgZnJvbSByb3dzIGJhc2VkIG9uIHByb3BlcnRpZXMgb2YgdGhlIGNvbHVtbnNcbiAgICAgIGNvbnN0IHByb3BBID0gdmFsdWVHZXR0ZXIocm93QSwgcHJvcCk7XG4gICAgICBjb25zdCBwcm9wQiA9IHZhbHVlR2V0dGVyKHJvd0IsIHByb3ApO1xuXG4gICAgICAvLyBDb21wYXJlIGZ1bmN0aW9uIGdldHMgZml2ZSBwYXJhbWV0ZXJzOlxuICAgICAgLy8gVHdvIGNlbGwgdmFsdWVzIHRvIGJlIGNvbXBhcmVkIGFzIHByb3BBIGFuZCBwcm9wQlxuICAgICAgLy8gVHdvIHJvd3MgY29ycmVzcG9uZGluZyB0byB0aGUgY2VsbHMgYXMgcm93QSBhbmQgcm93QlxuICAgICAgLy8gRGlyZWN0aW9uIG9mIHRoZSBzb3J0IGZvciB0aGlzIGNvbHVtbiBhcyBTb3J0RGlyZWN0aW9uXG4gICAgICAvLyBDb21wYXJlIGNhbiBiZSBhIHN0YW5kYXJkIEpTIGNvbXBhcmlzb24gZnVuY3Rpb24gKGEsYikgPT4gLTF8MHwxXG4gICAgICAvLyBhcyBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgYXJlIHNpbGVudGx5IGlnbm9yZWQuIFRoZSB3aG9sZSByb3cgYW5kIHNvcnRcbiAgICAgIC8vIGRpcmVjdGlvbiBlbmFibGUgbW9yZSBjb21wbGV4IHNvcnQgbG9naWMuXG4gICAgICBjb25zdCBjb21wYXJpc29uID1cbiAgICAgICAgY2FjaGVkRGlyLmRpciAhPT0gU29ydERpcmVjdGlvbi5kZXNjXG4gICAgICAgICAgPyBjYWNoZWREaXIuY29tcGFyZUZuKHByb3BBLCBwcm9wQiwgcm93QSwgcm93QiwgY2FjaGVkRGlyLmRpcilcbiAgICAgICAgICA6IC1jYWNoZWREaXIuY29tcGFyZUZuKHByb3BBLCBwcm9wQiwgcm93QSwgcm93QiwgY2FjaGVkRGlyLmRpcik7XG5cbiAgICAgIC8vIERvbid0IHJldHVybiAwIHlldCBpbiBjYXNlIG9mIG5lZWRpbmcgdG8gc29ydCBieSBuZXh0IHByb3BlcnR5XG4gICAgICBpZiAoY29tcGFyaXNvbiAhPT0gMCkgcmV0dXJuIGNvbXBhcmlzb247XG4gICAgfVxuXG4gICAgaWYgKCEocm93VG9JbmRleE1hcC5oYXMocm93QSkgJiYgcm93VG9JbmRleE1hcC5oYXMocm93QikpKSByZXR1cm4gMDtcblxuICAgIC8qKlxuICAgICAqIGFsbCBlbHNlIGJlaW5nIGVxdWFsLCBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBvZiB0aGUgcm93cyAoc3RhYmxlIHNvcnQpXG4gICAgICovXG4gICAgcmV0dXJuIHJvd1RvSW5kZXhNYXAuZ2V0KHJvd0EpIDwgcm93VG9JbmRleE1hcC5nZXQocm93QikgPyAtMSA6IDE7XG4gIH0pO1xufVxuIl19