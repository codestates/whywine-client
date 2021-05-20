import { useRef, useEffect, useCallback } from "react";

// * const element = useScrollFadeIn([direction], [duration], [delay]);
// * direction(string): 엘리먼트가 나오는 방향 (up, down, left, right) default value = 'up'
// * duration(number): 애니메이션의 총 동작 시간. second 단위 default value = 1
// * delay(number): 애니메이션 지연 시간. second 단위 default value = 0

const UseScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const element: any = useRef();

  const handleDirection = (name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    console.log(element);
    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default UseScrollFadeIn;
