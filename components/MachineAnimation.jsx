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
      <video
        autoPlay
        controls={false}
        loop
        muted
        playsInline
        className="machine_animation"
      >
        <source
          src="https://perfect-prerolls.s3.amazonaws.com/Public/Assets/loader-360-animation.mp4"
          className="max-md:hidden"
        />
      </video>
    </motion.div>
  );
};

export default MachineAnimation;
