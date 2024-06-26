<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tough-cookie](./tough-cookie.md) &gt; [CookieJar](./tough-cookie.cookiejar.md) &gt; [(constructor)](./tough-cookie.cookiejar._constructor_.md)

## CookieJar.(constructor)

Creates a new `CookieJar` instance.

**Signature:**

```typescript
constructor(store?: Nullable<Store>, options?: CreateCookieJarOptions | boolean);
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

store


</td><td>

[Nullable](./tough-cookie.nullable.md)<!-- -->&lt;[Store](./tough-cookie.store.md)<!-- -->&gt;


</td><td>

_(Optional)_ a custom [Store](./tough-cookie.store.md) implementation (defaults to [MemoryCookieStore](./tough-cookie.memorycookiestore.md)<!-- -->)


</td></tr>
<tr><td>

options


</td><td>

[CreateCookieJarOptions](./tough-cookie.createcookiejaroptions.md) \| boolean


</td><td>

_(Optional)_ configures how cookies are processed by the cookie jar


</td></tr>
</tbody></table>

## Remarks

- If a custom store is not passed to the constructor, an in-memory store ([MemoryCookieStore](./tough-cookie.memorycookiestore.md) will be created and used. - If a boolean value is passed as the `options` parameter, this is equivalent to passing `{ rejectPublicSuffixes: <value> }`

