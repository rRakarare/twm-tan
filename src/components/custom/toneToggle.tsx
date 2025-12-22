import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

function ToneToggle() {
	const { i18n } = useTranslation();

	const handleChange = (val: "ca" | "fo") => {
		i18n.changeLanguage(val);
	};

	switch (i18n.language) {
		case "ca":
			return <Button onClick={() => handleChange("fo")}>Set to Formal</Button>;

		default:
			return <Button onClick={() => handleChange("ca")}>Set to Casual</Button>;
	}
}

export default ToneToggle;
