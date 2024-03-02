import { Router } from "express"
import { getItems } from "../controllers/order"
import { checkJwt } from "../middleware/session"
/**
 * solo puede acceder los que tienen session activa
 * que tenga un JWT valido
 */
const router = Router()

router.get("/", checkJwt, getItems)

export { router }