---
title: "Entity API"
sidebar_label: "Entity API"
slug: "../entity-api"
sidebar_class_name: "sidebar-entity-api"
sidebar_position: 3
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

Select what you want to achieve:

<ul>
<li><a href="#search-entities">Search Entities</a></li>
<li><a href="#get-entity-categories">Get Entity Categories</a></li>
<li><a href="#get-entities">Get Entities</a></li>
</ul>

### Search Entities

| No. | Method           | Description                                    | API Reference                                                                   | URL                                                                                                              |
| --- | ---------------- | ---------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1   | `searchEntities` | Search for entities, addresses, and categories | [Method Documentation](/web3-data-api/evm/reference/entity-api/search-entities) | [https://deep-index.moralis.io/api/v2.2/entities/search](https://deep-index.moralis.io/api/v2.2/entities/search) |

### Get Entity Categories

| No. | Method                | Description           | API Reference                                                                         | URL                                                                                                                      |
| --- | --------------------- | --------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 2   | `getEntityCategories` | Get entity categories | [Method Documentation](/web3-data-api/evm/reference/entity-api/get-entity-categories) | [https://deep-index.moralis.io/api/v2.2/entities/categories](https://deep-index.moralis.io/api/v2.2/entities/categories) |

### Get Entities

| No. | Method                  | Description              | API Reference                                                                            | URL                                                                                                                                              |
| --- | ----------------------- | ------------------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3   | `getEntitiesByCategory` | Get entities by category | [Method Documentation](/web3-data-api/evm/reference/entity-api/get-entities-by-category) | [https://deep-index.moralis.io/api/v2.2/entities/categories/:categoryId](https://deep-index.moralis.io/api/v2.2/entities/categories/:categoryId) |
| 4   | `getEntity`             | Get entity by ID         | [Method Documentation](/web3-data-api/evm/reference/entity-api/get-entity-by-id)         | [https://deep-index.moralis.io/api/v2.2/entities/:entityId](https://deep-index.moralis.io/api/v2.2/entities/:entityId)                           |
