import { parse } from '../lib/parser';

describe('parser', () => {
  it('parse simple task from oneline', () => {
    expect(parse('TODO: test hello world').title).toBe('test hello world');
  });
});
