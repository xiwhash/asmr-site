function e(e){let t=globalThis.customElements;!t||t.get(e.tagName)||t.define(e.tagName,e)}
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t=class extends Event{constructor(e,t,n,r){super(`context-request`,{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=r??!1}};
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function n(e){return e}const r=n(Symbol.for(`@videojs/player`)),i=n(Symbol.for(`@videojs/media`)),a=n(Symbol.for(`@videojs/container`));function o(e){return typeof e==`number`}function s(e){return typeof e==`function`}function c(e){return e===null}function l(e){return e===void 0}function u(e){return typeof e==`object`&&!!e}export{l as a,r as c,e as d,u as i,n as l,c as n,a as o,o as r,i as s,s as t,t as u};
//# sourceMappingURL=predicate-Cad5WV4q.js.map