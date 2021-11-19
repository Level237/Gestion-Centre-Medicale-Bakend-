import { columnsByPin, columnsTotalWidth } from './column';
/**
 * Calculates the Total Flex Grow
 */
export function getTotalFlexGrow(columns) {
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
export function adjustColumnWidths(allColumns, expectedWidth) {
    const columnsWidth = columnsTotalWidth(allColumns);
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    const hasMinWidth = {};
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
export function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
        return c.canAutoResize !== false;
    });
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    let additionWidthPerColumn = 0;
    let exceedsWindow = false;
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    let remainingWidth = expectedWidth - contentWidth;
    const columnsProcessed = [];
    const remainingWidthLimit = 1; // when to stop
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9tYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFM0Q7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBYztJQUM3QyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFFdEIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7UUFDdkIsYUFBYSxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxVQUFlLEVBQUUsYUFBa0I7SUFDcEUsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRTdDLElBQUksWUFBWSxLQUFLLGFBQWEsRUFBRTtRQUNsQyxZQUFZLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUN6RDtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFDLFdBQWdCLEVBQUUsUUFBYSxFQUFFLGFBQWtCO0lBQ3ZFLDZFQUE2RTtJQUM3RSxLQUFLLE1BQU0sSUFBSSxJQUFJLFdBQVcsRUFBRTtRQUM5QixLQUFLLE1BQU0sTUFBTSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDekIsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLGFBQWEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDbEI7U0FDRjtLQUNGO0lBRUQsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUU5QiwwREFBMEQ7SUFDMUQsR0FBRztRQUNELE1BQU0saUJBQWlCLEdBQUcsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUN6RCxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLEtBQUssTUFBTSxJQUFJLElBQUksV0FBVyxFQUFFO1lBQzlCLEtBQUssTUFBTSxNQUFNLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QywwRUFBMEU7Z0JBQzFFLElBQUksTUFBTSxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3JELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztvQkFDcEUsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRTt3QkFDL0QsY0FBYyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO3dCQUM3QyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBQy9CLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO3FCQUNqQzt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztxQkFDekI7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0YsUUFBUSxjQUFjLEtBQUssQ0FBQyxFQUFFO0FBQ2pDLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxVQUFpQixFQUNqQixhQUFxQixFQUNyQixRQUFnQixFQUNoQixVQUFtQixFQUNuQixrQkFBMEIsR0FBRztJQUU3QixNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNuRixPQUFPLENBQUMsQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxNQUFNLE1BQU0sSUFBSSxlQUFlLEVBQUU7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2xDO0tBQ0Y7SUFFRCxJQUFJLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUMvQixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDMUIsSUFBSSxZQUFZLEdBQUcsZUFBZSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoRSxJQUFJLGNBQWMsR0FBRyxhQUFhLEdBQUcsWUFBWSxDQUFDO0lBQ2xELE1BQU0sZ0JBQWdCLEdBQVUsRUFBRSxDQUFDO0lBQ25DLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZTtJQUU5Qyw4QkFBOEI7SUFDOUIsR0FBRztRQUNELHNCQUFzQixHQUFHLGNBQWMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ2pFLGFBQWEsR0FBRyxZQUFZLElBQUksYUFBYSxDQUFDO1FBRTlDLEtBQUssTUFBTSxNQUFNLElBQUksZUFBZSxFQUFFO1lBQ3BDLElBQUksYUFBYSxJQUFJLFVBQVUsRUFBRTtnQkFDL0IsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksZUFBZSxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNMLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxlQUFlLENBQUMsR0FBRyxzQkFBc0IsQ0FBQztnQkFFM0UsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNoRCxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBQy9CLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDL0I7cUJBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUN2RCxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7b0JBQy9CLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQ3hCO2FBQ0Y7WUFFRCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQztRQUVELFlBQVksR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsY0FBYyxHQUFHLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDOUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDM0QsUUFBUSxjQUFjLEdBQUcsbUJBQW1CLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDakYsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBQyxlQUFzQixFQUFFLGdCQUF1QjtJQUM3RSxLQUFLLE1BQU0sTUFBTSxJQUFJLGdCQUFnQixFQUFFO1FBQ3JDLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbEM7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBQyxVQUFlLEVBQUUsa0JBQTBCLEdBQUc7SUFDckUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLEtBQUssTUFBTSxNQUFNLElBQUksVUFBVSxFQUFFO1FBQy9CLFlBQVksSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLGVBQWUsQ0FBQztLQUNqRDtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2x1bW5zQnlQaW4sIGNvbHVtbnNUb3RhbFdpZHRoIH0gZnJvbSAnLi9jb2x1bW4nO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIFRvdGFsIEZsZXggR3Jvd1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxGbGV4R3Jvdyhjb2x1bW5zOiBhbnlbXSkge1xuICBsZXQgdG90YWxGbGV4R3JvdyA9IDA7XG5cbiAgZm9yIChjb25zdCBjIG9mIGNvbHVtbnMpIHtcbiAgICB0b3RhbEZsZXhHcm93ICs9IGMuZmxleEdyb3cgfHwgMDtcbiAgfVxuXG4gIHJldHVybiB0b3RhbEZsZXhHcm93O1xufVxuXG4vKipcbiAqIEFkanVzdHMgdGhlIGNvbHVtbiB3aWR0aHMuXG4gKiBJbnNwaXJlZCBieTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZpeGVkLWRhdGEtdGFibGUvYmxvYi9tYXN0ZXIvc3JjL0ZpeGVkRGF0YVRhYmxlV2lkdGhIZWxwZXIuanNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdENvbHVtbldpZHRocyhhbGxDb2x1bW5zOiBhbnksIGV4cGVjdGVkV2lkdGg6IGFueSkge1xuICBjb25zdCBjb2x1bW5zV2lkdGggPSBjb2x1bW5zVG90YWxXaWR0aChhbGxDb2x1bW5zKTtcbiAgY29uc3QgdG90YWxGbGV4R3JvdyA9IGdldFRvdGFsRmxleEdyb3coYWxsQ29sdW1ucyk7XG4gIGNvbnN0IGNvbHNCeUdyb3VwID0gY29sdW1uc0J5UGluKGFsbENvbHVtbnMpO1xuXG4gIGlmIChjb2x1bW5zV2lkdGggIT09IGV4cGVjdGVkV2lkdGgpIHtcbiAgICBzY2FsZUNvbHVtbnMoY29sc0J5R3JvdXAsIGV4cGVjdGVkV2lkdGgsIHRvdGFsRmxleEdyb3cpO1xuICB9XG59XG5cbi8qKlxuICogUmVzaXplcyBjb2x1bW5zIGJhc2VkIG9uIHRoZSBmbGV4R3JvdyBwcm9wZXJ0eSwgd2hpbGUgcmVzcGVjdGluZyBtYW51YWxseSBzZXQgd2lkdGhzXG4gKi9cbmZ1bmN0aW9uIHNjYWxlQ29sdW1ucyhjb2xzQnlHcm91cDogYW55LCBtYXhXaWR0aDogYW55LCB0b3RhbEZsZXhHcm93OiBhbnkpIHtcbiAgLy8gY2FsY3VsYXRlIHRvdGFsIHdpZHRoIGFuZCBmbGV4Z3JvdyBwb2ludHMgZm9yIGNvdWx1bW5zIHRoYXQgY2FuIGJlIHJlc2l6ZWRcbiAgZm9yIChjb25zdCBhdHRyIGluIGNvbHNCeUdyb3VwKSB7XG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sc0J5R3JvdXBbYXR0cl0pIHtcbiAgICAgIGlmICghY29sdW1uLmNhbkF1dG9SZXNpemUpIHtcbiAgICAgICAgbWF4V2lkdGggLT0gY29sdW1uLndpZHRoO1xuICAgICAgICB0b3RhbEZsZXhHcm93IC09IGNvbHVtbi5mbGV4R3JvdyA/IGNvbHVtbi5mbGV4R3JvdyA6IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4ud2lkdGggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhc01pbldpZHRoID0ge307XG4gIGxldCByZW1haW5pbmdXaWR0aCA9IG1heFdpZHRoO1xuXG4gIC8vIHJlc2l6ZSBjb2x1bW5zIHVudGlsIG5vIHdpZHRoIGlzIGxlZnQgdG8gYmUgZGlzdHJpYnV0ZWRcbiAgZG8ge1xuICAgIGNvbnN0IHdpZHRoUGVyRmxleFBvaW50ID0gcmVtYWluaW5nV2lkdGggLyB0b3RhbEZsZXhHcm93O1xuICAgIHJlbWFpbmluZ1dpZHRoID0gMDtcblxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBjb2xzQnlHcm91cCkge1xuICAgICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sc0J5R3JvdXBbYXR0cl0pIHtcbiAgICAgICAgLy8gaWYgdGhlIGNvbHVtbiBjYW4gYmUgcmVzaXplIGFuZCBpdCBoYXNuJ3QgcmVhY2hlZCBpdHMgbWluaW11bSB3aWR0aCB5ZXRcbiAgICAgICAgaWYgKGNvbHVtbi5jYW5BdXRvUmVzaXplICYmICFoYXNNaW5XaWR0aFtjb2x1bW4ucHJvcF0pIHtcbiAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IGNvbHVtbi53aWR0aCArIGNvbHVtbi5mbGV4R3JvdyAqIHdpZHRoUGVyRmxleFBvaW50O1xuICAgICAgICAgIGlmIChjb2x1bW4ubWluV2lkdGggIT09IHVuZGVmaW5lZCAmJiBuZXdXaWR0aCA8IGNvbHVtbi5taW5XaWR0aCkge1xuICAgICAgICAgICAgcmVtYWluaW5nV2lkdGggKz0gbmV3V2lkdGggLSBjb2x1bW4ubWluV2lkdGg7XG4gICAgICAgICAgICBjb2x1bW4ud2lkdGggPSBjb2x1bW4ubWluV2lkdGg7XG4gICAgICAgICAgICBoYXNNaW5XaWR0aFtjb2x1bW4ucHJvcF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2x1bW4ud2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKHJlbWFpbmluZ1dpZHRoICE9PSAwKTtcbn1cblxuLyoqXG4gKiBGb3JjZXMgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW5zIHRvXG4gKiBkaXN0cmlidXRlIGVxdWFsbHkgYnV0IG92ZXJmbG93aW5nIHdoZW4gbmVjZXNzYXJ5XG4gKlxuICogUnVsZXM6XG4gKlxuICogIC0gSWYgY29tYmluZWQgd2l0aHMgYXJlIGxlc3MgdGhhbiB0aGUgdG90YWwgd2lkdGggb2YgdGhlIGdyaWQsXG4gKiAgICBwcm9wb3J0aW9uIHRoZSB3aWR0aHMgZ2l2ZW4gdGhlIG1pbiAvIG1heCAvIG5vcm1hbCB3aWR0aHMgdG8gZmlsbCB0aGUgd2lkdGguXG4gKlxuICogIC0gSWYgdGhlIGNvbWJpbmVkIHdpZHRocywgZXhjZWVkIHRoZSB0b3RhbCB3aWR0aCBvZiB0aGUgZ3JpZCxcbiAqICAgIHVzZSB0aGUgc3RhbmRhcmQgd2lkdGhzLlxuICpcbiAqICAtIElmIGEgY29sdW1uIGlzIHJlc2l6ZWQsIGl0IHNob3VsZCBhbHdheXMgdXNlIHRoYXQgd2lkdGhcbiAqXG4gKiAgLSBUaGUgcHJvcG9ydGlvbmFsIHdpZHRocyBzaG91bGQgbmV2ZXIgZmFsbCBiZWxvdyBtaW4gc2l6ZSBpZiBzcGVjaWZpZWQuXG4gKlxuICogIC0gSWYgdGhlIGdyaWQgc3RhcnRzIG9mZiBzbWFsbCBidXQgdGhlbiBiZWNvbWVzIGdyZWF0ZXIgdGhhbiB0aGUgc2l6ZSAoICsgLyAtIClcbiAqICAgIHRoZSB3aWR0aCBzaG91bGQgdXNlIHRoZSBvcmlnaW5hbCB3aWR0aDsgbm90IHRoZSBuZXdseSBwcm9wb3J0aW9uZWQgd2lkdGhzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VGaWxsQ29sdW1uV2lkdGhzKFxuICBhbGxDb2x1bW5zOiBhbnlbXSxcbiAgZXhwZWN0ZWRXaWR0aDogbnVtYmVyLFxuICBzdGFydElkeDogbnVtYmVyLFxuICBhbGxvd0JsZWVkOiBib29sZWFuLFxuICBkZWZhdWx0Q29sV2lkdGg6IG51bWJlciA9IDMwMFxuKSB7XG4gIGNvbnN0IGNvbHVtbnNUb1Jlc2l6ZSA9IGFsbENvbHVtbnMuc2xpY2Uoc3RhcnRJZHggKyAxLCBhbGxDb2x1bW5zLmxlbmd0aCkuZmlsdGVyKGMgPT4ge1xuICAgIHJldHVybiBjLmNhbkF1dG9SZXNpemUgIT09IGZhbHNlO1xuICB9KTtcblxuICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zVG9SZXNpemUpIHtcbiAgICBpZiAoIWNvbHVtbi4kJG9sZFdpZHRoKSB7XG4gICAgICBjb2x1bW4uJCRvbGRXaWR0aCA9IGNvbHVtbi53aWR0aDtcbiAgICB9XG4gIH1cblxuICBsZXQgYWRkaXRpb25XaWR0aFBlckNvbHVtbiA9IDA7XG4gIGxldCBleGNlZWRzV2luZG93ID0gZmFsc2U7XG4gIGxldCBjb250ZW50V2lkdGggPSBnZXRDb250ZW50V2lkdGgoYWxsQ29sdW1ucywgZGVmYXVsdENvbFdpZHRoKTtcbiAgbGV0IHJlbWFpbmluZ1dpZHRoID0gZXhwZWN0ZWRXaWR0aCAtIGNvbnRlbnRXaWR0aDtcbiAgY29uc3QgY29sdW1uc1Byb2Nlc3NlZDogYW55W10gPSBbXTtcbiAgY29uc3QgcmVtYWluaW5nV2lkdGhMaW1pdCA9IDE7IC8vIHdoZW4gdG8gc3RvcFxuXG4gIC8vIFRoaXMgbG9vcCB0YWtlcyBjYXJlIG9mIHRoZVxuICBkbyB7XG4gICAgYWRkaXRpb25XaWR0aFBlckNvbHVtbiA9IHJlbWFpbmluZ1dpZHRoIC8gY29sdW1uc1RvUmVzaXplLmxlbmd0aDtcbiAgICBleGNlZWRzV2luZG93ID0gY29udGVudFdpZHRoID49IGV4cGVjdGVkV2lkdGg7XG5cbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zVG9SZXNpemUpIHtcbiAgICAgIGlmIChleGNlZWRzV2luZG93ICYmIGFsbG93QmxlZWQpIHtcbiAgICAgICAgY29sdW1uLndpZHRoID0gY29sdW1uLiQkb2xkV2lkdGggfHwgY29sdW1uLndpZHRoIHx8IGRlZmF1bHRDb2xXaWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1NpemUgPSAoY29sdW1uLndpZHRoIHx8IGRlZmF1bHRDb2xXaWR0aCkgKyBhZGRpdGlvbldpZHRoUGVyQ29sdW1uO1xuXG4gICAgICAgIGlmIChjb2x1bW4ubWluV2lkdGggJiYgbmV3U2l6ZSA8IGNvbHVtbi5taW5XaWR0aCkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5taW5XaWR0aDtcbiAgICAgICAgICBjb2x1bW5zUHJvY2Vzc2VkLnB1c2goY29sdW1uKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2x1bW4ubWF4V2lkdGggJiYgbmV3U2l6ZSA+IGNvbHVtbi5tYXhXaWR0aCkge1xuICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5tYXhXaWR0aDtcbiAgICAgICAgICBjb2x1bW5zUHJvY2Vzc2VkLnB1c2goY29sdW1uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGggPSBuZXdTaXplO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi53aWR0aCA9IE1hdGgubWF4KDAsIGNvbHVtbi53aWR0aCk7XG4gICAgfVxuXG4gICAgY29udGVudFdpZHRoID0gZ2V0Q29udGVudFdpZHRoKGFsbENvbHVtbnMpO1xuICAgIHJlbWFpbmluZ1dpZHRoID0gZXhwZWN0ZWRXaWR0aCAtIGNvbnRlbnRXaWR0aDtcbiAgICByZW1vdmVQcm9jZXNzZWRDb2x1bW5zKGNvbHVtbnNUb1Jlc2l6ZSwgY29sdW1uc1Byb2Nlc3NlZCk7XG4gIH0gd2hpbGUgKHJlbWFpbmluZ1dpZHRoID4gcmVtYWluaW5nV2lkdGhMaW1pdCAmJiBjb2x1bW5zVG9SZXNpemUubGVuZ3RoICE9PSAwKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHByb2Nlc3NlZCBjb2x1bW5zIGZyb20gdGhlIGN1cnJlbnQgYWN0aXZlIGNvbHVtbnMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZVByb2Nlc3NlZENvbHVtbnMoY29sdW1uc1RvUmVzaXplOiBhbnlbXSwgY29sdW1uc1Byb2Nlc3NlZDogYW55W10pIHtcbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1uc1Byb2Nlc3NlZCkge1xuICAgIGNvbnN0IGluZGV4ID0gY29sdW1uc1RvUmVzaXplLmluZGV4T2YoY29sdW1uKTtcbiAgICBjb2x1bW5zVG9SZXNpemUuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW5zXG4gKi9cbmZ1bmN0aW9uIGdldENvbnRlbnRXaWR0aChhbGxDb2x1bW5zOiBhbnksIGRlZmF1bHRDb2xXaWR0aDogbnVtYmVyID0gMzAwKTogbnVtYmVyIHtcbiAgbGV0IGNvbnRlbnRXaWR0aCA9IDA7XG5cbiAgZm9yIChjb25zdCBjb2x1bW4gb2YgYWxsQ29sdW1ucykge1xuICAgIGNvbnRlbnRXaWR0aCArPSBjb2x1bW4ud2lkdGggfHwgZGVmYXVsdENvbFdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRXaWR0aDtcbn1cbiJdfQ==