import {IconButton, Tooltip} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import {toast} from "react-toastify";

function Header() {
  const handleOpenGithub = () => {
    window.open('https://github.com/HuziG')
  }

  const handleOpenEmail = () => {
    toast.info('📧 1067408814@qq.com', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  return <div className={'pt-5 px-16 overflow-hidden flex items-center justify-between'}>
    <span className={'text-xl font-bold'}>聚合信息板</span>

    <div className={'float-right'}>
      <Tooltip title="邮箱联系">
        <IconButton aria-label="delete" className={'mr-5'} onClick={handleOpenEmail}>
          <EmailIcon style={{color: '#333 '}}/>
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub">
        <IconButton aria-label="delete" onClick={handleOpenGithub}>
          <GitHubIcon style={{color: '#333 '}}/>
        </IconButton>
      </Tooltip>
    </div>
  </div>
}

export default Header
