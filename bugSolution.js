```javascript
// Solution 1: Using $match to filter out empty arrays
db.users.aggregate([
  {
    $lookup: {
      from: 'products',
      localField: 'productIds',
      foreignField: '_id',
      as: 'purchasedProducts'
    }
  },
  {
    $match: {
      'purchasedProducts.0': { $exists: true } // Check if the array is not empty
    }
  },
  {
    $unwind: '$purchasedProducts'
  }
])

// Solution 2: Using $unwind with preserveNullAndEmptyArrays: true
db.users.aggregate([
  {
    $lookup: {
      from: 'products',
      localField: 'productIds',
      foreignField: '_id',
      as: 'purchasedProducts'
    }
  },
  {
    $unwind: {
      path: '$purchasedProducts',
      preserveNullAndEmptyArrays: true
    }
  }
])
```