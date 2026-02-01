import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ToneToggle from "../custom/toneToggle";
import TWMIcon from "../custom/twm-icon";
import MobileNav from "./mobile-nav";
import { services, navLinks } from "./nav-data";

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
		<>
			{/* Mobile Navigation */}
			<MobileNav />

			{/* Desktop Navigation */}
			<div className="hidden md:block fixed w-full top-5 z-50">
				<div
					onMouseLeave={() => setIsLeistungenOpen(false)}
					className="border p-4 rounded-md mx-auto max-w-4xl bg-background"
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

							{navLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									onMouseEnter={() => setIsLeistungenOpen(false)}
									className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none transition-colors"
								>
									{link.title}
								</Link>
							))}
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
									{services.map((service, index) => {
										const Icon = service.icon;
										return (
											<motion.div
												key={service.href}
												variants={cardVariants}
												transition={{
													delay: index * 0.08,
												}}
											>
												<div className="p-4 rounded-md bg-foreground/5 border hover:bg-primary/40 transition-colors">
													{/* Header with icon and title */}
													<Link
														to={service.href}
														onClick={() => setIsLeistungenOpen(false)}
														className="flex items-center gap-2 mb-3 group"
													>
														<Icon className="size-5 text-primary" />
														<span className="text-sm font-medium group-hover:text-primary transition-colors">
															{service.title}
														</span>
													</Link>

													{/* Sublinks grid */}
													<div className="grid grid-cols-2 gap-x-4 gap-y-1">
														{service.sublinks.map((sublink) => (
															<a
																key={sublink.anchor}
																href={`${service.href}#${sublink.anchor}`}
																onClick={() => setIsLeistungenOpen(false)}
																className="text-xs text-muted-foreground hover:text-primary hover:underline transition-colors truncate"
															>
																{sublink.label}
															</a>
														))}
													</div>
												</div>
											</motion.div>
										);
									})}
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}

export default Navigation;
