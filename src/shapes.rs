use lazy_static::lazy_static;
use std::sync::Mutex;

lazy_static! {
    pub static ref SHAPE_INFO: Mutex<Shape> = {
      let mut shape_info = Shape::new();
      Mutex::new(shape_info)
    };
}


#[derive(Debug, Default)]
pub struct Shape {
  pub index: i32,
}

impl Shape {
  pub fn new() -> Self {
    return Shape {
      index: 12,
    };
  }
  pub fn add_index(&mut self) {
    self.index += 1;
  }
  pub fn get_index(&self) -> i32 {
    self.index.clone()
  }
}
