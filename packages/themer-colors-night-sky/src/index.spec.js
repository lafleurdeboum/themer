import { colors } from './index';

describe('themer default colors', () => {

  it('should contain a dark theme', () => {
    expect(colors.dark).toBeDefined();
  });

  it('should define all 16 required colors', () => {
    const prefixes = [ 'accent', 'shade' ];
    prefixes.forEach(prefix => {
      for (let i = 0; i <= 7; i++) {
        expect(colors.dark[`${prefix}${i}`]).toBeDefined();
      }
    });
  });

});
