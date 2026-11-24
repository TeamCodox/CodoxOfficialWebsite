import {
  Code2,
  Compass,
  PencilRuler,
  Rocket,
  ShieldCheck,
} from "lucide-react";

/**
 * 5-Step Strategic Delivery Workflow.
 */
export const WORKFLOW = [
  {
    number: "01",
    icon: Compass,
    code: "// workflow.discovery()",
    title: "Discovery & Strategy",
    description:
      "We learn about your vision, goals, and users, then turn every insight into a clear and focused roadmap.",
  },
  {
    number: "02",
    icon: PencilRuler,
    code: "// workflow.design()",
    title: "Creative Design",
    description:
      "We shape thoughtful experiences and polished visual systems that feel distinctive, clear, and easy to use.",
  },
  {
    number: "03",
    icon: Code2,
    code: "// workflow.development()",
    title: "Agile Development",
    description:
      "We build robust, scalable products with clean code, modern technology, and steady progress you can see.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    code: "// workflow.testing()",
    title: "Quality Assurance",
    description:
      "We test every detail for performance, accessibility, security, and a consistently excellent experience.",
  },
  {
    number: "05",
    icon: Rocket,
    code: "// workflow.launch()",
    title: "Launch & Optimize",
    description:
      "We deliver a smooth launch, measure real impact, and keep improving until your product performs at its best.",
  },
];
