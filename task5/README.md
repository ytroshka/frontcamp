## 3. Querying Restaurants Collection

1. How many “Chinese” (cuisine) restaurants are in “Queens” (borough)?
     ```
     db.restaurants.find({cuisine: 'Chinese', borough: 'Queens'}).count()
	 ```
2. What is the _id of the restaurant which has the grade with the highest ever score?
    ```
    db.restaurants.find({}, {_id: 1}).sort({'grades.score': -1}).limit(1)
    ```
3.  Add a grade { grade: "A", score: 7, date: ISODate() } to every restaurant in “Manhattan”
(borough).
    ```
    db.restaurants.updateMany({'borough' : 'Manhattan'}, {$push: {grades : { grade: "A", score: 7, date: ISODate()}}})
    ```
4. What are the names of the restaurants which have a grade at index 8 with score less then 7? Use projection to
include only names without _id.
    ```
    db.restaurants.find({'grades.8.score': {$lt: 7}},{name: 1, _id: 0})
   ```
5. What are _id and borough of “Seafood” (cuisine) restaurants which received at least one “B” grade in period
from 2014-02-01 to 2014-03-01? Use projection to include only _id and borough.
    ```
    db.restaurants.find({$and: [{cuisine: 'Seafood'},{grades:{'$elemMatch':{'grade':"B", 'date': {$gte: ISODate("2014-02-01T00:00:00.000Z"), $lt: ISODate("2014-03-01T00:00:00.000Z")}}}}]}, {borough:1, _id:1})
    ```

## 4. Indexing Restaurants Collection

Create the following indexes:
1. Create an index which will be used by this query and provide proof (from explain() or Compass UI) that the
index is indeed used by the winning plan:
```db.restaurants.find({ name: "Glorious Food" }).explain()```



   ```db.restaurants.createIndex({'name' : 1})```

   ```
	{
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "name" : {
                                "$eq" : "Glorious Food"
                        }
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "name" : 1
                                },
                                "indexName" : "name_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "name" : [
                                                "[\"Glorious Food\", \"Glorious Food\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "ok" : 1
	}
    ```

2. Drop index from task 4.1
   ```
   db.restaurants.dropIndex('name_1')
   ```
3. Create an index to make this query covered and provide proof (from explain() or Compass UI) that it is
indeed covered: 
```db.restaurants.find({ restaurant_id: "41098650" }, { _id: 0, borough: 1 }).explain("executionStats");```

    ```
    db.restaurants.createIndex({restaurant_id: 1, borough: 1})
    ```

    ```
    {
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "restaurant_id" : {
                                "$eq" : "41098650"
                        }
                },
                "winningPlan" : {
                        "stage" : "PROJECTION",
                        "transformBy" : {
                                "_id" : 0,
                                "borough" : 1
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "restaurant_id" : 1,
                                        "borough" : 1
                                },
                                "indexName" : "restaurant_id_1_borough_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "restaurant_id" : [ ],
                                        "borough" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "restaurant_id" : [
                                                "[\"41098650\", \"41098650\"]"
                                        ],
                                        "borough" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 1,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 1,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "PROJECTION",
                        "nReturned" : 1,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 2,
                        "advanced" : 1,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "transformBy" : {
                                "_id" : 0,
                                "borough" : 1
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 1,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 2,
                                "advanced" : 1,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "restaurant_id" : 1,
                                        "borough" : 1
                                },
                                "indexName" : "restaurant_id_1_borough_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "restaurant_id" : [ ],
                                        "borough" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "restaurant_id" : [
                                                "[\"41098650\", \"41098650\"]"
                                        ],
                                        "borough" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                },
                                "keysExamined" : 1,
                                "seeks" : 1,
                                "dupsTested" : 0,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "ok" : 1
    }
    ```

4. Create a partial index on cuisine field which will be used only when filtering on borough equal to “Staten
Island”:
    ```
    db.restaurants.createIndex({cuisine: 1}, {partialFilterExpression: {borough: 'Staten Island'}})
    ```

    ```db.restaurants.find({ borough: "Staten Island", cuisine: "American" }).explain()``` – uses index
    
    ```
    {
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "borough" : {
                                                "$eq" : "Staten Island"
                                        }
                                },
                                {
                                        "cuisine" : {
                                                "$eq" : "American"
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "FETCH",
                        "filter" : {
                                "borough" : {
                                        "$eq" : "Staten Island"
                                }
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "cuisine" : 1
                                },
                                "indexName" : "cuisine_1",
                                "isMultiKey" : false,
                                "multiKeyPaths" : {
                                        "cuisine" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : true,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "cuisine" : [
                                                "[\"American\", \"American\"]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [ ]
        },
        "ok" : 1
   }
    ```
    ```db.restaurants.find({ borough: "Staten Island", name: "Bagel Land" }).explain()``` – does not use index
    
    ```
    {
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "borough" : {
                                                "$eq" : "Staten Island"
                                        }
                                },
                                {
                                        "name" : {
                                                "$eq" : "Bagel Land"
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "$and" : [
                                        {
                                                "borough" : {
                                                        "$eq" : "Staten Island"
                                                }
                                        },
                                        {
                                                "name" : {
                                                        "$eq" : "Bagel Land"
                                                }
                                        }
                                ]
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "ok" : 1
    }
   ```
    ```db.restaurants.find({ borough: "Queens", cuisine: "Pizza" }).explain()``` – does not use index

    ```
    {
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "$and" : [
                                {
                                        "borough" : {
                                                "$eq" : "Queens"
                                        }
                                },
                                {
                                        "cuisine" : {
                                                "$eq" : "Pizza"
                                        }
                                }
                        ]
                },
                "winningPlan" : {
                        "stage" : "COLLSCAN",
                        "filter" : {
                                "$and" : [
                                        {
                                                "borough" : {
                                                        "$eq" : "Queens"
                                                }
                                        },
                                        {
                                                "cuisine" : {
                                                        "$eq" : "Pizza"
                                                }
                                        }
                                ]
                        },
                        "direction" : "forward"
                },
                "rejectedPlans" : [ ]
        },
        "ok" : 1
    }
    ```

