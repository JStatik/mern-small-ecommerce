const colors = require( 'colors' );
const { response } = require( 'express' );
const Product = require( '../../models/product' );

const getProduct = async( req, res = response ) => {
    const idProduct = encodeURI( req.params.id );

    if( idProduct.length !== 24 ) {
        return res.status( 400 ).json(
            {
                ok: false,
                msg: 'El ID es incorrecto'
            }
        );
    }

    try {
        const product = await Product.findById( idProduct );

        if( !product ) {
            return res.status( 404 ).json(
                {
                    ok: false,
                    msg: 'El producto es inexistente por ese ID'
                }
            );
        }

        return res.status( 200 ).json(
            {
                ok: true,
                product
            }
        );           
    } catch( err ) {
        console.log( colors.magenta( err ) );

        return res.status( 500 ).json(
            {
                ok: false,
                msg: 'Por favor, hable con el administrador'
            }
        );
    }
};

module.exports = {
    getProduct
};
