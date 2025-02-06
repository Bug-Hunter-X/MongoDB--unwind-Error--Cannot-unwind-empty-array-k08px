# MongoDB $unwind Error: Handling Empty Arrays

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines: attempting to unwind an empty array.  The issue arises when a field intended to be unwound is empty for some documents in the collection. This code example shows how to reproduce and fix this problem.

## Problem
The `$unwind` operator is used to deconstruct an array field from the input documents to output a document for each element of the array. If the array field is empty, `$unwind` will throw an error.

## Solution
The solution involves adding a `$match` stage to filter out documents with empty arrays before the `$unwind` stage. Alternatively you can use `$unwind` with preserveNullAndEmptyArrays: true. This way, you avoid the error and gracefully handle cases where the array is empty. 