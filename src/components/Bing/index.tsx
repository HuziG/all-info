import React, {useEffect, useState} from 'react';
import useResizeObserver from "use-resize-observer";
import {INFO_CARD_STYLE} from "../../style";
import LoadingMask from "../Loading";
import {getBingPic} from "../../api/picture";
import {BingPicData} from "../../interface/bing.interface";
import {BING_PIC_HOST} from "../../utils/env";
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Bing() {
  const [loading, setLoading] = useState(true);
  const {ref, height: scrollHeight} = useResizeObserver<HTMLDivElement>();
  const [pic, setPic] = useState<BingPicData | null>(null);
  const [showLocation, setShowLocation] = useState(false)

  useEffect(() => {
    handleInitData();
  }, []);

  const handleInitData = () => {
    (async function anyNameFunction() {
      await handleGetBingPicture();
    })();
  }

  const handleGetBingPicture = async () => {
    const data = await getBingPic();
    setPic({...data});
    setLoading(false);
  };

  return (
    <div
      ref={ref}
      className={`bg-black border-8 border-blue-600 ${INFO_CARD_STYLE}`}
    >
      {
        loading ?
          <LoadingMask getData={handleInitData}/> :
          <div
            className="relative flex flex-col align-center justify-center bg-black"
            style={{
              height: scrollHeight
            }}
          >
            <div
              className={'absolute top-1 left-1 ' +
                'bg-black bg-opacity-75 text-white py-1 px-2 text-sm rounded-md'}
            >
              Bing 壁纸
            </div>

            {pic?.images &&
              <img className={'w-full h-full object-cover'} src={BING_PIC_HOST + pic.images[0].url}
                   alt={'error bing pic'}/>
            }

            {pic?.images &&
              <div
                className={'absolute flex flex-col text-right ' +
                  'bg-black bg-opacity-75 text-white py-1 px-2 text-md rounded-md right-3 bottom-3'}
                onMouseEnter={() => setShowLocation(true)}
                onMouseLeave={() => setShowLocation(false)}
              >
                {(() => {
                  const image = pic.images[0].copyright
                  return (
                    <div>
                      {showLocation &&
                        <div
                          className={'text-xl py-3 mb-3 border-b-2 border-gray-300'}>
                          <a className={'cursor-pointer hover:underline'} href={pic.images[0].copyrightlink}
                             target={'_blank'}
                             rel="noreferrer">
                            {image.slice(0, image.indexOf('('))}
                          </a>
                          <div
                            className={'text-gray-300 text-sm pt-1'}>{image.slice(image.indexOf('('), image.length)}</div>
                          <div className={'absolute w-full'}/>
                        </div>
                      }
                    </div>
                  )
                })()}

                <div>
                  <LocationOnIcon style={{fontSize: '1rem', marginRight: '.3rem'}}/>
                  {pic.images[0].title}
                </div>
              </div>
            }
          </div>
      }
    </div>
  );
}

export default Bing;
