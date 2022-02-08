import AutorenewIcon from '@material-ui/icons/Autorenew';

function LoadingMask() {
  return  (
    <div className={'absolute z-50 t-0 l-0 bg-opacity-50 bg-black w-full h-full flex justify-center items-center'}>
      <AutorenewIcon className={'animate-spin text-indigo-600'} style={{ fontSize: '4rem' }} />
    </div>
  )
}

export default LoadingMask
