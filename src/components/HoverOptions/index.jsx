import { Fragment, useState } from "react";
import { OptionsContainer } from "./style";

import moreVertImg from "src/assets/moreVert.svg";
import editImg from "src/assets/edit.svg";
import deleteImg from "src/assets/delete.svg";

export const HoverOptions = ({ onClickDelete, onClickEdit }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <OptionsContainer
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      {showMenu ? (
        <Fragment>
          <img src={editImg} alt="Edit" onClick={onClickEdit} />
          <img src={deleteImg} alt="Delete" onClick={onClickDelete} />
        </Fragment>
      ) : (
        <img src={moreVertImg} alt="options" />
      )}
    </OptionsContainer>
  );
};
