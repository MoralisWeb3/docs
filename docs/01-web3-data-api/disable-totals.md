## Disable Totals Feature

The Disable Totals feature in Moralis is a configuration property that allows you to control whether totals are returned with your queries.

### Use Cases

- Improve query performance by disabling the calculation of totals.
- Save on computing resources by reducing the amount of data processed.

### Configuration

The Disable Totals feature can be set by passing `{ disable_totals: true }` to the options object when constructing a Moralis instance. For example:

```js
const Moralis = require("moralis");

const moralis = new Moralis({
  disable_totals: true,
});
```

### Interaction

The Disable Totals feature affects the response of any queries made using Moralis. When enabled, the response will not include a total count of the results.

### Limitations

- The Disable Totals feature will not return the total count of results, which may make it more difficult to perform certain types of analysis or aggregations on the data.
- If you need to access the total count of results, you will need to perform an additional query or calculation.

### Examples

Here's an example of how to use the Disable Totals feature in Moralis:

```js
const Moralis = require("moralis");

const moralis = new Moralis({
  disable_totals: true,
});

moralis.query("SELECT * FROM users", (error, results) => {
  console.log(results);
});
```

In this example, the `disable_totals` property is set to `true`, so the response from the query will not include a total count of the results.
