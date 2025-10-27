import { getDatabase } from "firebase/database";
import {app} from '../firebase'

const db = getDatabase(app)  // db instance

export default function CatalogueDashboard() {
  return (
    <div>catalogueDashboard</div>
  )
}
