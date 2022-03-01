import {HomeDrawerComponent} from "../../interface/home.component.interface";
import React from "react";
import useScript from "../../hook/useScript";
import useResizeObserver from "use-resize-observer";
import './index.css'
// @ts-ignore
import styled from 'styled-components'

function YiWeiReBang(props: HomeDrawerComponent) {
  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
  const id = `ALLINFO_${props.name.split('-')[1]}`

  useScript(`${props.params && props.params.yiweiUrl}${id}`)

  const Container = styled.div`
    .card-header {
      background-color: ${props.style ? props.style.color : '#fff'}
    }
  `

  return (
    <div
      ref={ref}
      id={id}
      className={'bg-white shadow h-full overflow-y-auto scroll-hidden'}
      style={{
        height: scrollHeight,
      }}
    >
      <div className={'flex items-center justify-center text-center'}>加载中</div>
    </div>
  )
}

export default YiWeiReBang
