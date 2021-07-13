import{r as t,o as e,c as r,a,w as n,d as o,b as s}from"./404.md.d2df8681.js";const p='{"title":"Item Categories","description":"","frontmatter":{"title":"Item Categories","tags":["experimental"]},"headers":[{"level":2,"title":"Description","slug":"description"},{"level":2,"title":"Component","slug":"component"}],"relativePath":"items/item-categories.md","lastUpdated":1626170613548}',d={},i=s("Experimental"),m=o('<h1 id="application"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h1><p>Item categories are categories that an item appears in inside of the creative inventory.</p><h2 id="description"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>Item categories applied with the item description direct it to a more broad field in the creative category, individual tabs. They need to be the same tab as the component <code>creative_category</code>. Such would be applied like the following example:</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yanasakana:blind_skull&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;equipment&quot;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="component"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>Item categories applied with the item component <code>creative_category</code> direct it exactly where to go. Such would be applied like the following example:</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;minecraft:creative_category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;itemGroup.name.sword&quot;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><em>Note: This feature is currently experimental, and, as such, is currently only available for custom items. Make sure to use the new format!</em></p></blockquote><h1 id="list-of-creative-tabs"><a class="header-anchor" href="#list-of-creative-tabs" aria-hidden="true">#</a> List of Creative Tabs</h1><blockquote><p><em>For use with <code>description</code> parameter <code>category</code></em></p></blockquote><table><thead><tr><th>Category</th></tr></thead><tbody><tr><td>Commands</td></tr><tr><td>Construction</td></tr><tr><td>Equipment</td></tr><tr><td>Items</td></tr><tr><td>Nature</td></tr><tr><td>None</td></tr></tbody></table><h1 id="list-of-item-categories"><a class="header-anchor" href="#list-of-item-categories" aria-hidden="true">#</a> List of Item Categories</h1><blockquote><p><em>For use with the <code>creative_category</code> component</em></p></blockquote><table><thead><tr><th>Category</th></tr></thead><tbody><tr><td>itemGroup.name.anvil</td></tr><tr><td>itemGroup.name.arrow</td></tr><tr><td>itemGroup.name.axe</td></tr><tr><td>itemGroup.name.banner</td></tr><tr><td>itemGroup.name.banner_pattern</td></tr><tr><td>itemGroup.name.bed</td></tr><tr><td>itemGroup.name.boat</td></tr><tr><td>itemGroup.name.boots</td></tr><tr><td>itemGroup.name.buttons</td></tr><tr><td>itemGroup.name.chalkboard</td></tr><tr><td>itemGroup.name.chest</td></tr><tr><td>itemGroup.name.chestplate</td></tr><tr><td>itemGroup.name.concrete</td></tr><tr><td>itemGroup.name.concretePowder</td></tr><tr><td>itemGroup.name.cookedFood</td></tr><tr><td>itemGroup.name.coral</td></tr><tr><td>itemGroup.name.coral_decorations</td></tr><tr><td>itemGroup.name.crop</td></tr><tr><td>itemGroup.name.door</td></tr><tr><td>itemGroup.name.dye</td></tr><tr><td>itemGroup.name.enchantedBook</td></tr><tr><td>itemGroup.name.fence</td></tr><tr><td>itemGroup.name.fenceGate</td></tr><tr><td>itemGroup.name.firework</td></tr><tr><td>itemGroup.name.fireworkStars</td></tr><tr><td>itemGroup.name.flower</td></tr><tr><td>itemGroup.name.glass</td></tr><tr><td>itemGroup.name.glassPane</td></tr><tr><td>itemGroup.name.glazedTerracotta</td></tr><tr><td>itemGroup.name.grass</td></tr><tr><td>itemGroup.name.helmet</td></tr><tr><td>itemGroup.name.hoe</td></tr><tr><td>itemGroup.name.horseArmor</td></tr><tr><td>itemGroup.name.leaves</td></tr><tr><td>itemGroup.name.leggings</td></tr><tr><td>itemGroup.name.lingeringPotion</td></tr><tr><td>itemGroup.name.log</td></tr><tr><td>itemGroup.name.minecart</td></tr><tr><td>itemGroup.name.miscFood</td></tr><tr><td>itemGroup.name.mobEgg</td></tr><tr><td>itemGroup.name.monsterStoneEgg</td></tr><tr><td>itemGroup.name.mushroom</td></tr><tr><td>itemGroup.name.netherWartBlock</td></tr><tr><td>itemGroup.name.ore</td></tr><tr><td>itemGroup.name.permission</td></tr><tr><td>itemGroup.name.pickaxe</td></tr><tr><td>itemGroup.name.planks</td></tr><tr><td>itemGroup.name.potion</td></tr><tr><td>itemGroup.name.pressurePlate</td></tr><tr><td>itemGroup.name.rail</td></tr><tr><td>itemGroup.name.rawFood</td></tr><tr><td>itemGroup.name.record</td></tr><tr><td>itemGroup.name.sandstone</td></tr><tr><td>itemGroup.name.sapling</td></tr><tr><td>itemGroup.name.seed</td></tr><tr><td>itemGroup.name.shovel</td></tr><tr><td>itemGroup.name.shulkerBox</td></tr><tr><td>itemGroup.name.sign</td></tr><tr><td>itemGroup.name.skull</td></tr><tr><td>itemGroup.name.slab</td></tr><tr><td>itemGroup.name.splashPotion</td></tr><tr><td>itemGroup.name.stainedClay</td></tr><tr><td>itemGroup.name.stairs</td></tr><tr><td>itemGroup.name.stone</td></tr><tr><td>itemGroup.name.stoneBrick</td></tr><tr><td>itemGroup.name.sword</td></tr><tr><td>itemGroup.name.trapdoor</td></tr><tr><td>itemGroup.name.walls</td></tr><tr><td>itemGroup.name.wood</td></tr><tr><td>itemGroup.name.wool</td></tr><tr><td>itemGroup.name.woolCarpet</td></tr></tbody></table>',15);d.render=function(o,s,p,d,u,c){const l=t("Label");return e(),r("div",null,[a(l,{color:"yellow"},{default:n((()=>[i])),_:1}),m])};export default d;export{p as __pageData};