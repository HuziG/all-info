import React, {useEffect, useState} from "react";
import {getNews} from "../api/news";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';

interface NewsItem {
  title: string,
  url: string,
  id: number
}

interface News {
  description: string,
  feed_url: string,
  items: [NewsItem],
  title: string,
  version: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
      width: '400px'
    },
  }),
);

function HotNews() {
  const classes = useStyles();
  const [news, setNews] = useState<News | null>(null)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [popoverIndex, setPopoverIndex] = useState<number | null>(null)
  const [fullTitle, setFullTitle] = useState<string | null>(null)

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect( () => {
    (async function anyNameFunction() {
      const data = await getNews()
      setNews({ ...data, news })
    })();
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, index: number, fullTitle: string) => {
    // @ts-ignore
    setAnchorEl(event.currentTarget)
    setPopoverIndex(index)
    setFullTitle(fullTitle)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative rounded-md overflow-x-hidden lg:float-left lg:w-5/12">
      <div className="absolute w-full font-bold bg-red-600 text-white top-0 z-10 left-0 py-5 px-5">
        新浪新闻
      </div>

      <div className="mt-16 bg-white overflow-y-auto h-96 p-3 w-full">
        {
          news !== null && news.items.map((item, index) => (
            <div
              className="
                truncate cursor-pointer border-t-2 border-gray-300 hover:text-indigo-600
              "
              key={index}
            >
              <a
                className="py-4 inline-block"
                title={item.title}
                key={item.url}
                target='_blank'
                onClick={(e) => handleClick(e, index, item.title)}
              >{item.title}</a>
              {
                popoverIndex === index &&
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorReference={'anchorEl'}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  anchorPosition={{
                    left: 400,
                    top: 200
                  }}
                >
                  <Typography className={classes.typography}>
                    <div>
                      {fullTitle}
                      <a
                        href={item.url}
                        onClick={() => handleClose()}
                        target='_blank'
                      ><span className="text-sm text-indigo-600 font-bold"><LinkIcon /> 查看更多</span></a>
                    </div>
                  </Typography>
                </Popover>
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HotNews
