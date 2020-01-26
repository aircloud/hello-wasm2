use crate::shapes::SHAPE_INFO;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add_index() {
    SHAPE_INFO.lock().unwrap().add_index();
}

#[wasm_bindgen]
pub fn get_index() -> i32 {
    SHAPE_INFO.lock().unwrap().get_index()
}
