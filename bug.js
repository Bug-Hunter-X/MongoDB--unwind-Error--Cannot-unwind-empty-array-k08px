```javascript
// Assuming you have a MongoDB collection named 'users'

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
    $unwind: '$purchasedProducts' // This line causes error if productIds is empty
  }
])
```