import {Button, Menu, MenuItem} from '@material-ui/core';
import React, {forwardRef, useImperativeHandle, useState} from 'react';

function StylePageMenu(props: any, ref: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState(1);
  const [pageArr, setPageArr] = useState<number[] | null>(null);

  useImperativeHandle(ref, () => ({
    handleSetPage: (totalPage: number) => {
      const array = Array.from(Array(totalPage)).fill('');
      setPageArr(array);
    },
  }));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSelect = () => {
    setPage(page);
    props.childSetPage({
      page,
    });
  };

  return (
    <div className="inline-block">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
        style={{
          color: '#ffffff',
          borderColor: '#ffffff',
        }}
      >
        {page}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pageArr !== null &&
          pageArr.map((item, index) => (
            <MenuItem onClick={handleClose} key={item}>
              <span onClick={() => {
                setPage(index + 1)
                handleCloseSelect()
              }}>{index + 1}</span>
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}

export default forwardRef(StylePageMenu);
