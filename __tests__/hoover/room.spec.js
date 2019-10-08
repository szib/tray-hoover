import isInTheRoom from '../../src/hoover/room';

describe('room', () => {
  let subject;

  beforeEach(() => {
    subject = isInTheRoom([5, 5]);
  });

  it('[0,0] is in the room', () => {
    expect(subject([0, 0])).toBeTruthy();
  });
  it('[4,4] is in the room', () => {
    expect(subject([4, 4])).toBeTruthy();
  });

  it('[-1,0] is not in the room', () => {
    expect(subject([-1, 0])).toBeFalsy();
  });
  it('[0,-1] is in the room', () => {
    expect(subject([0, -1])).toBeFalsy();
  });
  it('[5,0] is not in the room', () => {
    expect(subject([5, 0])).toBeFalsy();
  });
  it('[0,5] is in the room', () => {
    expect(subject([0, 5])).toBeFalsy();
  });
});
