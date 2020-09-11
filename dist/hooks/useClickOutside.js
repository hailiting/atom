import { useEffect } from "react";
function useClickOutside(ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("click", listener);
        return function () {
            document.removeEventListener("click", listener); // 删除click事件
        };
    }, [ref, handler]);
}
export default useClickOutside;
