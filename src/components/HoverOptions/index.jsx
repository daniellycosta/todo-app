import { Fragment, useState } from "react";
import { OptionsContainer } from "./style";

import moreVertImg from "src/assets/moreVert.svg";
import editImg from "src/assets/edit.svg";
import deleteImg from "src/assets/delete.svg";

export const HoverOptions = ({
  onClickDelete,
  onClickEdit,
  disableDelete = false,
  disableEdit = false,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <OptionsContainer
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      {showMenu ? (
        <Fragment>
          <button disabled={disableEdit} onClick={onClickEdit}>
            <img src={editImg} alt="Edit" />
          </button>
          <button disabled={disableDelete} onClick={onClickDelete}>
            <img src={deleteImg} alt="Delete" />
          </button>
        </Fragment>
      ) : (
        <img src={moreVertImg} alt="options" />
      )}
    </OptionsContainer>
  );
};
