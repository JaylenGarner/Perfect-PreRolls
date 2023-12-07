"client component";

import { motion } from "framer-motion";

const MachineAnimation = () => {
  return (
    <motion.div
      className="animation_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video autoPlay loop muted playsInline className="machine_animation">
        <source
          src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/animation-test.mp4"
          type="video/mp4"
          className="max-md:hidden"
        />
      </video>
    </motion.div>
  );
};

export default MachineAnimation;
