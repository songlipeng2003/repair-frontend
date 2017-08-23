import Vue from 'vue'
import VueResource from 'vue-resource'
import { API_ENDPOINT } from './configs/config'

Vue.use(VueResource)

Vue.http.options.root = API_ENDPOINT
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['X-Access-Token'] = '1'

export const Account = Vue.resource(
  'user/v1/accounts', {}, {
    register: {
      method: 'POST',
      url: 'user/v1/accounts/register'
    },
    login: {
      method: 'POST',
      url: 'user/v1/accounts/login'
    }
  }
)

export const User = Vue.resource(
  'user/v1/users{/id}', {}, {
    names: {method: 'GET', url: 'users/names'},
    changePassword: {method: 'Put', url: 'users{/id}/change-password'}
  }
)

export const Announcement = Vue.resource(
  'user/v1/announcements{/id}'
)

export const FaultType = Vue.resource(
  'user/v1/fault-types{/id}'
)

export const SchoolRepair = Vue.resource(
  'school/v1/repairs{/id}'
)

export const SchoolDevice = Vue.resource(
  'school/v1/devices{/id}'
)

export const SchoolHome = Vue.resource(
  'school/v1/homes{/id}'
)

export const SchoolProject = Vue.resource(
  'org/v1/projects{/id}'
)

export const OrgProject = Vue.resource(
  'org/v1/projects{/id}'
)

export const OrgRepair = Vue.resource(
  'org/v1/repairs{/id}'
)

export const OrgDevice = Vue.resource(
  'org/v1/devices{/id}'
)

export const OrgHome = Vue.resource(
  'org/v1/homes{/id}'
)

export const SupplierRepair = Vue.resource(
  'supplier/v1/repairs{/id}'
)

export const SupplierProject = Vue.resource(
  'supplier/v1/projects{/id}'
)

export const SupplierServiceStation = Vue.resource(
  'supplier/v1/service-stations{/id}'
)

export const SupplierHome = Vue.resource(
  'supplier/v1/homes{/id}'
)

export const StationRepair = Vue.resource(
  'service-station/v1/repairs{/id}'
)

export const StationHome = Vue.resource(
  'service-station/v1/homes{/id}'
)

