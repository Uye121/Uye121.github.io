import { useEffect } from "react";

export default function useOutsideAlerter(showClosedIcon, setShowClosedIcon, ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (showClosedIcon && ref.current && !ref.current.contains(event.target)) {
        console.log("clicked outside");
        setShowClosedIcon(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showClosedIcon, ref]);
}
