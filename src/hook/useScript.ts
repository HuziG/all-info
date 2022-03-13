/**
 * 加载 script 标签 hook
 */

import { useEffect } from 'react';

const useScript = (url: string) => {
  useEffect(() => {
    const myScript = document.createElement('script');
    myScript.src = url;
    myScript.async = false;
    document.body.appendChild(myScript);

    return () => {
      console.log('unmounted useScript');
      document.body.removeChild(myScript);
    };
  }, []);
};

export default useScript;
