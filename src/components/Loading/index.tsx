import AutorenewIcon from '@material-ui/icons/Autorenew';

function LoadingMask() {
  return (
    <div
      className={
        'absolute z-50 t-0 l-0 w-full h-full flex ' +
        'justify-center items-center rounded-md'
      }
    >
      <AutorenewIcon className={'animate-spin text-indigo-600'} style={{fontSize: '4rem'}}/>
    </div>
  );
}

export default LoadingMask;
