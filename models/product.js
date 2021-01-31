const { Schema, model } = require( 'mongoose' );
const uniqueValidator = require( 'mongoose-unique-validator' );

const ProductSchema = new Schema( {
    name: {
        type: String,
        required: [ true, 'El nombre del producto es obligatorio' ],
        unique: true
    },
    img: {
        type: String,
        required: [ true, 'La imagen del producto es obligatoria' ]
    },
    price: {
        type: String,
        required: [ true, 'El precio del producto es obligatorio' ]
    },
    description: {
        type: String,
        required: [ true, 'La descripcion del producto es obligatoria' ]
    }
} );

ProductSchema.plugin( uniqueValidator, { message: 'El nombre del producto ingresado, ya esta en uso' } );

ProductSchema.method( 'toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
} );

module.exports = model( 'Product', ProductSchema );
