<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tough-cookie](./tough-cookie.md) &gt; [CookieJar](./tough-cookie.cookiejar.md) &gt; [serializeSync](./tough-cookie.cookiejar.serializesync.md)

## CookieJar.serializeSync() method

Serialize the CookieJar if the underlying store supports `.getAllCookies`<!-- -->.

<strong>Note</strong>: Only works if the configured Store is also synchronous.

**Signature:**

```typescript
serializeSync(): SerializedCookieJar | undefined;
```
**Returns:**

[SerializedCookieJar](./tough-cookie.serializedcookiejar.md) \| undefined

