---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation Socket decorator
---
# Socket <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { Socket }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/socketio"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.33.0/packages/socketio/src/decorators/socket.ts#L0-L0">/packages/socketio/src/decorators/socket.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">Socket</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> index<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span></code></pre>



<!-- Description -->
## Description

::: v-pre

Inject the Socket instance in the decorated parameter.

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @Input("event")
  myMethod(@Socket socket) {

  }
}
```


:::