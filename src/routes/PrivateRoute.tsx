/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import useAuth from "contexts/AuthContext/useAuth";
import { Navigate } from "react-router";
export interface IPrivateRouteProps {
	outlet: JSX.Element;
}

function PrivateRoute({ outlet }: IPrivateRouteProps) {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? outlet : <Navigate to="/auth/login" />;
}

export default PrivateRoute;
