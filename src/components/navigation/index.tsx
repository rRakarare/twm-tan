import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ToneToggle from "../custom/toneToggle";
import TWMIcon from "../custom/twm-icon";

const services = [
	{
		title: "Sichtbarkeit steigern",
		path: "/leistungen/sichtbarkeit-steigern",
	},
	{ title: "Digitale Werbung", path: "/leistungen/digitale-werbung" },
	{ title: "Webseiten & Branding", path: "/leistungen/webseiten-branding" },
	{ title: "KI & Automatisierung", path: "/leistungen/ki-automatisierung" },
];

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 24,
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.15,
		},
	},
} as const;

function Navigation() {
	const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);

	return (
		<div className="fixed w-full top-5 z-50">
			<div
				onMouseLeave={() => setIsLeistungenOpen(false)}
				className="border p-4 rounded-md mx-auto max-w-3xl bg-background"
			>
				<div className="flex items-center justify-between">
					<Link to="/" onMouseEnter={() => setIsLeistungenOpen(false)}>
						<TWMIcon className="fill-primary size-10" />
					</Link>

					<nav className="flex items-center gap-1">
						<button
							type="button"
							onMouseEnter={() => setIsLeistungenOpen(true)}
							className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-colors"
						>
							Leistungen
						</button>

						<Link
							to="/ueber-uns"
							onMouseEnter={() => setIsLeistungenOpen(false)}
							className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-colors"
						>
							Über uns
						</Link>
						<Link
							to="/partner"
							onMouseEnter={() => setIsLeistungenOpen(false)}
							className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-colors"
						>
							Partner
						</Link>
						<Link
							to="/kontakt"
							onMouseEnter={() => setIsLeistungenOpen(false)}
							className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-colors"
						>
							Kontakt
						</Link>
					</nav>

					<div onMouseEnter={() => setIsLeistungenOpen(false)}>
						<ToneToggle />
					</div>
				</div>

				<AnimatePresence initial={false}>
					{isLeistungenOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
							className="overflow-hidden"
						>
							<motion.div
								initial="hidden"
								animate="show"
								exit="exit"
								transition={{ staggerChildren: 0.08 }}
								className="grid grid-cols-4 gap-3 mt-4 pt-4 border-t"
							>
								{services.map((service, index) => (
									<motion.div
										key={service.path}
										variants={cardVariants}
										transition={{
											delay: index * 0.08,
										}}
									>
										<Link
											to={service.path}
											onClick={() => setIsLeistungenOpen(false)}
											className="block p-4 rounded-md bg-accent/50 hover:bg-accent transition-colors"
										>
											<span className="text-sm font-medium">
												{service.title}
											</span>
										</Link>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default Navigation;
