import { useSelector } from 'react-redux';

function DragTag() {
  const show = useSelector((state: any) => state.appReducer.editMode);

  return (
    <div>
      {show && (
        <div
          className={
            'p-3 inline-block bg-gray-400 hover:bg-gray-300 ' +
            'rounded-xl transition-all cursor-pointer z-60 shadow'
          }
        >
          <div className={'border-r-2 border-b-2 border-gray-900 w-3 h-3'} />
        </div>
      )}
    </div>
  );
}

export default DragTag;
