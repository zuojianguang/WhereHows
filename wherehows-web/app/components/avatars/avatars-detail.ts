import Component from '@ember/component';
import { get } from '@ember/object';
import { action } from '@ember-decorators/object';
import { Keyboard } from 'wherehows-web/constants/keyboard';

export default class extends Component {
  containerClassNames = ['avatars-detail-modal'];

  /**
   * External action to close detail interface
   */
  onClose: () => void;

  /**
   * Handles key up event on interface
   * @param {KeyboardEvent} { key, which }
   */
  @action
  onKeyUp({ key, which }: KeyboardEvent) {
    // if escape key, close modal
    if (which === Keyboard.Escape || key === Keyboard[27]) {
      get(this, 'onClose')();
    }
  }
}
