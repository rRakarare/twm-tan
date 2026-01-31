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
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
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

export function SectionImageRight({
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
				<div className="grid grid-cols-1 md:grid-cols-[1fr_30%] gap-8 md:gap-12 items-center">
					<div className="space-y-4 order-2 md:order-1">
						<motion.h2
							variants={itemVariants}
							className="text-3xl md:text-4xl font-bold"
						>
							{heading}
						</motion.h2>

						{subtitle && (
							<motion.p
								variants={itemVariants}
								className="text-lg text-muted-foreground"
							>
								{subtitle}
							</motion.p>
						)}

						<motion.div
							variants={itemVariants}
							className="text-base leading-relaxed"
						>
							{text}
						</motion.div>
					</div>

					<motion.div variants={imageVariants} className="order-1 md:order-2">
						<img
							src={image.src}
							alt={image.alt}
							className="w-full rounded-lg object-cover shadow-lg"
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
