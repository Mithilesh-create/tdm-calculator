const engineTestRules = [
  {
    id: 1,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_INTEGER_A",
    name: "Input Integer A",
    category: "input",
    dataType: "number",
    units: "beans",
    displayFunctionBody: "return true;"
  },
  {
    id: 2,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_INTEGER_B",
    name: "Input Integer B",
    category: "input",
    dataType: "number",
    units: "beans",
    displayFunctionBody: "return true;"
  },
  {
    id: 3,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_FLOAT_X",
    name: "Input Float X",
    category: "input",
    dataType: "number",
    value: null,
    units: "liters",
    displayFunctionBody: "return true;"
  },
  {
    id: 4,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_FLOAT_Y",
    name: "Input Float Y",
    category: "input",
    dataType: "number",
    value: null,
    units: "liters",
    displayFunctionBody: "return true;"
  },
  {
    id: 5,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_BOOLEAN_1",
    name: "Input Boolean 1",
    category: "input",
    dataType: "boolean",
    value: null,
    units: null,
    displayFunctionBody: "return true;"
  },
  {
    id: 6,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_BOOLEAN_2",
    name: "Input Boolean 2",
    category: "input",
    dataType: "boolean",
    value: null,
    units: null,
    displayFunctionBody: "return true;"
  },
  {
    id: 7,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_STRING_1",
    name: "Input String 1",
    category: "input",
    dataType: "string",
    value: null,
    units: null,
    displayFunctionBody: "return true;"
  },
  {
    id: 7,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "INPUT_STRING_2",
    name: "Input String 2",
    category: "input",
    dataType: "string",
    value: null,
    units: null,
    displayFunctionBody: "return true;"
  },
  {
    id: 8,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "CALC_A_PLUS_B",
    name: "A + B",
    category: "calculation",
    dataType: "number",
    value: null,
    functionBody: "return <<INPUT_INTEGER_A>> + <<INPUT_INTEGER_B>>;",
    units: "beans",
    displayFunctionBody: "return true;"
  },
  {
    id: 9,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "CALC_A_TIMES_B",
    name: "A * B",
    category: "calculation",
    dataType: "number",
    value: null,
    functionBody: "return <<INPUT_INTEGER_A>> * <<INPUT_INTEGER_B>>;",
    units: "beans",
    displayFunctionBody: "return true;"
  },
  {
    id: 10,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "CALC_A_LT_B",
    name: "A < B",
    category: "calculation",
    dataType: "boolean",
    value: null,
    functionBody: "return <<INPUT_INTEGER_A>> < <<INPUT_INTEGER_B>>;",
    units: null,
    displayFunctionBody: "return true;"
  },
  {
    id: 11,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "CALC_A_EQ_B",
    name: "A = B",
    category: "calculation",
    dataType: "boolean",
    value: null,
    functionBody: "return <<INPUT_INTEGER_A>> === <<INPUT_INTEGER_B>>;",
    units: null,
    displayFunctionBody: "return true;"
  },
  {
    id: 12,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "CALC_A_PLUS_B_PLUS_A_TIMES_B",
    name: "A + B + A*B",
    category: "calculation",
    dataType: "number",
    value: null,
    functionBody: "return <<CALC_A_PLUS_B>> + <<CALC_A_TIMES_B>>;",
    units: "beans",
    displayFunctionBody: "return true;"
  },
  {
    id: 13,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "CALC_A2_PLUS_B2",
    name: "A*A + B*B",
    category: "calculation",
    dataType: "number",
    value: null,
    functionBody:
      "return <<INPUT_INTEGER_A>> * <<INPUT_INTEGER_A>> + <<INPUT_INTEGER_B>> * <<INPUT_INTEGER_B>>;",
    units: "beans",
    displayFunctionBody: "return true;"
  },
  {
    id: 14,
    calculationId: 99,
    calculationPanelId: 2,
    panelDisplayOrder: 10,
    displayOrder: 100,
    code: "CALC_HYPOTENUSE_AB",
    name: "Hypotenuse of Triangle with Sides A and B",
    category: "calculation",
    dataType: "number",
    value: null,
    functionBody:
      "return Math.sqrt(<<INPUT_INTEGER_A>> * <<INPUT_INTEGER_A>> + <<INPUT_INTEGER_B>> * <<INPUT_INTEGER_B>>);",
    units: "beans",
    displayFunctionBody: "return true;"
  }
];

const engineTestInput1 = {
  INPUT_INTEGER_A: 7,
  INPUT_INTEGER_B: 13,
  INPUT_FLOAT_X: 5.2,
  INPUT_FLOAT_Y: 8.7,
  INPUT_BOOLEAN_1: true,
  INPUT_BOOLEAN_2: false,
  INPUT_STRING_1: "Okey",
  INPUT_STRING_2: "Dokey"
};

const engineTestInput2 = {
  INPUT_INTEGER_A: 7,
  INPUT_INTEGER_B: 13,
  INPUT_FLOAT_X: 5.2,
  INPUT_FLOAT_Y: 8.7,
  INPUT_BOOLEAN_1: true,
  INPUT_BOOLEAN_2: false,
  INPUT_STRING_1: "Okey",
  INPUT_STRING_2: "Dokey"
};

module.exports = {
  engineTestRules,
  engineTestInput1,
  engineTestInput2
};
