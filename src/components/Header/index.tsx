import { IconButton, Tooltip } from '@material-ui/core';
import { toast } from 'react-toastify';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import useDarkMode from 'use-dark-mode';
import { setDarkCss } from '../../utils/utils';
import { useEffect } from 'react';

function Header() {
  const darkMode = useDarkMode(false, {
    storageKey: 'ALL_INFO_DARK_MODE'
  });

  useEffect(() => {
    setDarkCss(!darkMode.value)
  }, [])

  const handleOpenGithub = () => {
    window.open('https://github.com/HuziG');
  };

  const handleOpenEmail = () => {
    toast.info('📧 1067408814@qq.com', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleToggleDark = () => {
    darkMode.toggle()
    setDarkCss(darkMode.value)
  }

  return (
    <div className={'pt-5 px-10 overflow-hidden flex items-center justify-between'}>
      <span className={'text-xl font-bold dark:text-main-title'}>
        🦄 百变信息板
      </span>

      <div className={'flex items-center'}>
        <Tooltip title="邮箱联系">
          <IconButton aria-label="delete" onClick={handleOpenEmail}>
            <EmailIcon className={'dark:text-main-title'} style={{ color: '#333' }} />
          </IconButton>
        </Tooltip>

        <div className={'w-1'} />

        <Tooltip title="GitHub">
          <IconButton aria-label="delete" onClick={handleOpenGithub}>
            <GitHubIcon className={'dark:text-main-title'} style={{ color: '#333' }} />
          </IconButton>
        </Tooltip>

        <div className={'w-1'} />

        <IconButton aria-label="delete" onClick={handleToggleDark}>
          {
            darkMode.value ?
              <NightsStayIcon className={'dark:text-main-title'} style={{ color: '#333' }} />
              :
              <Brightness7Icon className={'dark:text-main-title'} style={{ color: '#333' }} />
          }

        </IconButton>
      </div>
    </div>
  );
}

export default Header;
