import { motion } from "framer-motion";

const DottedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
        backgroundSize: "25px 25px",
      }}
    />
  );
};

export default DottedBackground;