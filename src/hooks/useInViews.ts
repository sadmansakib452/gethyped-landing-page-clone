import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean `inView`.
 * `inView` becomes true once the element enters the viewport and stays true
 * (one-shot animation — elements don't re-animate on scroll back up).
 *
 * @param threshold  Fraction of element visible before triggering (default 0.15)
 * @param rootMargin Optional margin around root (default "0px 0px -60px 0px")
 */
export function useInView<T extends Element>(
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // one-shot: disconnect after first trigger
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
