const colors = require( 'colors' );
const { response } = require( 'express' );
const Product = require( '../../models/product' );

const getProducts = async( req, res = response ) => {
    try {
        const products = await Product.find();

        return res.status( 200 ).json(
            {
                ok: true,
                products
            }
        );
    } catch( err ) {
        console.log( colors.magenta( err ) );

        return res.status( 500 ).json(
            {
                ok: false,
                msg: 'Por favor, hable con el administrador.'
            }
        );
    }
};

module.exports = {
    getProducts
};
