---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation IMethodArgs interface
---
# IMethodArgs <Badge text="Interface" type="interface"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { IMethodArgs }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.33.0/packages/common/src/filters/interfaces/Arguments.ts#L0-L0">/packages/common/src/filters/interfaces/Arguments.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">interface</span> IMethodArgs&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span> <span class="token keyword">extends</span> <a href="/api/common/filters/interfaces/IClassArgs.html"><span class="token">IClassArgs</span></a>&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
    propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol</code></pre>

</div>



:::