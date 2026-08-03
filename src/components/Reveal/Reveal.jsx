import { motion } from "framer-motion";

/*
  Reveal — the single animation primitive used across every page.
  direction: "up" | "left" | "right" | "zoom" | "none"
  stagger: when true, treats children as a stagger group (pass motion-ready children,
           or just use `as="ul"` with plain <li> — Reveal itself fades the group in).
*/
const variants = {
  up: { hidden: { opacity: 0, y: 42 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -30 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  none: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  amount = 0.2,
  as = "div",
  className,
  stagger = 0,
}) {
  const MotionTag = motion[as] || motion.div;
  const v = variants[direction] || variants.up;

  if (stagger > 0) {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={v}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

// Use inside a Reveal with stagger>0 to animate individual children.
export function RevealItem({ children, className, as = "div", direction = "up" }) {
  const MotionTag = motion[as] || motion.div;
  const v = variants[direction] || variants.up;
  return (
    <MotionTag className={className} variants={v} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionTag>
  );
}
