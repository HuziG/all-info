import { Player } from '@lottiefiles/react-lottie-player';

function LottieAnimation(props: {
  width: number
  height: number
}) {
  return <div>
    <Player
      autoplay
      loop
      src="https://assets9.lottiefiles.com/datafiles/9jPPC5ogUyD6oQq/data.json"
      style={{
        width: props.width,
        height: props.height
      }}
    />
  </div>
}

export default LottieAnimation
