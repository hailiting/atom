import { useState, useEffect } from "react";
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        var handler = window.setTimeout(function () {
            setDebouncedValue(value); // 一定时间之后更新value值
        }, delay);
        return function () {
            clearInterval(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
export default useDebounce;
