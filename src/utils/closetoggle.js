export const closeToggle = (isToggle, setIsToggle, toggleBoxRef, toggleBtnRef) => {
  const clickOutside = e => {
    if (isToggle && !toggleBoxRef.current.contains(e.target) && !toggleBtnRef.current.contains(e.target)) {
      setIsToggle(false);
    }
  };
  document.addEventListener('mousedown', clickOutside);

  return () => {
    document.removeEventListener('mousedown', clickOutside);
  };
};
