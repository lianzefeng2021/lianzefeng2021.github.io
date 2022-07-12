import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import screenfull from 'screenfull'


export default ({ Vue, options, router, siteData }) => {
  Vue.use(Element,screenfull);
};