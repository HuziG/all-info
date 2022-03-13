import React, { ReactChild, ReactFragment, ReactPortal } from 'react';

function CmpContainer(props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}) {
  return <div className={'relative'}>{props.children}</div>;
}

export default CmpContainer;
