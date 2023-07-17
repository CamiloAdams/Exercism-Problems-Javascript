// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 * Prototipe Size class
 *
 * @param {number} [width] - [TODO:description]
 * @param {number} [height] - [TODO:description]
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * Resizes the object to a given parameters
 *
 * @function Size#resize
 * @param {number} newWidth - [TODO:description]
 * @param {number} newHeight - [TODO:description]
 */
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

/**
 * Stores a position
 *
 * @param {number} [x] - 
 * @param {number} [y] - [TODO:description]
 */
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 * Moves the position to new coordinates
 *
 * @function Position#move
 * @param {number} newX - [TODO:description]
 * @param {number} newY - [TODO:description]
 */
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};


/**
 * Represents a window in a windowing based computer system
 */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Change the size of the window
   *
   * @param {Object} size - [TODO:description]
   * @param {number} size.width - [TODO:description]
   * @param {number} size.height - [TODO:description]
   */
  resize({ width, height }) {
    let newWidth = width < 1 ? 1 : width;
    let newHeight = height < 1 ? 1 : height;

    if (this.position.x + width > this.screenSize.width) {
      newWidth = this.screenSize.width - this.position.x;
    }

    if (this.position.y + height > this.screenSize.height) {
      newHeight = this.screenSize.height - this.position.y;
    }

    this.size.resize(newWidth, newHeight);
  }

  /**
   * Moves the to given position
   *
   * @param {Object} position - [TODO:description]
   * @param {number} position.x - [TODO:description]
   * @param {number} position.y - [TODO:description]
   */
  move({ x, y }) {
    let newX = x < 0 ? 0 : x;
    let newY = y < 0 ? 0 : y;

    if (this.size.width + x > this.screenSize.width) {
      newX = this.screenSize.width - this.size.width;
    }

    if (this.size.height + y > this.screenSize.height) {
      newY = this.screenSize.height - this.size.height;
    }

    this.position.move(newX, newY);
  }
}

/**
 * @param {{ resize: (arg0: { width: number; height: number; }) => void; move: (arg0: { x: number; y: number; }) => void; }} programWindow
 */
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
