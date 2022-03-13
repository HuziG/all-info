import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function NullBlock(props: { setDrawer: (arg0: boolean) => void }) {
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
    </div>
  );
}

export default NullBlock;