5. Create an index to make query from task 3.4 covered and provide proof (from explain() or Compass UI) that
it is indeed covered

    ```
    db.restaurants.createIndex({'grades.8.score': 1, name: 1})
    ```

   ```
   db.restaurants.find({"grades.8.score": {$lt: 7}}, {name: 1, _id: 0}).explain("executionStats")
      ```
      ```
      {
        "queryPlanner" : {
                "plannerVersion" : 1,
                "namespace" : "frontcamp.restaurants",
                "indexFilterSet" : false,
                "parsedQuery" : {
                        "grades.8.score" : {
                                "$lt" : 7
                        }
                },
                "winningPlan" : {
                        "stage" : "PROJECTION",
                        "transformBy" : {
                                "name" : 1,
                                "_id" : 0
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "keyPattern" : {
                                        "grades.8.score" : 1,
                                        "name" : 1
                                },
                                "indexName" : "grades.8.score_1_name_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "grades.8.score" : [
                                                "grades"
                                        ],
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "grades.8.score" : [
                                                "[-inf.0, 7.0)"
                                        ],
                                        "name" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                }
                        }
                },
                "rejectedPlans" : [
                        {
                                "stage" : "PROJECTION",
                                "transformBy" : {
                                        "name" : 1,
                                        "_id" : 0
                                },
                                "inputStage" : {
                                        "stage" : "FETCH",
                                        "inputStage" : {
                                                "stage" : "IXSCAN",
                                                "keyPattern" : {
                                                        "grades.8.score" : 1
                                                },
                                                "indexName" : "grades.8.score_1",
                                                "isMultiKey" : true,
                                                "multiKeyPaths" : {
                                                        "grades.8.score" : [
                                                                "grades"
                                                        ]
                                                },
                                                "isUnique" : false,
                                                "isSparse" : true,
                                                "isPartial" : false,
                                                "indexVersion" : 2,
                                                "direction" : "forward",
                                                "indexBounds" : {
                                                        "grades.8.score" : [
                                                                "[-inf.0, 7.0)"
                                                        ]
                                                }
                                        }
                                }
                        }
                ]
        },
        "executionStats" : {
                "executionSuccess" : true,
                "nReturned" : 2,
                "executionTimeMillis" : 0,
                "totalKeysExamined" : 2,
                "totalDocsExamined" : 0,
                "executionStages" : {
                        "stage" : "PROJECTION",
                        "nReturned" : 2,
                        "executionTimeMillisEstimate" : 0,
                        "works" : 4,
                        "advanced" : 2,
                        "needTime" : 0,
                        "needYield" : 0,
                        "saveState" : 0,
                        "restoreState" : 0,
                        "isEOF" : 1,
                        "invalidates" : 0,
                        "transformBy" : {
                                "name" : 1,
                                "_id" : 0
                        },
                        "inputStage" : {
                                "stage" : "IXSCAN",
                                "nReturned" : 2,
                                "executionTimeMillisEstimate" : 0,
                                "works" : 4,
                                "advanced" : 2,
                                "needTime" : 0,
                                "needYield" : 0,
                                "saveState" : 0,
                                "restoreState" : 0,
                                "isEOF" : 1,
                                "invalidates" : 0,
                                "keyPattern" : {
                                        "grades.8.score" : 1,
                                        "name" : 1
                                },
                                "indexName" : "grades.8.score_1_name_1",
                                "isMultiKey" : true,
                                "multiKeyPaths" : {
                                        "grades.8.score" : [
                                                "grades"
                                        ],
                                        "name" : [ ]
                                },
                                "isUnique" : false,
                                "isSparse" : false,
                                "isPartial" : false,
                                "indexVersion" : 2,
                                "direction" : "forward",
                                "indexBounds" : {
                                        "grades.8.score" : [
                                                "[-inf.0, 7.0)"
                                        ],
                                        "name" : [
                                                "[MinKey, MaxKey]"
                                        ]
                                },
                                "keysExamined" : 2,
                                "seeks" : 1,
                                "dupsTested" : 2,
                                "dupsDropped" : 0,
                                "seenInvalidated" : 0
                        }
                }
        },
        "ok" : 1
    }
    ```