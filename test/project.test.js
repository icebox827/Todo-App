const Project = require('../src/Project');

describe('Project class', () => {
  let todo;
  beforeEach(() => {
    todo = new Project('Data');
  });

  it('Should create a project', () => {
    expect(typeof todo).toBe('object');
  });
});
