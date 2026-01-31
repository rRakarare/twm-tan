import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionProps {
	image: {
		src: string;
		alt: string;
	};
	heading: string;
	subtitle?: string;
	text: string | React.ReactNode;
	className?: string;
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
} as const;

const imageVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
} as const;

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
} as const;

export function SectionCentered({
	image,
	heading,
	subtitle,
	text,
	className,
}: SectionProps) {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariants}
			className={cn("py-16 md:py-24", className)}
		>
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center text-center max-w-3xl mx-auto">
					<motion.div variants={imageVariants} className="mb-8">
						<img
							src={image.src}
							alt={image.alt}
							className="rounded-lg object-cover shadow-lg max-w-md w-full"
						/>
					</motion.div>

					<motion.h2
						variants={itemVariants}
						className="text-3xl md:text-4xl font-bold"
					>
						{heading}
					</motion.h2>

					{subtitle && (
						<motion.p
							variants={itemVariants}
							className="text-lg text-muted-foreground mt-4"
						>
							{subtitle}
						</motion.p>
					)}

					<motion.div
						variants={itemVariants}
						className="text-base leading-relaxed mt-6"
					>
						{text}
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
