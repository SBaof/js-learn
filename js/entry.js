require ('./module-one');
require ('./module-two');

import Vue from 'vue';
import Foo from './components/foo.vue';

new Vue({
	el: '#app',
	components: {
		Foo
	}
})

require ('../style/main.css');