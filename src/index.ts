import { User } from './User'
import { Company } from './Company'
import { CustomMap } from "./CustomMap"

const map = new CustomMap(document.getElementById('#map'))

const user = new User()
const company = new Company()


map.addUserMarker(user)
map.addCompanyMarker(company)
