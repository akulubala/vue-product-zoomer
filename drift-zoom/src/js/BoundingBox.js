import throwIfMissing from './util/throwIfMissing';
import { addClasses, removeClasses } from './util/dom';

export default class BoundingBox {
  constructor(options) {
    this.isShowing = false;

    let {
      namespace = null,
      zoomFactor = throwIfMissing(),
      containerEl = throwIfMissing(),
    } = options;

    this.settings = { namespace, zoomFactor, containerEl };

    this.openClasses = this._buildClasses('open');

    this._buildElement();
  }

  _buildClasses(suffix) {
    let classes = [`drift-${suffix}`];

    let ns = this.settings.namespace;
    if (ns) {
      classes.push(`${ns}-${suffix}`);
    }

    return classes;
  }

  _buildElement() {
    this.el = document.createElement('div');
    addClasses(this.el, this._buildClasses('bounding-box'));
  }

  show(zoomPaneWidth, zoomPaneHeight) {
    this.isShowing = true;

    this.settings.containerEl.appendChild(this.el);

    let style = this.el.style;
    style.width = `${zoomPaneWidth / this.settings.zoomFactor}px`;
    style.height = `${zoomPaneHeight / this.settings.zoomFactor}px`;

    addClasses(this.el, this.openClasses);
  }

  hide() {
    if (this.isShowing) {
      // this.settings.containerEl.removeChild(this.el);
    }

    this.isShowing = false;

    removeClasses(this.el, this.openClasses);
  }

  setPosition(percentageOffsetX, percentageOffsetY, previewRect) {
    let pageXOffset = window.pageXOffset;
    let pageYOffset = window.pageYOffset;
    let boundingBox = this.el.getBoundingClientRect();

    let inlineLeft = previewRect.left + (percentageOffsetX * previewRect.width)
      - (boundingBox.clientWidth / 2) + pageXOffset;
    let inlineTop = previewRect.top + (percentageOffsetY * previewRect.height)
      - (boundingBox.clientHeight / 2) + pageYOffset;


    if (inlineLeft < previewRect.left + pageXOffset) {
      inlineLeft = previewRect.left + pageXOffset;
    } else if (inlineLeft + boundingBox.clientWidth > previewRect.left + previewRect.width + pageXOffset) {
      inlineLeft = previewRect.left + previewRect.width - boundingBox.clientWidth + pageXOffset;
    }

    if (inlineTop < previewRect.top + pageYOffset) {
      inlineTop = previewRect.top + pageYOffset;
    } else if (inlineTop + boundingBox.clientHeight > previewRect.top + previewRect.height + pageYOffset) {
      inlineTop = previewRect.top + previewRect.height - boundingBox.clientHeight + pageYOffset;
    }

    this.el.style.left = `${inlineLeft}px`;
    this.el.style.top = `${inlineTop}px`;
  }
}
