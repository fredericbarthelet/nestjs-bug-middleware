import { EnricherMiddleware } from './enricher.middleware';

describe('EnricherMiddleware', () => {
  it('should be defined', () => {
    expect(new EnricherMiddleware()).toBeDefined();
  });
});
