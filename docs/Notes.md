# Course Outline

# Core Syntax and Features

## Core Types

- number
  - TS only has one type for number, including all intergers, floats, etc.
  - Example: 1, 5.3, -10
- string
  - All text value
  - Example: 'Hi', "Hi", \`Hi\`
- boolean
  - Only has `true` and `false`, no "truthy" or "falthy" values
  - Example: true, false
- object
  - Any JavaScript object, more specific types (type of object) are possible
  - Example: {age: 32}
- Array
  - Any JavaScript array, type can be flexible or strict (regarding the element types)
  - Example: [1,2,3]
- Tuple
  - Added by TypeScript: Fixed-length and Fixed-type array
  - Example: [1,2]
- Enum
  - Added by TypeScript: Automatically enumerated global constant identifiers
  - Example: enum { NEW, OLD }
- Any
  - Any kind of value, no specific type assignment
  - \*

## TypeScript watch mode

This is to make tsc in a watch mode so that we won't need to compile the file each time we made change to.

Syntax: `tsc xxx.ts --watch` or `tsc xxx.ts -w`

Downside: This only works for one ts file. It's barely the case if working on a big project.

We can do the following steps to let `tsc` watch the whole project:

1. `cd` to the project folder.
2. Run `tsc --init` command.
   Note that this will create a tsconfig.json file which have bunch of settings for typescript configuration.
3. Run `tsc -w` command.
