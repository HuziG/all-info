import Lottie from 'react-lottie';

function LottieAnimation(props: {
  width: number
  height: number
  animationData: any
}) {
  return <div>
    <Lottie 
      options={{
        loop: true,
        autoplay: true, 
        animationData: props.animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
      height={props.height}
      width={props.width}
    />
  </div>
}

export default LottieAnimation
