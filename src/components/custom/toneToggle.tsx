import { useTranslation } from "react-i18next";
import { AudioLines } from "../animate-ui/icons/audio-lines";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Button } from "../ui/button";

function ToneToggle() {
	const { i18n } = useTranslation();

	const handleChange = (val: "ca" | "fo") => {
		i18n.changeLanguage(val);
	};

	switch (i18n.language) {
		case "ca":
			return (
				<AnimateIcon animateOnHover>
					<Button onClick={() => handleChange("fo")}>
						<AudioLines />
					</Button>
				</AnimateIcon>
			);

		default:
			return (
				<AnimateIcon animateOnHover>
					<Button onClick={() => handleChange("ca")}>
						<AudioLines />
					</Button>
				</AnimateIcon>
			);
	}
}

export default ToneToggle;
