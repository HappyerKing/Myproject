/**
 * user info
 */
import {observable} from 'mobx'

class UserStore {

    @observable user = {name:'gdz'};
}
const userStore = new UserStore()
export default userStore
