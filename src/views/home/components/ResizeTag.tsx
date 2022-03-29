import Fade from '@material-ui/core/Fade';
import React from 'react';

function ResizeTag(props: { editmode: any }, ref: any) {
  return (
    <div ref={ref}>
      <Fade in={Boolean(props.editmode)}>
        <div
          style={{
            background: '#1876D2',
            cursor: 'se-resize',
            zIndex: '999',
          }}
          className={'p-3 absolute right-0 bottom-0 rounded'}
          {...props}
        >
          <div className={'w-3 h-3 border-r-2 border-b-2 border-white'} />
        </div>
      </Fade>
    </div>
  );
}

export default React.forwardRef(ResizeTag);
