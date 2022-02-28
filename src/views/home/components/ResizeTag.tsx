import Fade from '@material-ui/core/Fade';

function ResizeTag(props: any) {
  return (
    <div>
      <Fade in={props.editMode}>
        <div
          style={{
            background: "#1876D2",
            cursor: "se-resize",
            zIndex: '999'
          }}
          className={'p-3 absolute right-0 bottom-0 rounded-tl'}
          {...props}
        >
          <div className={'w-3 h-3 border-r-2 border-b-2 border-white'}/>
        </div>
      </Fade>
    </div>
  )
}

export default ResizeTag
