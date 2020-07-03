import { useEffect, useRef, useState } from 'react';

export const useIO = (options): any => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  const { root, rootMargin, threshold } = options || {};

  useEffect(() => {
    if (elements.length) {
      observer.current = new IntersectionObserver(
        ioEntries => {
          setEntries(ioEntries);
        },
        {
          threshold,
          root,
          rootMargin,
        },
      );

      elements.forEach(element => {
        observer.current.observe(element);
      });
    }
    return () => {
      if (observer.observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, root, rootMargin, threshold]);

  return [observer.current, setElements, entries];
};
