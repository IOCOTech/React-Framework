import { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import INotification from "./interface/INotification";

export default function Notification({ type, message }: INotification) {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={open}
				sx={{ mt: 7 }}
				autoHideDuration={600000}
				onClose={handleClose}>
				<Alert
					elevation={4}
					variant="filled"
					onClose={handleClose}
					severity={type}
					sx={{ width: "100%" }}>
					{message}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
