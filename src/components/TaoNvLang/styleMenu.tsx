import {Button, Menu, MenuItem} from "@material-ui/core";
import {useState} from "react";

function StyleMenu(props: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [style, setStyle] = useState('日系');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSelect = (style: string) => {
    setStyle(style)
    props.childSetStyle({
      style
    })
  };

  const styleArr = ["日系", "欧美", "韩版", "英伦", "OL风", "学院",
    "淑女", "性感", "复古", "街头", "休闲", "民族", "甜美", "运动", "可爱", "大码", "中老年", "其他"]

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
        {style}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          styleArr.map(item => (
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
