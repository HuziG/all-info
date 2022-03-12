import {HomeComponent} from "../../interface/home.component.interface";
import React, {useCallback} from "react";
import './index.css'
import useResizeObserver from "use-resize-observer";
import useScript from "../../hook/useScript";
// @ts-ignore
import styled from "styled-components";

function YiWeiReBang(props: HomeComponent) {
  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
  const id = `ALLINFO_${props.name.split('-')[1]}`

  useScript(`${props.params && props.params.yiweiUrl}${id}`)

  const Container = styled.div`
    .card-header {
      background-color: ${props.style ? props.style.color : '#fff'};
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
    }

    .ml-2{
      border-radius: 5px;
      transition: all .2s;
      padding: 5px;
      color: ${props.style ? props.style.color : '#333'};
    }

    .d-flex:hover{
      .ml-2{
        background-color: ${props.style ? props.style.color : '#fff'};
        color: #fff;
      }
    }
  `

  const Content = useCallback(() => {
    return <Container
      ref={ref}
      id={id}
      className={'bg-white h-full overflow-y-auto scroll-hidden rounded-xl'}
      style={{
        height: scrollHeight,
      }}
    >
      <div className={'flex items-center justify-center text-center py-5 text-xl text-indigo-700'}>加载中...</div>
    </Container>
  }, [])

  return (
    <Content/>
  )
}

export default YiWeiReBang
