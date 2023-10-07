import { useEffect } from 'react';

function Example(): JSX.Element {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      try {
        navigator.serviceWorker.register('./worker.ts').then(res => {
          if (res.installing) {
            console.log('正在安装 Service worker');
          } else if (res.waiting) {
            console.log('已安装 Service worker installed');
          } else if (res.active) {
            console.log('激活 Service worker');
          }
        });
      } catch (error) {
        console.error(`注册失败：${error}`);
      }
    }
  }, []);

  return (
    <>
      <object
        data="https://cn.vuejs.org/"
        width="100%"
        height="600"
      ></object>
      <div style={{ width: 80, height: 80 }}></div>
      <embed
        src="https://cn.vuejs.org/"
        width="100%"
        height="600"
      />
      <div style={{ width: 80, height: 80 }}></div>
      <embed
        src="https://www.baidu.com/"
        width="100%"
        height="600"
      />
      <div style={{ width: 80, height: 80 }}></div>
      <object
        data="https://www.baidu.com/"
        width="100%"
        height="600"
      ></object>
      <div style={{ width: 80, height: 80 }}></div>
      <object
        data="https://www.youtube.com/"
        width="100%"
        height="600"
      ></object>
      <div style={{ width: 80, height: 80 }}></div>
      <embed
        src="https://www.youtube.com/"
        width="100%"
        height="600"
      />
    </>
  );
}

export { Example };
