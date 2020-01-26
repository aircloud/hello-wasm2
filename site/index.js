const js = import(/* webpackChunkName: "view_sketch_wasm" */ "../pkg/hello_wasm.js");
js.then(js => {
  js.add_index();
  js.add_index();
  let id = js.get_index();
  console.log('id:', id);
  let id2 = js.get_index();
  console.log('id:', id2);

  const js2 = import(/* webpackChunkName: "view_wasm_2" */ "../pkg/hello_wasm.js"); // hello_wasm2 also not useful
  js2.then(js => {
    js.add_index();
    js.add_index();

    let id = js.get_index();
    console.log('js2 id:', id);
    let id2 = js.get_index();
    console.log('js2 id:', id2);
  });
});

