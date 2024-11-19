import { useEffect } from "react";

export default function useSectionAnimation(className, animationIn, animationOut) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // تشغيل الحركة عندما يظهر نصف القسم
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;

        if (entry.isIntersecting) {
       
          target.classList.add(animationIn);
          target.classList.remove(animationOut);
        } else {
 
          target.classList.remove(animationIn);
          target.classList.add(animationOut);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll(className);

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [className, animationIn, animationOut]);
}
