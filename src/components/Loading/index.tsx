import AutorenewIcon from '@material-ui/icons/Autorenew';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import {TIME_OUT} from "../../utils/env";
import {useEffect, useState} from "react";

let timeOutInstance: NodeJS.Timeout

function LoadingMask(props: { getData: () => void; }) {
  const [showTimeout, setShowTimeout] = useState(false)

  const handleReGet = () => {
    setShowTimeout(false)
    props.getData()
    handleSetTimeout()
  }

  const handleSetTimeout = () => {
    timeOutInstance = setTimeout(() => {
      setShowTimeout(true)
    }, TIME_OUT)
  }

  useEffect(() => {
    handleSetTimeout()
    return function clear() {
      clearTimeout(timeOutInstance)
    }
  }, [])

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
