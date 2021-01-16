// Intersection Types & Union Types
type A = 1 | 3;
type B = 2 | 3;

// Primitive
type Intersection = A & B; // Intersection Types : 3
type Union = A | B; // Union Types : 1 | 3 | 2
const i: Intersection = 3;
const u: Union = 1;

// Object
type C = {
  name: string;
  age: number;
};

type D = {
  name: string;
  id: number;
};

type IntersectionObject = C & D;
type UnionObject = C | D;

// Should have 'name', 'age', 'id'
const iobj: IntersectionObject = {
  name: 'Bob',
  age: 22,
  id: 1,
};
const uobj: UnionObject = {
  name: 'Bob',
  age: 22,
  address: 1, // Error
};
