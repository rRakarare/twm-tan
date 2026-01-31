import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import TWMIcon from "../custom/twm-icon";
import ToneToggle from "../custom/toneToggle";
import { services, navLinks } from "./nav-data";

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
} as const;

const drawerVariants = {
	hidden: { x: "-100%" },
	visible: {
		x: 0,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 30,
		},
	},
	exit: {
		x: "-100%",
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 30,
		},
	},
} as const;

const linkContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
} as const;

const linkVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.3 },
	},
	exit: {
		opacity: 0,
		x: -20,
		transition: { duration: 0.2 },
	},
} as const;

const sublinksVariants = {
	hidden: { height: 0, opacity: 0 },
	visible: {
		height: "auto" as const,
		opacity: 1,
		transition: {
			height: { duration: 0.3 },
			opacity: { duration: 0.2, delay: 0.1 },
		},
	},
	exit: {
		height: 0,
		opacity: 0,
		transition: {
			height: { duration: 0.2 },
			opacity: { duration: 0.1 },
		},
	},
} as const;

function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLeistungenExpanded, setIsLeistungenExpanded] = useState(false);

	const closeDrawer = () => {
		setIsOpen(false);
		setIsLeistungenExpanded(false);
	};

	return (
		<div className="md:hidden fixed w-full top-0 z-50">
			{/* Mobile Header */}
			<div className="flex items-center justify-between p-4 bg-background border-b">
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="p-2 hover:bg-accent rounded-md transition-colors"
					aria-label="Open menu"
				>
					<Menu className="size-6" />
				</button>

				<Link to="/" onClick={closeDrawer}>
					<TWMIcon className="fill-primary size-8" />
				</Link>
			</div>

			{/* Drawer Overlay & Content */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							variants={backdropVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							onClick={closeDrawer}
							className="fixed inset-0 bg-black/50 z-40"
						/>

						{/* Drawer */}
						<motion.div
							variants={drawerVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="fixed top-0 left-0 h-full w-[280px] bg-background z-50 shadow-xl"
						>
							{/* Drawer Header */}
							<div className="flex items-center justify-between p-4 border-b">
								<Link to="/" onClick={closeDrawer}>
									<TWMIcon className="fill-primary size-8" />
								</Link>
								<button
									type="button"
									onClick={closeDrawer}
									className="p-2 hover:bg-accent rounded-md transition-colors"
									aria-label="Close menu"
								>
									<X className="size-6" />
								</button>
							</div>

							{/* Nav Links */}
							<motion.nav
								variants={linkContainerVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="p-4 space-y-1"
							>
								{/* Leistungen with expandable sublinks */}
								<motion.div variants={linkVariants}>
									<button
										type="button"
										onClick={() =>
											setIsLeistungenExpanded(!isLeistungenExpanded)
										}
										className="flex items-center justify-between w-full p-3 text-left font-medium rounded-md hover:bg-accent transition-colors"
									>
										<span>Leistungen</span>
										<motion.span
											animate={{ rotate: isLeistungenExpanded ? 180 : 0 }}
											transition={{ duration: 0.2 }}
										>
											<ChevronDown className="size-5" />
										</motion.span>
									</button>

									<AnimatePresence>
										{isLeistungenExpanded && (
											<motion.div
												variants={sublinksVariants}
												initial="hidden"
												animate="visible"
												exit="exit"
												className="overflow-hidden"
											>
												<div className="pl-4 space-y-1 mt-1">
													{services.map((service) => {
														const Icon = service.icon;
														return (
															<Link
																key={service.href}
																to={service.href}
																onClick={closeDrawer}
																className="flex items-center gap-3 p-3 text-sm rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
															>
																<Icon className="size-4" />
																<span>{service.title}</span>
															</Link>
														);
													})}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>

								{/* Other nav links */}
								{navLinks.map((link) => (
									<motion.div key={link.href} variants={linkVariants}>
										<Link
											to={link.href}
											onClick={closeDrawer}
											className="block p-3 font-medium rounded-md hover:bg-accent transition-colors"
										>
											{link.title}
										</Link>
									</motion.div>
								))}

								{/* Tone Toggle */}
								<motion.div variants={linkVariants} className="pt-4 border-t">
									<div className="p-3">
										<ToneToggle />
									</div>
								</motion.div>
							</motion.nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

export default MobileNav;
