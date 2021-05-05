#### sort

``` javascript

    // default
    IteratorObj.sort(compareFunction);

    // String sorting
    stringArr.sort(a,b => {
        // ascending
        return a < b ? -1 : a > b ? 1 : 0;
        // descending
        return a < b ? 1 : a > b ? -1 : 0;
    })

    // Number sorting
    numberArr.sort((a,b) => {
        // default ascending
        return a-b;
        // default descending
        return b-a;

        // ascending
        return a < b ? -1 : a > b ? 1 : 0;
        // descending
        return a < b ? 1 : a > b ? -1 : 0;
    })

    // Object sorting

    let objArr = [
        { key: value },
        { key2: value2 },
        { key3: value3 },
        { key4: value4 },
    ]

    const wantSortingKey = "..";

    objArr.sort((a,b) => {
        // same String/Number
        // using a[wantSortingKey], b[wantSortingKey]
    })
```