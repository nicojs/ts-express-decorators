---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation MongooseModel interface
---
# MongooseModel <Badge text="Interface" type="interface"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { MongooseModel }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/mongoose"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.33.0/packages/mongoose/src/interfaces/MongooseModel.ts#L0-L0">/packages/mongoose/src/interfaces/MongooseModel.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">interface</span> MongooseModel&lt<span class="token punctuation">;</span>T&gt<span class="token punctuation">;</span> <span class="token keyword">extends</span> mongoose.<a href="/api/mongoose/decorators/Model.html"><span class="token">Model</span></a>&lt<span class="token punctuation">;</span>T & mongoose.Document&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span></code></pre>