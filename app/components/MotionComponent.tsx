import { motion } from "framer-motion"
import { Props } from "next/script"
import { SocialIcon } from "react-social-icons"

export   default function MotionComponent ({}: Props) {
    <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate= {{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      
      className="flex flex-row items-center">
        {/* S O C I A L   I C O N S  */}
        <SocialIcon
          url="https://twitter.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://tiktok.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
}