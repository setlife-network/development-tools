import { css } from 'styled-components';

const styledIf = (method, condition) => (...names) => (...args) => props =>
  names[method](name => Boolean(props[name]) === condition) && css(...args);

export default {
  themed: key => props => props.theme[key],
  is: styledIf('every', true),
  isNot: styledIf('every', false),
  isOr: styledIf('some', true),
  isSomeNot: styledIf('some', false)
};
