import AutorenewIcon from '@material-ui/icons/Autorenew';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import {TIME_OUT} from "../../utils/env";
import {useEffect, useState} from "react";

function LoadingMask(props: { getData: () => void; }) {
  const [showTimeout, setShowTimeout] = useState(false)

  useEffect(() => {
    handleSetTimeout()
  }, [])

  const handleReGet = () => {
    setShowTimeout(false)
    props.getData()
    handleSetTimeout()
  }

  const handleSetTimeout = () => {
    setTimeout(() => {
      setShowTimeout(true)
    }, TIME_OUT)
  }

  return (
    <div
      className={
        'pt-10 flex ' +
        'justify-center items-center rounded-md'
      }
    >
      {
        showTimeout ?
          <div>
            <Button startIcon={<RefreshIcon/>} color="primary" onClick={handleReGet}>重新请求</Button>
          </div> :
          <AutorenewIcon className={'animate-spin text-indigo-600'} style={{fontSize: '4rem'}}/>
      }
    </div>
  );
}

export default LoadingMask;
