/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { ButtonStyled } from "./buttonStyled";
import IButton from "./interface/IButton";

export default function Button({ title, onClick }: IButton) {
  return (
    <ButtonStyled type="submit" onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}
