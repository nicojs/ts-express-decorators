---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation TemplateRenderingError class
---
# TemplateRenderingError <Badge text="Class" type="class"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { TemplateRenderingError }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.33.0/packages/common/src/mvc/errors/TemplateRenderingError.ts#L0-L0">/packages/common/src/mvc/errors/TemplateRenderingError.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> TemplateRenderingError <span class="token keyword">extends</span> InternalServerError <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">"TEMPLATING_RENDER_ERROR"</span><span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | <span class="token keyword">string</span><span class="token punctuation">,</span> method<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> err<span class="token punctuation">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | <span class="token keyword">string</span><span class="token punctuation">,</span> method<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> err<span class="token punctuation">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">name<span class="token punctuation">:</span> <span class="token string">"TEMPLATING_RENDER_ERROR"</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span> | <span class="token keyword">string</span><span class="token punctuation">,</span> method<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> err<span class="token punctuation">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::