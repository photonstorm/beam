import { version } from '../package.json';
import CanvasRenderer from './canvas/CanvasRenderer.js';
import WebGLRenderer from './webgl/WebGLRenderer.js';
import Transform from './transform/Transform.js';
import Rectangle from './display/Rectangle.js';
import Sprite from './display/Sprite.js';

// export const BEAM_AUTO = 0;
// export const BEAM_CANVAS = 1;
// export const BEAM_WEBGL = 2;

export default class Beam
{
    constructor ()
    {
        this.showHeader();
    }

    showHeader ()
    {
        var args = [
            '%c %c %c %c %c  Beam v' + version + ' - http://phaser.io  ',
            'background: #ff0000',
            'background: #ffff00',
            'background: #00ff00',
            'background: #00ffff',
            'color: #ffffff; background: #000;'
        ];
        
        console.log.apply(console, args);
    }

    createTransform (parent = null, x = 0, y = 0, scaleX = 1, scaleY = 1, shearX = 0, shearY = 0)
    {
        return new Transform(parent, x, y, scaleX, scaleY, shearX, shearY);
    }

    createRectangle (x = 0, y = 0, width = 0, height = 0, color = 'rgba(255, 0, 255, 1.0)')
    {
        return new Rectangle(x, y, width, height, color);
    }

    createSprite (texture, x = 0, y = 0)
    {
        return new Sprite(texture, x, y);
    }

    createCanvasRenderer (width = 256, height = 256, canvas = null, options = {})
    {
        return new CanvasRenderer(width, height, canvas, options);
    }

    createWebGLRenderer (width = 256, height = 256, canvas = null, options = {})
    {
        return new WebGLRenderer(width, height, canvas, options);
    }

}
