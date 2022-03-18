function LoadingWrapper(props: any) {
  return <div className={'w-full h-full absolute top-0 left-0 flex items-center justify-center'}>
    { props.children }
  </div>
}

export default LoadingWrapper
