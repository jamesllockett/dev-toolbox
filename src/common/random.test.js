import jest from 'jest';
import { Random } from './random.js';

test('return random number between 0 and 1', ()=>{
  let r = new Random();
  const rn = r.generate();

  expect(rn).toBeLessThanOrEqual(1);
  expect(rn).toBeGreaterThanOrEqual(0);
});

test('return random numbers between 1 and 10', ()=>{
  let r = new Random();
  for(var i=0; i<100; i++) { // Produce a few numbers to improve chances of finding outliers
    const rn = r.generateInBounds(1, 10);

    expect(rn).toBeLessThanOrEqual(10);
    expect(rn).toBeGreaterThanOrEqual(1);
  }
});


test('return random numbers between 12 and 24', ()=>{
  let r = new Random();
  for(var i=0; i<100; i++) { // Produce a few numbers to improve chances of finding outliers
    const rn = r.generateInBounds(2, 24);

    expect(rn).toBeLessThanOrEqual(24);
    expect(rn).toBeGreaterThanOrEqual(2);
  }
});
