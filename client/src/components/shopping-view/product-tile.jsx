import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

function ShoppingProductTile({
    product, 
    handleGetProductDetails, 
    handleAddtoCart}) {
  return (
 <Card className="w-full max-w-sm max-auto">
 <div onClick={()=>handleGetProductDetails(product?._id) }>
    <div className='relative'>
        <img
            src={product?.image}
            alt={product?.title}
            className='w-full object-cover rounded-t-lg h-[300px]'
        />
        {
            product?.salePrice > 0 ? (
            <Badge className="absolute top-2 bg-red-500 left-2 hover:bg-red-600">Sale</Badge>) : null
        }
    </div>
    <CardContent className="p-4">
    <h2 className='font-bold mb-2 text-xl'>{product?.title}</h2>
{/* <div>
    <span className='text-muted-foreground text-sm'>{product?.category}</span> </div> */}
<div className='flex justify-between'>
    <span className={`${product?.salePrice > 0 ? 'line-through' :  " "} text-lg font-semibold text-primary`}>Rs. {product?.price}</span>
    {
        product?.salePrice > 0 ? (  <span className=" text-lg font-semibold text-primary"> 
        Rs. {product?.salePrice}
        </span>
        ): null
    }
  
</div>
    </CardContent>
 </div>
    <CardFooter>
    <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full"
          >
            Add to cart
          </Button>
    </CardFooter>

 </Card>
  )
}

export default ShoppingProductTile;