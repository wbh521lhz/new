// <template>
  <div>
    <Loginheader></Loginheader>
    <Loginbanner></Loginbanner>
    <Logincontainer></Logincontainer>
    <Loginfooter></Loginfooter>
  </div>
</template>

<script>
import fontsizeset from '../../fontsizeset.js'
import Loginheader from '../components/Loginheader'
import Loginbanner from '../components/Loginbanner'
import Logincontainer from '../components/Logincontainer'
import Loginfooter from '../components/Loginfooter'
export default {
  name: 'app',
  components:{ Loginheader,Loginbanner,Logincontainer,Loginfooter }
}
</script>

<style>
  #app{
    width:7.5rem;
  }
</style>
