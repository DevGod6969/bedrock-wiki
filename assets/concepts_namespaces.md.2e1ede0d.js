import{o as e,c as a,a as o}from"./app.872c54d9.js";const n='{"title":"Namespaces","description":"","frontmatter":{"layout":"page","title":"Namespaces","parent":"Concepts"},"headers":[{"level":2,"title":"Picking a namespace","slug":"picking-a-namespace"},{"level":2,"title":"Where NOT to use namespaces.","slug":"where-not-to-use-namespaces"}],"relativePath":"concepts/namespaces.md","lastUpdated":1617526602200}',s={},c=o('<h1 id="namespaces"><a class="header-anchor" href="#namespaces" aria-hidden="true">#</a> Namespaces</h1><p>Namespaces are identifiers that marks content ownership. You can think of them as folders. Namespaces are useful, because they keep naming conflicts from happening.</p><p>Namespaces in addon creation can essentially be thought of as &quot;the part to the left of the colon&quot;. For example, <code>minecraft</code> is the namespace of <code>minecraft:zombie</code>. The general form is <code>namespace:name</code>.</p><p>As a really specific example of why namespaces are useful, lets imagine you create a new Mob. You name it <code>minecraft:shark</code>, not aware that you should create your own namespace for custom content. Next year, Mojang decides to add sharks into the game! Now there is a naming conflict, since there are two definitions of <code>minecraft:shark</code>. Your addon will break.</p><p>If you had instead used <code>your_namespace:shark</code>, the naming conflict wouldn&#39;t have happened.</p><h2 id="picking-a-namespace"><a class="header-anchor" href="#picking-a-namespace" aria-hidden="true">#</a> Picking a namespace</h2><p>A good namespace is completely unique to you. Something like <code>mob</code> or <code>cars</code> or <code>content</code> or <code>custom</code> would be a <strong>bad</strong> namespace, since another developer might come up with the same namespace as you.</p><p>A good namespace is short. You will be writing your namespace a <strong>LOT</strong>, so the shorter the better. <code>george_carlin_the_comedian</code> would be a bad namespace for this reason.</p><p>For personal projects, I recommend a convenient version of your player name, and for commercial projects, I recommend a convenient version of the company name.</p><p>Some good examples:</p><ul><li><code>gcarlin</code></li><li><code>sirlich</code></li><li><code>cubeworld</code></li><li><code>bworks</code></li></ul><p><strong>DO NOT USE</strong> <code>minecraft</code> or <code>minecon</code> as a namespace unless editing a vanilla file. Not only is it a terrible idea but Minecraft reserves these and it won&#39;t even work.</p><h1 id="where-to-use-namespaces"><a class="header-anchor" href="#where-to-use-namespaces" aria-hidden="true">#</a> Where to use namespaces?</h1><p>In short, you should use name-spaces as often as you can.</p><p>For starters, you should use a namespace when adding custom entities to the game.</p><p><code>sirlich:shark</code> is much better than <code>shark</code>.</p><p>You should also use namespaces for components, and events. Just like Mojang uses <code>minecraft:pig_saddled</code> you should use <code>namespace:my_mob_event</code>, and <code>namespace:my_component_group</code>.</p><p>You should also use namespaces in animation controllers, render controllers, and animations.</p><p>For example: <code>controller.animation.namespace.entity_name.action</code> is better than <code>controller.animation.my_action</code>.</p><h2 id="where-not-to-use-namespaces"><a class="header-anchor" href="#where-not-to-use-namespaces" aria-hidden="true">#</a> Where <strong>NOT</strong> to use namespaces.</h2><p>The actual file structure does not need namespaces.</p><p><code>animations/namespace/my_entity/animation</code> is more confusing than <code>animations/my_entity/animation</code>.</p>',22);s.render=function(o,n,s,t,r,i){return e(),a("div",null,[c])};export default s;export{n as __pageData};