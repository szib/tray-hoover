/* eslint-disable new-cap */
import moves from '../../src/hoover/moves';

describe('moves', () => {
  let from;

  beforeEach(() => {
    from = [5, 5];
  });

  it('moves north', () => {
    expect(moves['N'](from)).toEqual([5, 6]);
  });
  it('moves south', () => {
    expect(moves['S'](from)).toEqual([5, 4]);
  });
  it('moves east', () => {
    expect(moves['E'](from)).toEqual([6, 5]);
  });
  it('moves west', () => {
    expect(moves['W'](from)).toEqual([4, 5]);
  });
});
