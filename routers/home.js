/************************************************************************* RUTAS DE HOME / HOME *************************************************************************/
/*************************************************************************** HOST + /API/HOME ***************************************************************************/
const { Router } = require( 'express' );
const { verifyJWT } = require( '../middlewares/verifyJWT' );
const { getProduct } = require( '../controllers/home/getProduct' );
const { getProducts } = require( '../controllers/home/getProducts' );

const router = Router();

router.get( '/', verifyJWT, getProducts );

router.get( '/:id', verifyJWT, getProduct );

module.exports = router;
