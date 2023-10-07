function Example(): JSX.Element {
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
