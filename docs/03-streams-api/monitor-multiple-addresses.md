---
title: "Monitor multiple addresses"
slug: "monitor-multiple-addresses"
description: "Learn best practices for handling multiple addresses in your streams."
---

You do not have to create a separate stream for each address. Instead you can attach multiple addresses to the same stream. The best practice is to create as few streams as possible and instead attach addresses to existing streams whenever it makes sense. You can attach any number of addresses to a stream. 

> If you really need more streams update to a paid plan or contact support (hello@moralis.io) if you are already a paying client.

If you want to add multiple addresses to another stream you can always attach them to an existing stream.

### Attaching multiple addresses to a stream

```javascript
// Add addresses
await Moralis.Streams.addAddress({
  id: streamId,
  address: [
    "0xCFDF6Aaae9f6B927E3736FBD327853B622c5060E",
    "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
  ], // Can also be a single string
});
```


### Delete an address from a stream

```javascript
// Delete an address
await Moralis.Streams.deleteAddress({
  id,
  address,
});
```



### Get all addresses from a stream

```javascript
// Get all addresses
await Moralis.Streams.getAddresses({ id });

```