// Template Literal Types
type Color = 'Green' | 'Red';
type Quantity = 'One' | 'Two' | 'Red';

type SeussFish = `${Color | Quantity} fish`;

const fish: SeussFish = 'One fish';
