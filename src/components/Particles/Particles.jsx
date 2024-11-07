// ParticlesComponent.jsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" }, // تغيير `repulse` إلى `connect` لتفعيل الشبكة
        },
        modes: {
          push: { quantity: 4 },
          connect: { // إعداد `connect` لتأثير الشبكة
            distance: 100,
            radius: 200,
            links: {
              opacity: 0.9, // اجعل الشبكة أكثر وضوحًا عند التمرير
            },
          },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 40,
          enable: true, // تأكد من تفعيل الشبكة
          opacity: 1,
          width: 0.3,
        },
        move: {
          direction: "top", // جعل الحركة للأعلى
          enable: true,
          outModes: { default: "out" }, // خروج الجسيمات من الشاشة
          random: true,
          speed: 2,
          straight: true,
        },
        number: { density: { enable: true }, value: 80 },
        opacity: { value: 0.4 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return <Particles className="z" id="tsparticles" options={options} />;
  }

  return null;
};

export default ParticlesComponent;
