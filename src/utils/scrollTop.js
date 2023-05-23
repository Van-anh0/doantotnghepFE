export const scrollToTop = (behavior) => {
  window.scrollTo({
    top: 0,
    behavior: behavior || 'smooth',
  });
};

export const scrollToElement = (element, scrollSet) => {
  //The value of the distance you want to roll more above Element
  const scrollOffset = scrollSet;
  if (element) {
    const topPos = element.offsetTop - scrollOffset;
    window.scrollTo({ top: topPos, behavior: 'smooth' });
  }
};
