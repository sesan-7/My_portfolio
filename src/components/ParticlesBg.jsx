// // import Particles from "react-tsparticles";
// // import { loadSlim } from "tsparticles-slim";

// // export default function ParticlesBg() {
// //   const init = async (engine) => {
// //     await loadSlim(engine);
// //   };

// //   return (
// //     <Particles
// //       init={init}
// //       options={{
// //         fullScreen: false,
// //         particles: {
// //           number: { value: 40 },
// //           color: { value: "#6366f1" },
// //           opacity: { value: 0.15 },
// //           size: { value: 2 },
// //           move: { enable: true, speed: 0.3 },
// //         },
// //       }}
// //       className="absolute inset-0 -z-10"
// //     />
// //   );
// // }

// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// export default function ParticlesBg() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: "transparent",
//         },
//         fpsLimit: 60,
//         particles: {
//           number: {
//             value: 60,
//             density: {
//               enable: true,
//               area: 800,
//             },
//           },
//           color: {
//             value: "#6366f1",
//           },
//           links: {
//             enable: true,
//             color: "#6366f1",
//             distance: 150,
//             opacity: 0.3,
//           },
//           move: {
//             enable: true,
//             speed: 1,
//           },
//           opacity: {
//             value: 0.4,
//           },
//           size: {
//             value: { min: 1, max: 3 },
//           },
//         },
//         detectRetina: true,
//       }}
//       className="absolute inset-0 -z-10"
//     />
//   );
// }

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBg({ theme }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Change particle color based on theme
  const particleColor = theme === "dark" ? "#6366f1" : "#4f46e5"; // indigo shades

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: particleColor },
          links: {
            enable: true,
            color: particleColor,
            distance: 150,
            opacity: 0.25,
            width: 1,
          },
          move: { enable: true, speed: 0.8, outModes: "out" },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10 transition-colors duration-500"
    />
  );
}
