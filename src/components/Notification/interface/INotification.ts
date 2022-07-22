import { AlertProps } from "@mui/material";

interface INotification {
	open: boolean;
	type: AlertProps["severity"];
	message: string;
}

export default INotification;
