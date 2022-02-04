import {Button, Menu, MenuItem} from "@material-ui/core";
import {useState} from "react";

function StyleMenu(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState(1);
  const [pageArr, setPageArr] = useState<[number] | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSelect = (page: number) => {
    setPage(page)
    props.childSetPage({
      page
    })
  };

  const handleSetPage = (page: number) => {
    setPage(page)
  }

  return (
    <div className="inline-block">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
        style={{
          color: '#ffffff',
          borderColor: '#ffffff'
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
        {
          pageArr !== null && pageArr.map(item => (
            <MenuItem onClick={handleClose} key={item}>
              <span onClick={() => handleCloseSelect(item)}>{item}</span>
            </MenuItem>
          ))
        }
      </Menu>
    </div>
  )
}

export default StyleMenu
