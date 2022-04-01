import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { COMPONENT_DATA_KEY } from '../../../utils/env';

function NullBlock(props: { setDrawer: (arg0: boolean) => void }) {
  const STORAGE_DATA = '[{"name":"Shopping-fzzizhucan","grid":{"x":0,"y":39,"w":5,"h":15}},{"name":"PictureRandom-meizi","grid":{"x":0,"y":29,"w":5,"h":10}},{"name":"PictureRandom-erciyun","grid":{"x":0,"y":0,"w":5,"h":10}},{"name":"YiWeiReBang-kerenqibang","grid":{"x":5,"y":0,"w":7,"h":10}},{"name":"PictureRandom-meizi3","grid":{"x":0,"y":20,"w":5,"h":9}},{"name":"YiWeiReBang-baidutieba","grid":{"x":5,"y":19,"w":7,"h":8}},{"name":"YiWeiReBang-zhihuredu","grid":{"x":5,"y":10,"w":7,"h":9}},{"name":"Shopping-fzmenpiao","grid":{"x":5,"y":27,"w":7,"h":13}},{"name":"PictureRandom-cosplay","grid":{"x":0,"y":10,"w":5,"h":10}},{"name":"Shopping-tiantiantemai","grid":{"x":5,"y":40,"w":7,"h":14}}]'

  const handleAddInfo = () => {
    localStorage.setItem(COMPONENT_DATA_KEY, STORAGE_DATA)
    window.location.reload()
  }

  return (
    <div className={'relative text-center mt-56'}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => props.setDrawer(true)}
      >
        添加内容
      </Button>

      <div className={'text-center py-8'}>
        <Button onClick={handleAddInfo} className={'dark:text-main-title'}>选择困难症？一键添加内容!</Button>
      </div>
    </div>
  );
}

export default NullBlock;
