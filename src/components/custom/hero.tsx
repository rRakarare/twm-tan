import { motion } from "motion/react";
import { useState } from "react";
import TWMIconAnimated from "./twm-icon-animated";

function Hero() {
	const [showSlogan, setShowSlogan] = useState(false);

	return (
		<section className="h-screen w-full flex flex-col items-center justify-center">
			<TWMIconAnimated
				className="size-32 md:size-48"
				onAnimationComplete={() => setShowSlogan(true)}
			/>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={showSlogan ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="text-2xl md:text-4xl text-center mt-8 font-medium"
			>
				Suchst du noch? Oder findest du schon!
			</motion.h1>
		</section>
	);
}

export default Hero;
