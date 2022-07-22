/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Company Name (https://www.domain.com)
 *  App name is a trademark of Company Name(Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/
import Notification from "components/Notification/Notification";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="container">
      <Notification open={true} type="info" message="Sucess" />
      <img
        className="logo"
        src="https://ioco.tech/wp-content/uploads/2022/02/iOCO.png"
        alt="error"
      />
    </div>
  );
}
